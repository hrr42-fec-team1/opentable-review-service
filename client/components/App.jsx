//  not clear why these two are necessary
import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';


let params = (new URL(document.location)).searchParams;
let restId = parseInt(params.get('restaurantid')) || 92;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
    //  load reviews from server
    this.getReviews.bind(this);
    this.getReviews(restId);
  }

  getReviews(restId) {
		axios.get(`http://localhost:3005/review/${restId}`)
		.then(res => {
			if (res.data !== undefined && res.data !== {}) {
			this.setState({reviews: reviews});
    }
  })
	}


  render() {
    return (
      <ReviewList reviews={this.state.reviews} />
    )
  }
}
export default App;
