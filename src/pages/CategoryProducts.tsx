import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../context/DataProvider';
import type { dataArray } from '../types/apiResponseType';
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../components/ProductListView';

export default function CategoryProducts() {
    const { category } = useParams();
    const navigate = useNavigate();
    const context = useContext(DataContext);
    if (!context) throw new Error("DataContext must be used within its Provider");
    const { data } = context;
    const [products, setProducts] = useState<[]|dataArray[]>([]);

    // Function to store filtered data based on category
    useEffect((): void => {
        if(!data)
            return;
        window.scrollTo(0,0);
        setProducts(data.filter((item: dataArray) => category === item.category));
    }, [data, category]);
    // --

    return(
        <div>
            {
                products.length > 0 ?
                <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
                    <button onClick={() => navigate(`/`)} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft />Back</button>
                    {
                        products.map((item: dataArray, index: number) => (
                            <ProductListView key={index} item={item} />
                        ))
                    }
                </div>
                :
                <div className='h-100 w-full flex justify-center items-center'>
                    <div className="h-15 w-15 animate-spin rounded-full border-4 border-red-200 border-t-red-600" role="status" />
                </div>
            }
        </div>
    )
}
