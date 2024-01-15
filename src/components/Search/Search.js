import React from 'react'
import {GrSearch} from "react-icons/gr"
import './search.scss';

const Search = ({placeholder}) => {
  return (
    <form className='api-search-form'>
        <div className='icon'>
            <GrSearch />
        </div>
        <input type='text' placeholder={placeholder}/>
    </form>
  )
}

export default Search
