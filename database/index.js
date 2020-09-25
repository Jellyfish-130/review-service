const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookable');

const reviewSchema = mongoose.Schema ({
  username: String,
  image: String,
  dateNum: Number,
  dateStr: String,
  review: String,
  roomId: Number, //This will be mongoose.ObjectId once the room model has been created
});


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;