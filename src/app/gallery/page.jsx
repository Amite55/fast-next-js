import React from 'react';


const getTime = async () => {
 const res = await fetch('http://localhost:3000/time', {
    cache: 'no-store'   //reload to update time 
    // next: {
    //     revalidate: 5  // this page reload to 5 second after after update time
    // }
 })
 const data = await res.json();
 return data.currentTime;
}

const GalleryPage = async () => {

    const currentTime = await getTime();

    return (
        <div className='text-center bg-red-300'>
            <h1>Gallery</h1>
            <h3> Time: {currentTime}</h3>
        </div>
    );
};

export default GalleryPage;