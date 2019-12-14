//  not clear why these two are necessary
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';


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
		.then(res => { //console.log(res);
			if (res.data !== undefined && res.data !== {}) {
      this.setState({reviews: res.data});
      console.log(this.state.reviews);
    }
  })
	}


  render() {
    return (
      <div className="reviews">
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }
}
export default App;
