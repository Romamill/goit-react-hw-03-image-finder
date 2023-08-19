import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
  padding: 20px;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 16px;
  border: none;
  outline: none;
  width: 800px;
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
