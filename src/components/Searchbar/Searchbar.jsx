import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
  padding: 10px;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
  margin-right: 8px;
`;

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleIconClick = () => {
    onSubmit(query);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <SearchContainer>
      <SearchIcon icon={faSearch} onClick={handleIconClick} />
      <form onSubmit={handleFormSubmit}>
        <SearchInput
          type="text"
          name="query"
          value={query}
          onChange={handleInputChange}
          placeholder="Пошук зображень..."
        />
      </form>
    </SearchContainer>
  );
};

export default Searchbar;
