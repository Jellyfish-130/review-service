import React from 'react';
import $ from 'jquery';
import RatingList from './RatingList.jsx';
import ReviewList from './ReviewList.jsx';
import TopBar from './TopBar.jsx';
import styled from 'styled-components';
import Modal from './Modal.jsx';

import { createGlobalStyle } from 'styled-components';

const ratingKeys = [
  'cleanlinessRating',
  'communicationRating',
  'checkInRating',
  'accuracyRating',
  'locationRating',
  'valueRating',
  'totalRating',
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      numberOfReviews: 0,
      avgcleanlinessRating: 0,
      avgcommunicationRating: 0,
      avgcheckInRating: 0,
      avgaccuracyRating: 0,
      avglocationRating: 0,
      avgvalueRating: 0,
      avgtotalRating: 0,
      reviewsDisplayed: [],

      modalVisible: false,
    };

    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  componentDidMount() {
    this.getAllReviews(2);
  }

  getAllReviews(roomId) {
    $.ajax({
      url: `/api/rooms/${roomId}/reviews`,
      type: 'GET',
      dataType: 'json',
      success: (responseData) => {
        const newReviews = this.state.reviews.concat(responseData);

        for (const ratingKey of ratingKeys) {
          let total = 0;
          for (const review of newReviews) {
            total = total + review[ratingKey];
          }
          const average = total / newReviews.length;
          this.setState({
            [`avg${ratingKey}`]: average,
          });
        }
        this.setState({
          reviews: newReviews,
          numberOfReviews: newReviews.length,
          reviewsDisplayed: newReviews.slice(0, 6),
        });
      },
    });
  }

  toggleModalVisibility() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  render() {
    const GlobalStyle = createGlobalStyle`
      body {
        margin: 0;
      }
    `;
    const AppContainer = styled.div`
      display: flex;
      position: relative;
      color: rgb(34, 34, 34);
      font-family: Circular, -apple-system, system-ui, Roboto;
      align-items: center;
      flex-direction: column;
    `;

    const ButtonContainer = styled.div`
      display: flex;
      width: 1120px;
      justify-content: flex-start;
      padding: 10px;
    `;

    const ShowAllButton = styled.div`
      display: flex;
      font-size: 16px;
      font-weight: 600;
      padding: 13px 23px 13px 23px;
      border-width: 1px;
      border-color: rgb(34, 34, 34);
      border-style: solid;
      border-radius: 8px;
      justify-content: start;
    `;

    let button = null;
    if (this.state.reviews.length > 6) {
      button = (
        <ButtonContainer>
          <ShowAllButton
            onClick={() => {
              this.toggleModalVisibility();
            }}
          >
            Show all {this.state.numberOfReviews} reviews
          </ShowAllButton>
        </ButtonContainer>
      );
    }

    return (
      <AppContainer>
        <GlobalStyle />
        <Modal
          visible={this.state.modalVisible}
          close={() => {
            this.toggleModalVisibility();
          }}
          reviews={this.state.reviews}
        ></Modal>

        <TopBar
          avgtotalRating={this.state.avgtotalRating}
          numberOfReviews={this.state.numberOfReviews}
        />
        <RatingList
          {...{
            avgcleanlinessRating: this.state.avgcleanlinessRating,
            avgcommunicationRating: this.state.avgcommunicationRating,
            avgcheckInRating: this.state.avgcheckInRating,
            avgaccuracyRating: this.state.avgaccuracyRating,
            avglocationRating: this.state.avglocationRating,
            avgvalueRating: this.state.avgvalueRating,
          }}
        />
        <ReviewList reviewsDisplayed={this.state.reviewsDisplayed} />
        {button}
      </AppContainer>
    );
  }
}

export default App;
