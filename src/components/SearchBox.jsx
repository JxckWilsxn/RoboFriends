import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input className='p-3 ml-10 border border-none bg-[#dbdbdb] dark:bg-[#474747] text-black dark:text-white rounded-xl w-[300px]' type="search" 
            placeholder="Search all contacts" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;