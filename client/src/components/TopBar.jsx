import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: left;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  font-size: ${(props) => (props.isModal ? '30' : '22')}px;
  font-weight: ${(props) => (props.isModal ? '700' : '600')};
  padding-right: 5px;
`;

export const StarIcon = styled.img.attrs(() => ({
  src: '/images/pink-star.png',
}))`
  width: ${(props) => (props.isModal ? '30' : '20')}px;
  height: ${(props) => (props.isModal ? '30' : '20')}px;
  padding: 3px 6px 3px 3px;
`;

const TopBar = (props) => {
  const isModal = props.isModal;

  return (
    <Container>
      <StarIcon isModal={isModal} />
      <Title isModal={isModal}>
        {parseFloat(props.avgtotalRating).toFixed(2)} ({props.reviewsLength}{' '}
        reviews)
      </Title>
    </Container>
  );
};

export default TopBar;
