'use client'
import Link from 'next/link';
import React from 'react';

const error = () => {
    return (
        <div className='text-center'>
           <h1 className='text-xl font-semibold'>Opps!!</h1> 
           <h1 className='text-lg font-semibold'>404</h1> 
           <Link href={'/'}>Home</Link>
        </div>
    );
};

export default error;