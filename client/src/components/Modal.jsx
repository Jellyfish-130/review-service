import React from 'react';
import styled from 'styled-components';
import TopBar from './TopBar.jsx';
import RatingList from './RatingList.jsx';
import ReviewList from './ReviewList.jsx';

export const Close = styled.div`
  display: flex;
  cursor: pointer;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const visible = this.props.visible;

    const Container = styled.div`
      position: absolute;
      width: 100vw;
      height: 100vh;
      opacity: 0.6;
      background-color: black;
    `;

    const Content = styled.div`
      position: absolute;
      width: 1000px;
      height: 700px;
      padding: 24px;
      box-sizing: border-box;
      background-color: white;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;

      top: 50%;
      margin-top: -320px;
      left: 50%;
      margin-left: -500px;
    `;

    const CloseContainer = styled.div`
      display: flex;
      width: 33px;
      height: 33px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      &:hover {
        background-color: rgba(232, 232, 232, 0.5);
      }
    `;

    return (
      <>
        <Container />
        <Content>
          <CloseContainer>
            <Close
              onClick={() => {
                this.props.close();
              }}
            >
              ✕
            </Close>
          </CloseContainer>
          <TopBar isModal={true} {...this.props}></TopBar>
          <RatingList isModal={true} {...this.props}></RatingList>
          <ReviewList isModal={true} {...this.props}></ReviewList>
        </Content>
      </>
    );
  }
}

export default Modal;
