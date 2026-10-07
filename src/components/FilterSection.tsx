import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';
import type { dataArray } from '../types/apiResponseType';

const FilterSection = ({setSearch, search, setCategory}: {setSearch: Function, search: string, setCategory: Function}) => {
    const {data}: {data: dataArray[]} = useContext(DataContext);

    // Function to get Category of all items
    const getUniqueCategories = (data: dataArray[]): string[] => {
    let newVal: string[] = data.map((curEle: dataArray) => {
        return curEle["category"]
    });
    return ["All", ... new Set(newVal)];
    }
    // --
    
    const brandOnlyData: string[] = getUniqueCategories(data);

  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max '>
        <input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} type="text" placeholder='Search...' className='bg-white p-2 rounded-md border-gray-400 border-2' />

        {/* Category */}
        <h1 className='mt-5 font-semibold text-xl'>Category</h1>
        <div className='flex flex-col gap-2 mt-3'>
            {
                brandOnlyData.map((category: string, index: number) => {
            
                    return <div key={index} className='flex gap-2'>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.id)} id={category} type="checkbox" />
                        <label htmlFor={category} className='cursor-pointer uppercase'>{category}</label>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default FilterSection