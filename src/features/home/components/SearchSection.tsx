import React, { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';

import { IOption } from '../../shared/types';
import Autocomplate from '../../shared/components/Autocomplate';
import { useSearch } from "../hooks/useSearch";
import { recipesToOptions } from '../utils';
import { RECIPE_DETAIL_URL } from '../../shared/constants';

function SearchSection () {
  const navigate = useNavigate()
  const { recipes, isLoading, onSearch } = useSearch();
  const [searchKey, setSearchKey] = useState('');

  const searchDebounce = useCallback(debounce(handleSearch, 300), []);
  
  function handleSearch (e: React.ChangeEvent<HTMLInputElement>) {
    setSearchKey(e.target.value)
    onSearch(e.target.value)
  }

  function handleClickSearch (selected: IOption) {
    navigate(`${RECIPE_DETAIL_URL}/${selected.value}`)
  }

  return (
    <div className={styles.container}>
      <h2>Search Recipe</h2>
      <Autocomplate 
        isLoading={isLoading}
        label={'Search'}
        onChange={searchDebounce} 
        options={recipesToOptions(recipes)} 
        searchKey={searchKey}
        onClick={handleClickSearch}
      />
    </div>
  )
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  })
}
export default SearchSection;