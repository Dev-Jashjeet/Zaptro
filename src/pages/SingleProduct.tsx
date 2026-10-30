import { useParams } from 'react-router-dom'
import type { dataArray } from '../types/apiResponseType';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';

export default function SingleProduct() {
    const { id } = useParams();
    const { data, fetchAllProducts }: {data: dataArray[], fetchAllProducts: Function} = useContext(DataContext);
    const [singleProductData, setSingleProductData] = useState<dataArray|null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    // Function to find product data in the datas array
    useEffect((): void => {
        fetchAllProducts();
        setSingleProductData(data.find(data => data.id === Number(id)) ?? null);
    }, [data, id]);
    // ---

    return(
        singleProductData? <div className='px-4 pb-4 md:px-0'>
            <Breadcrums title={singleProductData.title} />
            <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10'>
                {/* product image */}
                <div className='w-full'>
                    <img src={singleProductData.image} alt={singleProductData.title} className='rounded-2xl w-80% object-cover' />
                </div>
                {/* product details */}
                <div className='flex flex-col gap-6'>
                    <h1 className='md:text-3xl font-bold text-gray-800'>{singleProductData.title}</h1>
                    <div className='text-gray-700'>{singleProductData.category.toUpperCase()}/{singleProductData.title.toUpperCase()}</div>
                    <p className='text-xl text-red-500 font-bold'>$ {singleProductData.price}</p>
                    <p className='text-gray-600'>{singleProductData.description}</p>

                    {/* quantity selector */}
                    <div className='flex items-center gap-4'>
                        <label htmlFor="" className='text-sm font-medium text-gray-700'>Quantity:</label>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))} type="number" min={1} max={500} value={quantity} className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500' />
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <button className='cursor-pointer px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md'><IoCartOutline className='w-6 h-6' /> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        : <div className='w-full h-full flex justify-center items-center'>
            <iframe className='h-60' src="https://lottie.host/embed/af4c4133-b9cd-4bc0-a753-c69c3553f459/m7uERbtOTI.lottie"></iframe>
        </div>
    )
}
