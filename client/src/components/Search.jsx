import React from 'react';
import styled from 'styled-components';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box
  width: 100%;
  height: 20px;
  padding: 12px 12px 12px 16px;
  border-color: rgb(34, 34, 34);
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  background-color: rgb(247, 247, 247);
  border-radius: 30px;
  &:focus-within {
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset;
  }
`;

const SearchIconAndBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIconContainer = styled.div`
  font-size: 18px;
  color: rgb(34, 34, 34);
  padding-right: 5px;
`;

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const SearchBar = styled.input`
  display: flex;
  align-items: center;
  border: none;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  &::-webkit-input-placeholder {
    color: rgb(113, 113, 113);
    font-size: 14px;
    font-weight: 300;
  }
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  background-color: rgb(221, 221, 221);
  color: rgb(113, 113, 113);
  border-radius: 50%;
  &:hover {
    background-color: rgb(170, 170, 170);
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

    this.inputRef = React.createRef();
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
      <div>
        <Container>
          <SearchIconAndBar>
            <SearchIconContainer>{searchIcon}</SearchIconContainer>
            <SearchBar
              ref={this.inputRef}
              placeholder="Search reviews"
              value={this.state.input}
              onChange={(e) => {
                this.handleChange(e);
              }}
              onKeyDown={(e) => this.onKeyPressed(e)}
            ></SearchBar>
          </SearchIconAndBar>
          {this.state.input.length > 0 ? (
            <CloseContainer
              onClick={() => {
                this.setState({
                  input: '',
                });

                if (this.inputRef.current) {
                  this.inputRef.current.focus();
                }
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </CloseContainer>
          ) : null}
        </Container>
      </div>
    );
  }
}

export default Search;
