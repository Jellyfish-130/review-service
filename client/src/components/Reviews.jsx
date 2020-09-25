import React from 'react';
import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(porps);

    this.state = {
      reviews: [],
      avgCleanlinessRating: 0,
      avgCommunicationRating: 0,
      avgCheckInRating: 0,
      avgAccuracyRating: 0,
      avgLocationRating: 0,
      avgValueRating: 0,
      reviewsDisplayed: [],
      showAllReviews: false
    };
  }

  componentDidMount() {
    this.getAllReviews(roomId);
  }

  getAllReviews(roomId) {
    $.ajax({
      url: '/api/rooms/${roomId}/reviews',
      type: 'GET',
      dataType: 'json',
      success: (responseData) => {
        this.state.reviews.push(responseData);
        this.setState({
          reviews: this.state.reviews,
          reviewsDisplayed: this.state.reviews.slice(0, 6)
        });
      }
    });
  }

}

