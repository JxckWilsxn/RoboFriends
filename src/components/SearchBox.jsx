import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='p-2'>
            <input className='p-3 border border-[#f5f5f5] bg-[#dbdbdb] text-black rounded-xl w-[300px]' type="search" 
            placeholder="search robots" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;