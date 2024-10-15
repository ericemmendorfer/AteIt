/* eslint-disable prefer-const */
import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import Restaurant from './db.mjs';

dotenv.config();

const app = express();

// Create an Express app
app.engine('handlebars', engine({ layoutsDir: './views', defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');
app.set('views', './views');



app.use(express.static('./src'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', async (req, res) => {
  try {
    
      // Define an initial filter object
      let filter = {isReservation: false, toVisit: false};
  
      // Check if there's a query parameter for filtering by name
      if (req.query.name) {
        filter.name = req.query.name;
      }
  
    // Apply the filter
    const restaurants = await Restaurant.find(filter);
  
    restaurants.sort((a, b) => b.rating - a.rating);
    const topRestaurants = restaurants.slice(0, 10);
    
      // Define filter criteria for reservations
       filter = { isReservation: true, toVisit: false};
       //make sure not to visit
       filter.toVisit = false;
      // Check if there's a query parameter for filtering by name
      if (req.query.name) {
        filter.name = req.query.name;
      }
  
      // Retrieve reservations using the Reservation model
      const reservations = await Restaurant.find(filter);
      reservations.sort((a, b) => b.date - a.date);
      const topReservations = reservations.slice(0, 10);
  

  
    res.render('home', { topRestaurants, topReservations });
  } catch (error) {
    console.error('Error fetching top restaurants:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/restaurants', async (req, res) => {
  try {
    // Define an initial filter object
    // eslint-disable-next-line prefer-const
    let filter = { isReservation: false };
    filter.toVisit = false;

    // Check if there's a query parameter for filtering by name
    if (req.query.name) {
      filter.name = { $regex: req.query.name, $options: 'i' };
    }

    // Apply the filter
    const restaurants = await Restaurant.find(filter);

    restaurants.sort((a, b) => b.rating - a.rating);

    // Render the restaurants view with filtered restaurants
    res.render('restaurants', { restaurants });
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/restaurants/add', (req, res) => {
    res.render('restForm'); 
});

app.post('/restaurants/add', async (req, res) => {
  try {
      const { name, location, order, price, rating, review } = req.body;

      // Create a new restaurant instance
      const newRestaurant = new Restaurant({ name, location, order, price, rating, review, isReservation: false, toVisit: false});

      // Save the new restaurant to the database
      await newRestaurant.save();

      console.log('New restaurant added:', newRestaurant);
      
      // Redirect to the restaurants page after adding
      res.redirect('/restaurants');
  } catch (error) {
      console.error('Error adding restaurant:', error);
      res.status(500).send('Internal Server Error');
  }
});

// Add route for deleting restaurants
app.post('/restaurants/delete/:id', async (req, res) => {
  try {
    // Delete the reservation using the ID parameter
    await Restaurant.findByIdAndDelete(req.params.id);
    res.redirect('/restaurants'); // Redirect to restaurant page after deleting
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/reservations', async (req, res) => {
    try {
      // Define filter criteria for reservations
      let filter = { isReservation: true, toVisit: false};
  
      // Check if there's a query parameter for filtering by name
      if (req.query.name) {
        filter.name = { $regex: req.query.name, $options: 'i' };
      }
  
      // Check if there's a query parameter for filtering by location
      if (req.query.location) {
        filter.location = req.query.location;
      }
  
      // Retrieve reservations using the Reservation model
      const reservations = await Restaurant.find(filter);

      reservations.sort((a, b) => b.date - a.date);

      res.render('reservations', { reservations });
    } catch (error) {
      console.error('Error fetching reservations:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.get('/reservations/form/:id?', async (req, res) => {
  try {
      let reservation = null;
      // If ID is provided, fetch the reservation details for editing
      if (req.params.id) {
          reservation = await Restaurant.findById(req.params.id);
      }
      res.render('resForm', { reservation });
  } catch (error) {
      console.error('Error fetching reservation for editing:', error);
      res.status(500).send('Internal Server Error');
  }
});

//get reservations/add
app.get('/reservations/add', (req, res) => {
  res.render('resForm');
});

// Route to handle adding or updating reservations
app.post('/reservations/add', async (req, res) => {
  try {
      const { name, location, date, time } = req.body;
      // Create a new reservation
      const newReservation = new Restaurant({ name, location, date, time });
      newReservation.isReservation = true;
      // Save new reservation
      await newReservation.save();
      console.log('New reservation added:', newReservation);
      res.redirect('/reservations'); // Redirect to reservations page
  } catch (error) {
      console.error('Error adding reservation:', error);
      res.status(500).send('Internal Server Error');
  }
});

app.post('/reservations/delete/:id', async (req, res) => {
  try {
    // Delete the reservation using the ID parameter
    await Restaurant.findByIdAndDelete(req.params.id);
    res.redirect('/reservations'); // Redirect to reservation page after deleting
  } catch (error) {
    console.error('Error deleting reservation:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/toVisit', async (req, res) => {
  try {
    // Define an initial filter object
   let filter = {toVisit: true};

    // Check if there's a query parameter for filtering by name
    if (req.query.name) {
      filter.name = { $regex: req.query.name, $options: 'i' };
    }

  // Apply the filter
  const destinations = await Restaurant.find(filter);
        
  console.log('Retrieved restaurants:', destinations);
  
  // Render the restaurants view with filtered restaurants
res.render('toVisit', { destinations });
  } catch (error) {
    console.error('Error fetching toVisit:', error);
    res.status(500).send('Internal Server Error');
  }
  });

app.get('/toVisit/add', (req, res) => {
  res.render('toVisitForm');
}
);

app.post('/toVisit/add', async (req, res) => {
  try {
    const { name, location} = req.body;
    // Create a new reservation
    const newVisit = new Restaurant({ name, location });
    // Mark as reservation
    newVisit.isReservation = false;
    newVisit.toVisit = true;
    // Save new reservation
    await newVisit.save();
    console.log('New destination added:', newVisit);
    res.redirect('/toVisit');
  } catch (error) {
    console.error('Error adding destination:', error);
    res.status(500).send('Internal Server Error');
  }
}
);

app.post('/toVisit/delete/:id', async (req, res) => {
  try {
    // Delete the reservation using the ID parameter
    await Restaurant.findByIdAndDelete(req.params.id);
    res.redirect('/toVisit'); // Redirect to reservations page after deleting
  } catch (error) {
    console.error('Error deleting destination:', error);
    res.status(500).send('Internal Server Error');
  }
});
// Add route for marking an item as visited and redirecting to the restForm with the current name and location

//mark as visited delete the item from toVisit and create a new item in restaurants with the same name and location
app.post('/toVisit/visited/:id', async (req, res) => {
  try {
    // Find the destination by ID
    const destination = await Restaurant.findById(req.params.id);

    // Update the destination document
    destination.rating = req.body.rating;
    destination.toVisit = false;
    destination.isRestaurant = true;

    // Save the updated document
    await destination.save();

    // Redirect to toVisit page after marking as visited
    res.redirect('/toVisit');
  } catch (error) {
    console.error('Error marking as visited:', error);
    res.status(500).send('Internal Server Error');
  }
});


//app.get
app.get('/map', async (req, res) => {
  try {
    const restaurants = await Restaurant.find(); // Assuming you have a Restaurant model
    res.render('map', { restaurants }); // Pass restaurant data to the template
  } catch (error) {
    console.error('Error rendering map:', error);
    res.status(500).send('Internal Server Error');
  }
  
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


