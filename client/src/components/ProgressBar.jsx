import React from 'react';
import styled from 'styled-components';

export const BarContainer = styled.div`
  width: ${(props) => (props.isModal ? '100' : '122')}px;
  height: 4px;
  background-color: rgb(221, 221, 221);
  border-radius: 2px;
  margin-right: 10px;
`;

const Filler = styled.div`
  text-align: right;
  width: ${(props) => props.completed}%;
  height: 100%;
  background-color: rgb(34, 34, 34);
  border-radius: 2px;
`;

const ProgressBar = (props) => {
  const isModal = props.isModal;

  return (
    <BarContainer isModal={isModal}>
      <Filler completed={props.completed}></Filler>
    </BarContainer>
  );
};

export default ProgressBar;
