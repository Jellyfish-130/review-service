import React from 'react';
import styled from 'styled-components';

const ReviewListEntry = (props) => {

  const Container = styled.div`
    display: flex;
    width: 450px;
  `;

  const AvatarNameDateAndReview = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const AvatarNameAndDate = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
  `;

  const NameAndDate = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const AverageRating = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const Avatar = styled.img.attrs(() => ({
    src: props.review.image,
  }))`
    padding: 3px 6px 3px 3px;
    width: 57px;
    height: 60px;
    border-radius: 50%;
  `;
  return (
    <Container className="review-list-entry">
      <AvatarNameDateAndReview>
        <span><AvatarNameAndDate>
          <span><Avatar src={props.review.image}/></span>
          <span><NameAndDate>
            <span>{props.review.username}</span>
            <span>{props.review.dateStr}</span>
          </NameAndDate></span>
        </AvatarNameAndDate></span>

        <AverageRating>
          {parseFloat(props.review.totalRating).toFixed(1)}
        </AverageRating>
        <span>
          {props.review.review}
        </span>
      </AvatarNameDateAndReview>
    </Container>
  );
};

export default ReviewListEntry;