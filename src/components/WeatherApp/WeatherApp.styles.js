import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 50px 0;

  position: relative;

  @media (max-width: 576px) {
    flex-direction: column;
    margin: 0;
  }

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 300px;
    background-color: white;

    left: 0;
    bottom: 0;

    @media (max-width: 576px) {
      bottom: 90px;
    }
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  margin-right: 20px;
  border: none;
  background: transparent;
  color: white;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: 100px;
  height: 50px;
  cursor: pointer;

  background-color: darkred;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  @media (max-width: 576px) {
    margin: 20px 0;
  }
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 2;

  display: flex;
  flex-direction: column;
  height: 200px;

  background-color: white;
  overflow-y: scroll;
  padding: 5px;
  list-style: none;

  width: 300px;
  position: absolute;
  left: 0;
  top: 40px;
`;

export const SearchResultsItem = styled.li`
  font-weight: bold;
  color: grey;
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? 'lightgrey' : 'white'};
  width: 100%;
  padding: 20px 5px;

  &:hover {
    background-color: lightgrey;
  }
  &:not(:last-child) {
    border-bottom: 1px solid darkred;
  }
`;
