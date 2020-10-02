import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 20px;
  padding: 12px 12px 12px 16px;
  border-color: rgb(34, 34, 34);
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  background-color: rgb(247, 247, 247);
  border-radius: 30px;
  flex-direction: row;
  justify-content: flex-start;
`;

const SearchIcon = styled.img.attrs(() => ({
  src: 'images/search-icon.jpg',
}))`
  width: 20px;
  height: 20px;
  padding-right: 5px;
`;

const SearchBar = styled.input`
  display: flex;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;

  flex-direction: row;
  &::-webkit-input-placeholder {
    color: rgb(113, 113, 113);
    font-size: 14px;
    font-weight: 300;
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  onKeyPressed(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.handleSearch(this.state.input);
    }
  }

  render() {
    return (
      <div className="search">
        <Container>
          <SearchIcon />
          <SearchBar
            placeholder="Search reviews"
            value={this.state.input}
            onChange={(e) => {
              this.handleChange(e);
            }}
            onKeyDown={(e) => this.onKeyPressed(e)}
          ></SearchBar>
        </Container>
      </div>
    );
  }
}

export default Search;
