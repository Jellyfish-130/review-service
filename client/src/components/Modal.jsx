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
  width: 100vw;
  height: 100vh;
  background-color: rgb(34, 34, 34);
  opacity: 0.6;

  animation-name: ${fadeIn};
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
`;

const slideUp = keyframes`
  0% {
    margin-left: -500px;
    margin-top: 0px;
    opacity: 0;
  }

  100% {
    margin-left: -500px;
    margin-top: -340px;
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 1000px;
  height: 700px;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  top: 50%;
  margin-top: -340px;
  left: 50%;
  margin-left: -500px;

  animation-name: ${slideUp};
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
`;

const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 24px 0px 24px;
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
  height: 630px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 350px;
  height: 630px;
`;

const RightContainer = styled(LeftContainer)`
  justify-content: end;
  width: 550px;
  overflow-y: scroll;
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
      <>
        <BlackBackground />
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
      </>
    );
  }
}

export default Modal;
