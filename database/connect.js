const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

module.exports = mongoose;