import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='p-2'>
            <input className='p-3 border border-none bg-[#dbdbdb] dark:bg-[#474747] text-black dark:text-white rounded-xl w-[300px]' type="search" 
            placeholder="search all contacts" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;