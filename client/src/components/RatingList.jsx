import React from 'react';
import styled from 'styled-components';

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

  const ColumnTwo = styled(ColumnOne)`
  `;

  const Row = styled.div`
    display: flex;
    width: 450px;
    padding: 10px 10px 10px 10px;
    justify-content: space-between;
  `;

  const Catgory = styled.div`
    font-size: 16px;
    font-weight: 400;
  `;

  const Rating = styled.div`
    font-size: 12px;
    font-weight: 600;
  `;

  return (
    <Container className="review-list-entry">
      <ColumnOne>
        <Row>
          <Catgory>Cleanliness</Catgory>
          <Rating>{parseFloat(props.avgcleanlinessRating).toFixed(1)}</Rating>
        </Row>
        <Row>
          <Catgory>Communication</Catgory>
          <Rating>{parseFloat(props.avgcommunicationRating).toFixed(1)}</Rating>
        </Row>
        <Row>
          <Catgory>Check-in</Catgory>
          <Rating>{parseFloat(props.avgcheckInRating).toFixed(1)}</Rating>
        </Row>
      </ColumnOne>
      <ColumnTwo>
        <Row>
          <Catgory>Accuracy</Catgory>
          <Rating>{parseFloat(props.avgaccuracyRating).toFixed(1)}</Rating>
        </Row>
        <Row>
          <Catgory>Location</Catgory>
          <Rating>{parseFloat(props.avglocationRating).toFixed(1)}</Rating>
        </Row>
        <Row>
          <Catgory>Value </Catgory>
          <Rating>{parseFloat(props.avgvalueRating).toFixed(1)}</Rating>
        </Row>
      </ColumnTwo>
    </Container>
  );
};

export default RatingList;