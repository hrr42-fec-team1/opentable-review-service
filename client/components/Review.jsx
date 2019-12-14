import React from 'react';
import ReactDOM from 'react-dom';

var Review = ({review}) => (
  <div>
    <div>
      {review.comments}
    </div>
  </div>
);

export default Review;
