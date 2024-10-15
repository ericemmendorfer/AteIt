import app from './app.mjs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import 'mongodb';

const handlebars = require('express-handlebars');

//async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1TCdLmoGuDnRkr_7OwouxmPvxtb-Z8bM&libraries=places&callback=initAutocomplete" onError="handleError()"


function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 14,
    mapTypeId: "roadmap",
  });

  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  function changeMarker(marker, rating) {
if (rating >= 8) {
  marker.setIcon("https://maps.google.com/mapfiles/ms/icons/green-dot.png");
} else if (rating >= 6) {
  marker.setIcon("https://maps.google.com/mapfiles/ms/icons/yellow-dot.png");
} else {
  marker.setIcon("https://maps.google.com/mapfiles/ms/icons/red-dot.png");
}
}

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  // Loop through each restaurant and create a marker for it
  {{#each restaurants}}
  address = "{{this._doc.location}}"; 
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address }, (results, status) => {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "{{this._doc.name}}", // Restaurant name
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        },
      });
      if ({{this._doc.isReservation}}) {
        marker.setIcon("https://maps.google.com/mapfiles/ms/icons/purple-dot.png");
      } else if ({{this._doc.toVisit}}) {
        marker.setIcon("https://maps.google.com/mapfiles/ms/icons/blue-dot.png");
      } 
      
     if({{this._doc.isRestaurant}}===true){
          changeMarker(marker, {{this._doc.rating}});
      
    }
      
      markers.push(marker);
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
  {{/each}}

  // Add event listener for when the user selects a prediction
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      const marker = new google.maps.Marker({
        map,
        icon,
        title: place.name,
        position: place.geometry.location,
      });
      markers.push(marker);
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

window.initAutocomplete = initAutocomplete;


function handleError() {
  console.error("There was an error loading the Google Maps API.");
};

};


