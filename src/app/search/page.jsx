import React from 'react';

const searchPage = () => {
    return (
        <div>
            <input className='border' placeholder='search hare' type='text'/>
            <button className='btn hover:bg-red-200'>search</button>
        </div>
    );
};

export default searchPage;