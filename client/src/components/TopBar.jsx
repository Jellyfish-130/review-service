import React from 'react';
import styled from 'styled-components';

export const Title = styled.div`
  padding-right: 5px;
  font-size: ${(props) => (props.isModal ? '30' : '22')}px;
  font-weight: ${(props) => (props.isModal ? '700' : '600')};
`;

export const StarIcon = styled.img.attrs(() => ({
  src: 'images/pink-star.jpg',
}))`
  padding: 3px 6px 3px 3px;
  width: ${(props) => (props.isModal ? '30' : '20')}px;
  height: ${(props) => (props.isModal ? '30' : '20')}px;
`;

const TopBar = (props) => {
  const isModal = props.isModal;

  const Container = styled.div`
    display: flex;
    height: ${props.isModal ? '40' : '26'}px;
    width: ${props.isModal ? '400' : '1120'}px;
    padding: ${props.isModal ? '10px 10px 10px 10px' : '10px 10px 10px 10px'};
    justify-content: left;
  `;

  return (
    <Container className="topbar">
      <StarIcon isModal={isModal} />
      <Title isModal={isModal}>
        {parseFloat(props.avgtotalRating).toFixed(2)} ({props.reviews.length}{' '}
        reviews)
      </Title>
    </Container>
  );
};

export default TopBar;
