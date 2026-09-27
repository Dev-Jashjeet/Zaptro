import { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import type { dataArray } from '../types/apiResponseType';

const Category = () => {
  const {data, fetchAllProducts}: {data: dataArray[], fetchAllProducts: Function} = useContext(DataContext);
  
  useEffect((): void => {
    fetchAllProducts();
  }, []);

  // Function to get Category of all items
  const getUniqueCategories = (data: dataArray[]): string[] => {
    let newVal: string[] = data.map((curEle: dataArray) => {
      return curEle["category"]
    });
    return [... new Set(newVal)];
  }
  // --

  const categoriesOnlyData: string[] = getUniqueCategories(data);

  return (
    <div className='bg-[#101829]'>
        <div className='max-w-7xl py-7 px-4 mx-auto flex gap-4 items-center justify-around'>
            {
              categoriesOnlyData && categoriesOnlyData.map((item: string, index: number) => {
                return <div key={index}>
                  <button className='uppercase bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 cursor-pointer rounded-md'>{item}</button>
                </div>
              })
            }
        </div>
    </div>
  )
}

export default Category