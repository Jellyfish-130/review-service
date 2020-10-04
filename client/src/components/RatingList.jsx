import React from 'react';
import styled from 'styled-components';

//Components
import ProgressBar from './ProgressBar.jsx';

const Container = styled.div`
  display: flex;
  max-height: ${(props) => (props.isModal ? '400' : '120')}px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const AllRows = styled.div`
  display: flex;
  font-weight: 400;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  height: ${(props) => (props.isModal ? '250' : '150')}px;
`;

const CategorySubcontainer = styled.div`
  width: 40%;
  min-width: 300px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 0px;
  max-width: 500px;
`;

const Category = styled.div`
  font-size: ${(props) => (props.isModal ? '14' : '16')}px;
  font-weight: ${(props) => (props.isModal ? '300' : '400')};
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

const RatingList = (props) => {
  const isModal = props.isModal;

  return (
    <Container className="review-list-entry" isModal={isModal}>
      <AllRows isModal={isModal}>
        <CategorySubcontainer>
          {[0, 1, 2].map((index) => {
            const category = categories[index];
            return (
              <Row isModal={isModal}>
                <Category isModal={isModal}> {category.label} </Category>
                <Rating>
                  <ProgressBar
                    completed={
                      (parseFloat(props[category.propName]).toFixed(1) / 5) *
                      100
                    }
                    isModal={isModal}
                  ></ProgressBar>
                  {parseFloat(props[category.propName]).toFixed(1)}
                </Rating>
              </Row>
            );
          })}
        </CategorySubcontainer>

        <CategorySubcontainer>
          {[3, 4, 5].map((index) => {
            const category = categories[index];
            return (
              <Row isModal={isModal}>
                <Category isModal={isModal}> {category.label} </Category>
                <Rating>
                  <ProgressBar
                    completed={
                      (parseFloat(props[category.propName]).toFixed(1) / 5) *
                      100
                    }
                    isModal={isModal}
                  ></ProgressBar>
                  {parseFloat(props[category.propName]).toFixed(1)}
                </Rating>
              </Row>
            );
          })}
        </CategorySubcontainer>
      </AllRows>
    </Container>
  );
};

export default RatingList;
