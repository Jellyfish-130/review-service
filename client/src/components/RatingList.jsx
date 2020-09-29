import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar.jsx';

const RatingList = (props) => {
  const Container = styled.div`
    display: flex;
  `;

  const ColumnOne = styled.div`
    display: flex;
    font-weight: 400;
    flex-direction: column;
    padding-top: 10px;
  `;

  const ColumnTwo = styled(ColumnOne)``;

  const Row = styled.div`
    display: flex;
    width: 450px;
    padding: 10px 10px 10px 10px;
    justify-content: space-between;
  `;

  const Category = styled.div`
    font-size: 16px;
    font-weight: 400;
  `;

  const Rating = styled.div`
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
  `;

  return (
    <Container className="review-list-entry">
      <ColumnOne>
        <Row>
          <Category>Cleanliness</Category>
          <Rating>
            <ProgressBar
              completed={
                (parseFloat(props.avgcleanlinessRating).toFixed(1) / 5) * 100
              }
            ></ProgressBar>
            {parseFloat(props.avgcleanlinessRating).toFixed(1)}
          </Rating>
        </Row>
        <Row>
          <Category>Communication</Category>
          <Rating>{parseFloat(props.avgcommunicationRating).toFixed(1)}</Rating>
        </Row>
        <Row>
          <Category>Check-in</Category>
          <Rating>{parseFloat(props.avgcheckInRating).toFixed(1)}</Rating>
        </Row>
      </ColumnOne>
      <ColumnTwo>
        <Row>
          <Category>Accuracy</Category>
          <Rating>{parseFloat(props.avgaccuracyRating).toFixed(1)}</Rating>
        </Row>
        <Row>
          <Category>Location</Category>
          <Rating>{parseFloat(props.avglocationRating).toFixed(1)}</Rating>
        </Row>
        <Row>
          <Category>Value </Category>
          <Rating>{parseFloat(props.avgvalueRating).toFixed(1)}</Rating>
        </Row>
      </ColumnTwo>
    </Container>
  );
};

export default RatingList;
