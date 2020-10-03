import React from 'react';
import styled from 'styled-components';

// Components
import ReviewListEntry from './ReviewListEntry.jsx';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: ${(props) => (props.isModal ? '500' : '1120')}px;
  padding: 10px 10px 10px 10px;
`;

const ReviewList = (props) => {
  const isModal = props.isModal;

  let reviews = props.reviewsDisplayed;
  if (isModal) {
    reviews = props.reviews;
  }

  return (
    <Container className="review-list">
      {reviews.map((review, i) => (
        <ReviewListEntry
          key={i}
          review={review}
          isModal={isModal}
          search={props.search}
        />
      ))}
    </Container>
  );
};

export default ReviewList;
