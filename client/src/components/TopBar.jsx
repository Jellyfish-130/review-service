import React from 'react';
import styled from 'styled-components';

export const Title = styled.div`
  padding-right: 5px;
  font-size: 22px;
  font-weight: 600;
`;

export const StarIcon = styled.img.attrs(() => ({
  src: 'images/pink-star.jpg',
}))`
  padding: 3px 6px 3px 3px;
  width: 20px;
  height: 20px;
`;

const TopBar = (props) => {
  const Container = styled.div`
    display: flex;
    width: 1120px;
    padding: 10px 10px 10px 10px;
    justify-content: left;
  `;

  return (
    <Container className="topbar">
      <StarIcon src="images/pink-star.jpg" />
      <Title>
        {parseFloat(props.avgtotalRating).toFixed(2)} ({props.numberOfReviews}{' '}
        reviews)
      </Title>
    </Container>
  );
};

export default TopBar;
