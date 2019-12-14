import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';

var ReviewList = ({reviews}) => (
  <div className="review-list">
    <h2>What a crapload of people are saying</h2>
    {reviews.map(review =>
      <Review review={review} />
    )}
  </div>
);

export default ReviewList;
