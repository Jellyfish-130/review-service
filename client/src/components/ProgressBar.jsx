import React from 'react';
import styled from 'styled-components';

export const BarContainer = styled.div`
  height: 4px;
  width: ${(props) => (props.isModal ? '100' : '122')}px;
  background-color: rgb(221, 221, 221);
  border-radius: 2px;
  margin-right: 10px;
`;

const ProgressBar = (props) => {
  const isModal = props.isModal;

  const Filler = styled.div`
    height: 100%;
    width: ${props.completed}%;
    background-color: rgb(34, 34, 34);
    text-align: right;
    border-radius: 2px;
  `;

  return (
    <BarContainer isModal={isModal}>
      <Filler></Filler>
    </BarContainer>
  );
};

export default ProgressBar;
