import { useParams } from 'react-router-dom'
import type { dataArray } from '../types/apiResponseType';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

export default function SingleProduct() {
    const { id } = useParams();
    const  { data }: {data: dataArray[]} = useContext(DataContext);
    let singleProductData: dataArray|null = null;

    // Function to find product data in the datas array
    if(data && id) {
        for(let val of data) {
            if(val.id === Number(id)) {
                singleProductData = val;
                break;
            }
        }
    }
    // ---
    console.log(singleProductData)

    return(
        <div>
            product page aayega: {id}
        </div>
    )
}