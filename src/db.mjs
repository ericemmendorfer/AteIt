import mongoose from 'mongoose';
import dotenv from 'dotenv';
import 'mongodb';


dotenv.config();

// Connect to MongoDB using the connection string from .env file or fallback to a default value
const connectionString = process.env.DSN || 'mongodb://localhost/ateit';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(`Connected to MongoDB using connection string: ${connectionString}`))
.catch(error => console.error('Error connecting to MongoDB:', error));




// Schema definitions
const restaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  order: String,
  price: Number,
  rating: Number,
  review: String,
  time: String,
  date: Date,
  isReservation: { type: Boolean, default: false },
  toVisit: { type: Boolean, default: false },
  isRestaurant: { type: Boolean, default: false },
});

const locationSchema = new mongoose.Schema({
  name: String,
  type: String,
  lat: Number,
  long: Number,
});

// Models
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Location = mongoose.model('Location', locationSchema);

// Export models if needed
export default Restaurant;
export { Location };