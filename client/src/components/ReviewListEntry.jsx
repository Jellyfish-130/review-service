import React from 'react';
import styled from 'styled-components';

const ReviewListEntry = (props) => {

  const Container = styled.div`
    display: flex;
    width: 460px;
  `;

  const AvatarNameDateAndReview = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px 10px;
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

  const Name = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  `;

  const Date = styled.div`
    display: flex;
    color: rgb(113, 113, 113);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `;

  const AvatarContainer = styled.div`
    padding: 3px 10px 3px 3px;
  `;

  const Avatar = styled.img.attrs(() => ({
    src: props.review.image,
  }))`
    width: 57px;
    height: 60px;
    border-radius: 50%;
  `;

  const AverageRating = styled.div`
    display: flex;
    font-size: 12px;
    width: 200px;
    font-weight: 600;
    justify-content: flex-end;
  `;

  const Review = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    justify-content: flex-end;
  `;
  return (
    <Container className="review-list-entry">
      <AvatarNameDateAndReview>

        <AvatarNameAndDate>

          <AvatarContainer>
            <Avatar src={props.review.image}/>
          </AvatarContainer>

          <NameAndDate>
            <Name>{props.review.username}</Name>
            <Date>{props.review.dateStr}</Date>
          </NameAndDate>

        </AvatarNameAndDate>

        <AverageRating>
          {parseFloat(props.review.totalRating).toFixed(1)}
        </AverageRating>

        <Review>
          {props.review.review}
        </Review>

      </AvatarNameDateAndReview>
    </Container>
  );
};

export default ReviewListEntry;