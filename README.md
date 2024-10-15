# Ate It
## TO DO:  
  Pop up page for clicking on restaurant to see more details  
  Redo look of website make it cleaner  
      Add images of new look into read me  

  integrate login and different users and passwords  
  
    
  


## Overview

It can be hard to track all of the restaurants you've been to when in a city as extensive as NYC. Sometimes a name sounds familiar, but it can be hard to remember if that's a good or bad thing. 

Ate It is a restaurant tracker where you can keep track of all the restaurants that you have been too, what city/neighborhood they are in, what you ordered, and most importantly if it was any good. It is a way to make recommending others places to eat and tracking personal eating out easier, because no one wants to spend all night figuring out where to eat dinner. 


## Data Model

This application will store users, restaurants, and reservations.

* users will each have an array list of restaurants
* restaurants will have the following: name, location, ranking, item(s) ordered, price, notes
* reservations will have the restaurant name, location, time, and date



An Example User:

```javascript
{
  username: "eater",
  hash: // a password hash,
  restaurants: // an array of references to List documents
}
```

An Example List with Embedded Restaurants:

```javascript
{
  user: // a reference to a User object
  name: "Dumpling Man",
  address: "street address"
  items: [
    { name: "pancakes", quantity: "9876", checked: false},
    { name: "ramen", quantity: "2", checked: true},
  ],
  createdAt: // timestamp
}
```

## Site map
Here's a [complex example from wikipedia](https://upload.wikimedia.org/wiki pedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

### COMING

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can add restaurants I've been too
4. as a user, I can view all of the restaurants I've been to in a single list
5. as a user, I can edit restaurants scores, and items that I have already been to
6. as a user, I can look up restaurants I've been to in a given city/area
7. as a user, I can add reservations, and what time they are to get a reminder





## Annotations / References Used
[Geo Location API](https://developers.google.com/maps/documentation/geolocation/overview)  
  [integrating map database API](https://developers.google.com/maps/documentation/datasets)  
  [location search integration API](https://developers.google.com/maps/documentation)  

## [Link to Initial Main Project File](https://github.com/nyu-csci-ua-0467-001-002-spring-2024/final-project-ericemmendorfer/blob/272d8ab0b04b4545daf87b7117bf2cf44769c5bb/app.mjs) 

## Research Topics
* (6 points) React 
  * making a cleaner looking user interface

* (4 points) Google-maps APIS
  * to add information about a restaurants location
  * display a map of restaurants
  * recommend restaurants based off of the area and google reviews

  [Geo Location API](https://developers.google.com/maps/documentation/geolocation/overview)  
  [integrating map database API](https://developers.google.com/maps/documentation/datasets)  
  [location search integration API](https://developers.google.com/maps/documentation)  

