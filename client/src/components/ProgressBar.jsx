import React from 'react';
import styled from 'styled-components';

export const BarContainer = styled.div`
  height: 4px;
  width: 122px;
  background-color: rgb(221, 221, 221);
  border-radius: 2px;
  margin-right: 10px;
`;

const ProgressBar = (props) => {
  const Filler = styled.div`
    height: 100%;
    width: ${props.completed}%;
    background-color: rgb(34, 34, 34);
    text-align: right;
    border-radius: 2px;
  `;

  return (
    <BarContainer>
      <Filler></Filler>
    </BarContainer>
  );
};

export default ProgressBar;
