import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: left;
  width: ${(props) => (props.isModal ? '400' : '1120')}px;
  height: ${(props) => (props.isModal ? '40' : '26')}px;
  padding: ${(props) =>
    props.isModal ? '10px 10px 10px 10px' : '10px 10px 10px 10px'};
`;

export const Title = styled.div`
  font-size: ${(props) => (props.isModal ? '30' : '22')}px;
  font-weight: ${(props) => (props.isModal ? '700' : '600')};
  padding-right: 5px;
`;

export const StarIcon = styled.img.attrs(() => ({
  src: '/images/pink-star.jpg',
}))`
  width: ${(props) => (props.isModal ? '30' : '20')}px;
  height: ${(props) => (props.isModal ? '30' : '20')}px;
  padding: 3px 6px 3px 3px;
`;

const TopBar = (props) => {
  const isModal = props.isModal;

  return (
    <Container className="topbar">
      <StarIcon isModal={isModal} />
      <Title isModal={isModal}>
        {parseFloat(props.avgtotalRating).toFixed(2)} ({props.reviewsLength}{' '}
        reviews)
      </Title>
    </Container>
  );
};

export default TopBar;
