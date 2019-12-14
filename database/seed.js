const Review = require('./Review.js');
const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews');

var REVIEWS_TO_CREATE = 10;

//  REVIEWS
//  we're going to use random number for restaurant_id so we don't end up with same number of
//    reviews in each restaurant
//  actually should create random number of reviews for EACH restaurant
var rev = [];

for (var i = 0; i < REVIEWS_TO_CREATE; i++) {
  rev[i] = {};
  rev[i].restaurant_id = Math.floor(Math.random() * 100) +1;
  rev[i].customer_name = faker.name.findName();
  rev[i].customer_from = faker.address.city();
  rev[i].num_of_reviews = getRandomInteger(1, 300);
  rev[i].overall_stars = getRandomInteger(1, 5);
  rev[i].food_stars = getRandomInteger(1, 5);
  rev[i].service_stars = getRandomInteger(1, 5);
  rev[i].ambience_stars = getRandomInteger(1, 5);
  rev[i].comments = "lorem stuff";
}

//  clear any existing reservations
Review.deleteMany({}, ()=>{});
//  plug in array
Review.create(rev, ()=>{});

mongoose.disconnect();

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}