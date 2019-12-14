const mongoose = require('./connect')
mongoose.Promise = global.Promise;

let reviewSchema = mongoose.Schema({
  restaurant_id: Number,
  reviewer_name: String,
  reviewer_from: String,
  num_of_reviews: Number,
  overall_stars: Number,
  food_stars: Number,
  service_stars: Number,
  ambience_stars: Number,
  comments: String
});

let Review = mongoose.model('Review', reviewSchema);

var getAll = () => {
  return new Promise((resolve, reject) => {
    Review.find()
      .exec((err, reviews) => {
        resolve(reviews);
      });
  });
};

var getAllForRestaurant = (restaurantId) => {
  return new Promise((resolve, reject) => {
    Review.find({ restaurant_id: restaurantId })
      .exec((err, reviews) => {
        resolve(reviews);
      });
  });
};

module.exports = Review;
module.exports.getAll = getAll;
module.exports.getAllForRestaurant = getAllForRestaurant;