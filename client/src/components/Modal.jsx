import React from 'react';
import styled, { keyframes } from 'styled-components';

// Components
import TopBar from './TopBar.jsx';
import RatingList from './RatingList.jsx';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.6;
  }
`;

const BlackBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgb(34, 34, 34, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: ${fadeIn};
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
`;

const slideUp = keyframes`
  0% {
    bottom: -300px;
    opacity: 0;
  }

  100% {
    bottom: 0px;
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  width: 1140px;
  height: calc(100% - 80px);
  @media (max-width: 1220px) {
    width: calc(100% - 80px);
  }
  @media (max-width: 730px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  animation-name: ${slideUp};
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
`;

const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 24px 15px 24px;
  width: 950px;
  height: 72px;
`;

const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;

export const Close = styled.div`
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 0px 0px 24px;
  overflow-y: hidden;

  @media (max-width: 1220px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 40%;

  @media (max-width: 450px) {
    width: 100%;
    height: 30%;
  }

  @media (max-width: 1220px) {
    width: 100%;
  }
`;

const RightContainer = styled(LeftContainer)`
  justify-content: end;
  width: 60%;
  overflow-y: scroll;

  @media (max-width: 1220px) {
    width: 100%;
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(input) {
    this.setState({
      search: input,
    });
  }

  render() {
    const reviews = this.props.reviews;
    const search = this.state.search;

    let searchFiltered = reviews;
    if (search) {
      searchFiltered = [];

      for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        if (review.review.toLowerCase().includes(search.toLowerCase())) {
          searchFiltered.push(review);
        }
      }
    }

    return (
      <BlackBackground>
        <Container>
          <Header>
            <CloseContainer>
              <Close
                onClick={() => {
                  this.props.close();
                }}
              >
                ✕
              </Close>
            </CloseContainer>
          </Header>

          <Content>
            <LeftContainer>
              <TopBar isModal={true} {...this.props}></TopBar>
              <RatingList isModal={true} {...this.props}></RatingList>
            </LeftContainer>

            <RightContainer>
              <Search handleSearch={this.handleSearch}></Search>
              <ReviewList
                isModal={true}
                {...this.props}
                reviews={searchFiltered}
                search={search}
              ></ReviewList>
            </RightContainer>
          </Content>
        </Container>
      </BlackBackground>
    );
  }
}

export default Modal;
