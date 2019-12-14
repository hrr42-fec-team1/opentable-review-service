import Review from './Review.jsx';

var ReviewList = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review =>
      <Review review={review} />
    )}
  </div>
);

export default ReviewList;
