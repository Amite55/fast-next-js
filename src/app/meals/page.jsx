import Meals from '@/components/Meals';

const MealPage = () => {
    return (
        <div className='border-2 p-10 rounded-lg mx-20'>
           <div className='text-center '>
              <h4 className='text-2xl font-bold '>Choose your Meal </h4>
              <p>Choose Meal of you by Searching .....</p>
           </div>
           <Meals/>
        </div>
    );
};

export default MealPage;