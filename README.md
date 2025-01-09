# Ate It

(__TODO__)
- Wireframe/ sitemap  finalize readme
- User page, photo, num of restaurants in each catagory, friends list follow/friends
- social and permenantly up coming 2025
- fix color coordinated markers on map
- hide reservations/ to visit if does not apply
- select restaurant for drop down info (personal info possibly friends info)
- fix look currently ugly
- three map views community ratings, friends to visit and rated, personal all
- user security before uploaded (hash passwords, keep private, retrieval emails etc...)
- include my rating vs friends vs community 
- friend request no follows public vs private facing pages
- search reservation site apis allowing users to make reservations in the site  

<br> 
- Iphone App (2025)???


## Overview

It can be hard to track all of the restaurants you've been to when in a city as extensive as NYC. Sometimes a name sounds familiar, but it can be hard to remember if that's a good or bad thing. 

AteIt is a social restaurant tracker where you can keep track of all the restaurants that you have been to, all the restaurants you wish to visit, and any reservations you might have. Along with the restaurants names AteIt is a platform that will keep track of location, what you ordered, the cost, and most importantly if it was any good. It is a way to make recommending others places to eat and tracking personal eating out easier, because no one wants to spend all night figuring out where to eat dinner. 

AteIt shows users a home page comprised of their top ten restaurants visited, a few of the restaurants they wish to visit, and any upcoming reservations. In addition to showing tables AteIt generates a map powered by Google Maps, which displays color coordinated markers based upon the category of a restaurant, and displaying red to green markers based upon the rating of restaurants already visited. 


## Data Models


An Example User:

```javascript
{
  username: "eater",
  hash: *****, // a password hash
  restaurants: // an array of restaurant elements
}
```

An Example of a Restaurant element:

```javascript
{
  user: "eater", // a reference to a User id 
  name: "Dumpling Man", //String
  location: "100 St Marks Pl #7, New York, NY 10009" , //String (powered by GoogleMaps API)
  order: ["Seared Pork Dumplings", "Soup Dumplings"], //ArrayString (Optional)
  prince: 20, // Number (Optional)
  rating: 10, // Number 1-10 (Optional)
  review: "Best dumplings in the city", //String (Optional)
  time: 0 //String generated for Reservations
  date: (2024, April, 5,) //Date generated for Reservations,
  isReservation: { type: Boolean, default: false }, //Denotes if it is a reservation
  toVisit: { type: Boolean, default: false }, //Denotes if it is a location not yet visited
  isRestaurant: { type: Boolean, default: false }, //Denotes the object is a Restaurant type
}
````

## Wireframe






## Site map



## User Stories or Use Cases


1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can add restaurants I've been too
4. as a user, I can view all of the restaurants I've been to in a single list
5. as a user, I can edit restaurants scores, and items that I have already been to
6. as a user, I can look up restaurants I've been to in a given city/area
7. as a user, I can add reservations, and what time they are to get a reminder





## Annotations / References Used

[Link to Initial Main Project File](https://github.com/nyu-csci-ua-0467-001-002-spring-2024/final-project-ericemmendorfer/blob/272d8ab0b04b4545daf87b7117bf2cf44769c5bb/app.mjs) 

Map and Location tools  
  - [Geo Location API](https://developers.google.com/maps/documentation/geolocation/overview)  
  - [integrating map database API](https://developers.google.com/maps/documentation/datasets)  
  - [location search integration API](https://developers.google.com/maps/documentation)



