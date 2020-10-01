import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar.jsx';

export const Row = styled.div`
  display: flex;
  width: ${(props) => (props.isModal ? '340' : '500')}px;
  padding: 10px;
  margin-right: 120px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const RatingList = (props) => {
  const isModal = props.isModal;

  const Container = styled.div`
    display: flex;
    width: 1120px;
    max-height: 120px;
  `;

  const AllRows = styled.div`
    display: flex;
    font-weight: 400;
    flex-flow: column wrap;
    flex-direction: column;
    padding-top: 10px;
    height: ${props.isModal ? '250' : '150'}px;
  `;

  const Category = styled.div`
    font-size: ${props.isModal ? '14' : '16'}px;
    font-weight: ${props.isModal ? '300' : '400'};
  `;

  const Rating = styled.div`
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
  `;

  const categories = [
    {
      label: 'Cleanliness',
      propName: 'avgcleanlinessRating',
    },
    {
      label: 'Communication',
      propName: 'avgcommunicationRating',
    },
    {
      label: 'Check-In',
      propName: 'avgcheckInRating',
    },
    {
      label: 'Accuracy',
      propName: 'avgaccuracyRating',
    },
    {
      label: 'Location',
      propName: 'avglocationRating',
    },
    {
      label: 'Value',
      propName: 'avgvalueRating',
    },
  ];

  return (
    <Container className="review-list-entry">
      <AllRows>
        {categories.map((category) => (
          <Row isModal={isModal}>
            <Category> {category.label} </Category>
            <Rating>
              <ProgressBar
                completed={
                  (parseFloat(props[category.propName]).toFixed(1) / 5) * 100
                }
              ></ProgressBar>
              {parseFloat(props[category.propName]).toFixed(1)}
            </Rating>
          </Row>
        ))}
      </AllRows>
    </Container>
  );
};

export default RatingList;
