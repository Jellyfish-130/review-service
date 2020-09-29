import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import styled from 'styled-components';

const ReviewList = (props) => {
  const Container = styled.div`
    display: flex;
    width: 1120px;
    padding: 10px 10px 10px 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  return (
    <Container className="review-list">
      {props.reviewsDisplayed.map((review, i) => (
        <ReviewListEntry key={i} review={review} />
      ))}
    </Container>
  );
};

export default ReviewList;
