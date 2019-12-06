//  API server

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('../database/connect.js');
const Review = require('../database/Review.js');

let app = express();

app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  get all reviews (for testing)
app.get('/review/all', function (req, res) {
  Review.getAll()
  .then((reviews) => {
    res.write(JSON.stringify(reviews));
    res.end();
  })
  .catch((err) => {
    console.log('Error: ', err);
    res.end();
  });
});

//  get all reviews for one restaurant
app.get('/review/:restaurantId', function (req, res) {
  var restaurantId = req.params.restaurantId;
  Review.getAllForRestaurant(restaurantId)
    .then((restaurants) => {
      res.write(JSON.stringify(restaurants));
      res.end();
    })
    .catch((err) => {
      console.log('Error: ', err);
      res.end();
    });
});

let port = 3005;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
