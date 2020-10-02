import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import styled from 'styled-components';

const ReviewList = (props) => {
  const isModal = props.isModal;

  let reviews = props.reviewsDisplayed;
  if (isModal) {
    reviews = props.reviews;
  }

  const Container = styled.div`
    display: flex;
    width: ${props.isModal ? '500' : '1120'}px;
    padding: 10px 10px 10px 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  return (
    <Container className="review-list">
      {reviews.map((review, i) => (
        <ReviewListEntry key={i} review={review} isModal={isModal} />
      ))}
    </Container>
  );
};

export default ReviewList;
