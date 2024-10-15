The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(__TODO__: your project name)

# Ate It

## Overview

(__TODO__: a brief one or two paragraph, high-level description of your project)

It can be hard to track all of the restaurants you've been to when in a city as extensive as NYC. Sometimes a name sounds familiar, but it can be hard to remember if that's a good or bad thing. 

Ate It is a restaurant tracker where you can keep track of all the restaurants that you have been too, what city/neighborhood they are in, what you ordered, and most importantly if it was any good. It is a way to make recommending others places to eat and tracking personal eating out easier, because no one wants to spend all night figuring out where to eat dinner. 


## Data Model

(__TODO__: a description of your application's data and their relationships to each other) 

This application will store users, restaurants, and reservations.

* users will each have an array list of restaurants
* restaurants will have the following: name, location, ranking, item(s) ordered, price, notes
* reservations will have the restaurant, time, and date

(__TODO__: sample documents)

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
  items: [
    { name: "pancakes", quantity: "9876", checked: false},
    { name: "ramen", quantity: "2", checked: true},
  ],
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](db.mjs) 

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/ homepage

![Home](wireframe/rests.jpeg)

/list - page for showing all personal restaurants

![list](wireframe/rests.jpeg)

/list/add - page for adding a new restaurant

![list](wireframe/addRest.jpeg)

/reservations - page for adding reservations and seeing existing reservations

![list](wireframe/reservations.jpeg)


## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wiki pedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

![sietmap](wireframe/sitemap.jpeg)
## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can add restaurants I've been too
4. as a user, I can view all of the restaurants I've been to in a single list
5. as a user, I can edit restaurants scores, and items that I have already been to
6. as a user, I can look up restaurants I've been to in a given city/area
7. as a user, I can add reservations, and what time they are to get a reminder

## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)


* (6 points) React 
  * making a cleaner looking user interface

* (4 points) Google-maps APIS
  * to add information about a restaurants location
  * display a map of restaurants
  * recommend restaurants based off of the area and google reviews

  [Geo Location API](https://developers.google.com/maps/documentation/geolocation/overview)
  [integrating map database API](https://developers.google.com/maps/documentation/datasets)
  [location search integration API](https://developers.google.com/maps/documentation)

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](https://github.com/nyu-csci-ua-0467-001-002-spring-2024/final-project-ericemmendorfer/blob/272d8ab0b04b4545daf87b7117bf2cf44769c5bb/app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)