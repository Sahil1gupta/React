import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';

export default function Home() {
  const [datas, setData] = useState([]);
  const [FoodName,setFoodName] =useState("") 
 
  useEffect(() => {
    // Check if the search input is not empty before fetching data
    const apiUrl = FoodName.trim() !== '' ?
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${FoodName}` :
      'https://www.themealdb.com/api/json/v1/1/search.php?s';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setData(data.meals);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [FoodName]);


  // Access strMeal directly without using map
  useEffect(() => {
    if (datas.length > 0) {
      const firstMeal = datas[0];
      console.log(firstMeal.strMeal);
    }
  }, [datas]);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <SearchInput FoodName={FoodName} onFoodChange={(Name)=>(setFoodName(Name))}/>

      <div className='mt-8 flex flex-row flex-wrap gap-x-8 gap-y-4'>
        {datas.map((meal) => (
          <div key={meal.idMeal} >
            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-[#535456] dark:border-gray-700">
    <Link to="#">
        <img className="rounded-t-lg" src={meal.strMealThumb} alt="" />
    </Link>
    <div className="p-5">
        <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{meal.strMeal}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{(meal.strInstructions).substr(0,200)}</p>
        <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}
