import React from 'react';
import ReactDOM from 'react-dom';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';

// Components
import ProgressBar from './ProgressBar.jsx';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 10px 0px 20px 0px;
  width: ${(props) => (props.isModal ? '100%' : '40%')};
  @media (max-width: 1120px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    ${(props) =>
      !props.isModal && props.isLatterEntries ? 'display: none;' : null}
  }
`;

export const AvatarNameDateAndReview = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarNameAndDate = styled.div`
  display: flex;
  align-items: center;
`;

const NameAndDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(113, 113, 113);
`;

const AvatarContainer = styled.div`
  padding: 3px 10px 3px 3px;
`;

const Avatar = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 57px;
  height: 60px;
  border-radius: 50%;
`;

const AverageRating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  width: 200px;
  font-weight: 600;
`;

const Review = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const ReadMore = styled.span`
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: underline;
`;

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readMoreButton: props.review.review.length > 180,
    };

    this.handleReadMore = this.handleReadMore.bind(this);
  }

  handleReadMore() {
    this.setState({
      readMoreButton: false,
    });
  }

  render() {
    const isModal = this.props.isModal;

    const isLatterEntries = this.props.entryIndex > 2;

    return (
      <Container isModal={isModal} isLatterEntries={isLatterEntries}>
        <AvatarNameDateAndReview>
          <AvatarNameAndDate>
            <AvatarContainer>
              <Avatar src={this.props.review.image} />
            </AvatarContainer>

            <NameAndDate>
              <Name>{this.props.review.username}</Name>
              <Date>{this.props.review.dateStr}</Date>
            </NameAndDate>
          </AvatarNameAndDate>
          <AverageRating>
            <ProgressBar
              completed={
                (parseFloat(this.props.review.totalRating).toFixed(1) / 5) * 100
              }
            ></ProgressBar>
            {parseFloat(this.props.review.totalRating).toFixed(1)}
          </AverageRating>

          {this.props.search ? (
            <Review>
              <Highlighter
                searchWords={[this.props.search]}
                autoEscape={true}
                textToHighlight={this.props.review.review}
              />
            </Review>
          ) : null}

          {!this.props.search ? (
            <Review>
              {this.state.readMoreButton ? (
                <>
                  {this.props.review.review.substring(0, 180) + '... '}
                  <ReadMore
                    onClick={() => {
                      this.handleReadMore();
                    }}
                  >
                    read more
                  </ReadMore>
                </>
              ) : (
                this.props.review.review
              )}
            </Review>
          ) : null}
        </AvatarNameDateAndReview>
      </Container>
    );
  }
}

export default ReviewListEntry;
