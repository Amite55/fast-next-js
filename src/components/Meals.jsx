"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');

    const loadData = async () => {
       try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await res.json();
        setMeals(data.meals)
        setError('')
       } catch(error) {
        setError(error, 'no data catching.......')
       }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        loadData()
    },[search])


    return (
        <div className='text-center my-5'>
            <input 
            onChange={handleSearch}
            className='border rounded-lg rounded-r-none px-2 py-1' type="text" placeholder='Search your Meals.....' />
            <button 
            onClick={() => loadData()}
            className='bg-cyan-500 px-2 py-1 rounded-lg  rounded-l-none hover:bg-cyan-400'>Search</button>
            
           <div className='grid grid-cols-3 gap-3 my-7'>
            {
              meals?.length > 0 && !error && meals?.map(meal => { return (
                <div key={meal?.idMeal} className='border p-4'>
                        <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={300} height={300} />
                        <h3 className='font-bold text-lg'>{meal?.strMeal}</h3>
                        <p>{meal?.strInstructions.split(" ").splice(0,5).join("")}</p>
                    </div>
               ) 
                })
            }

                {/* ======== ERROR HANDLER =========== */}

            {
                error && <h1>NO Data .......</h1>
            }
           </div>
        </div>
    );
};

export default Meals;