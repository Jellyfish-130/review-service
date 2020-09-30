import React from 'react';
import styled from 'styled-components';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const visible = this.props.visible;

    const Container = styled.div`
      ${!visible ? 'display: none;' : ''}
      position: absolute;
      width: 100vw;
      height: 100vh;
      opacity: 0.6;
      background-color: black;
    `;

    const Content = styled.div`
      ${!visible ? 'display: none;' : ''}
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

    const Header = styled.div`
      height: 72px;
    `;

    return (
      <>
        <Container />
        <Content>
          <Header
            onClick={() => {
              this.props.close();
            }}
          >
            Close me
          </Header>
        </Content>
      </>
    );
  }
}

export default Modal;
