import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Components
import TopBar from './TopBar.jsx';
import RatingList from './RatingList.jsx';
import ReviewList from './ReviewList.jsx';
import Modal from './Modal.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Circular, -apple-system, system-ui, Roboto;
    color: rgb(34, 34, 34);
    position: relative;
  }
  input {
    font-family: Circular, -apple-system, system-ui, Roboto;
    color: rgb(34, 34, 34);
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 1120px;
  padding: 10px;
`;

const ShowAllButton = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 13px 23px 13px 23px;
  border-width: 1px;
  border-color: rgb(34, 34, 34);
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;

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
      reviewsDisplayed: [],
      modalVisible: false,
      avgcleanlinessRating: 0,
      avgcommunicationRating: 0,
      avgcheckInRating: 0,
      avgaccuracyRating: 0,
      avglocationRating: 0,
      avgvalueRating: 0,
      avgtotalRating: 0,
    };

    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    $.ajax({
      url: `/api${window.location.pathname}`,
      type: 'GET',
      dataType: 'json',
      success: (responseData) => {
        for (const ratingKey of ratingKeys) {
          let total = 0;
          for (const review of responseData) {
            total = total + review[ratingKey];
          }
          const average = total / responseData.length;
          this.setState({
            [`avg${ratingKey}`]: average,
          });
        }
        this.setState({
          reviews: responseData,
          reviewsDisplayed: responseData.slice(0, 6),
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
    return (
      <AppContainer>
        <GlobalStyle />

        {this.state.modalVisible ? (
          <Modal
            close={() => {
              this.toggleModalVisibility();
            }}
            {...this.state}
          ></Modal>
        ) : null}

        <TopBar
          avgtotalRating={this.state.avgtotalRating}
          reviewsLength={this.state.reviews.length}
        />

        <RatingList {...this.state} />

        <ReviewList reviewsDisplayed={this.state.reviewsDisplayed} />

        {this.state.reviews.length > 6 ? (
          <ButtonContainer>
            <ShowAllButton
              onClick={() => {
                this.toggleModalVisibility();
              }}
            >
              Show all {this.state.reviews.length} reviews
            </ShowAllButton>
          </ButtonContainer>
        ) : null}
      </AppContainer>
    );
  }
}

export default App;
