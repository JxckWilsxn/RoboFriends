import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='flex justify-center sm:justify-start'>
            <input className='p-3 border border-none bg-[#dbdbdb] dark:bg-[#474747] text-black dark:text-white rounded-xl w-[300px] sm:ml-10' type="search" 
            placeholder="Search all contacts" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;