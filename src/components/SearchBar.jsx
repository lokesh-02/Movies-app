import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonIcon from './mui/Icons/ButtonIcon';

const SearchBar = ({ searchText, setSearchText, onSearch }) => {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div>
        <input type='text' 
        placeholder='Search for Movies/Series' 
        className='w-96 h-10 text-center bg-slate-200 rounded-lg rounded-r-none'
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
></input>
    </div>
  )
}

export default SearchBar