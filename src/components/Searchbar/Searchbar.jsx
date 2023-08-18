import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5'; // Правильний імпорт іконки

const SearchContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px 15px;
  font-size: 16px;
  width: 300px;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled(IoSearch)`
  font-size: 20px;
`;

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
