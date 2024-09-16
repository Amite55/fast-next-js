import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "About ",
    description: "About page",
  };

const aboutPage = () => {
    return (
        <div className='my-10'>
            <h1>this is a about page</h1>
          <div className='text-center space-x-4'>
          <Link href={'/about/history'}>see All history</Link>
          <Link href={'/about/mission'}>see All mission</Link>
          </div>
        </div>
    );
};

export default aboutPage;