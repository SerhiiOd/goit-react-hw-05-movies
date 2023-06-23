import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchForm,
  SearchButton,
  BtnSpan,
  SearchInput,
} from 'components/SearchContainer/SearchContainer.styled';
import { toast } from 'react-hot-toast';

export const SearchContainer = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const searchQuery = query.toLocaleLowerCase().trim();
    if (searchQuery === '') {
      return toast.error("It cannot be empty query! Example: 'Batman'!");
    }
    onSubmit(searchQuery);
    setQuery('');
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <SearchButton type="submit">
        <BtnSpan>Search</BtnSpan>
      </SearchButton>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </SearchForm>
  );
};

SearchContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
