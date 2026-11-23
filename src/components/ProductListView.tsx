import { useNavigate } from "react-router-dom";
import type { dataArray } from "../types/apiResponseType";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/addToCartSlice";
import type { RootState } from "../store/store";

export default function ProductListView ({item} : {item: dataArray}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartSelector = useSelector((state: RootState) => state.cart.items);
    const date = new Date();
    const date1 = String(date).substring(0,7);
    const date2 = String(date).substring(8,10);
    const date3 = String(date).substring(4,7);

    return(
        <div className="space-y-4 mt-2 rounded-md">
            <div className="bg-gray-100 flex gap-7 items-center p-2 rounded-md">
                <img src={item.image} alt={item.title} className="h-60 w-60 rounded-md cursor-pointer" onClick={() => navigate(`/products/${item.id}`)} />
                <div className="space-y-2">
                    <h1 className="font-bold text-xl line-clamp-3 transition hover:text-red-400 w-full">{item.title}</h1>
                    <p className="font-semibold text-4xl"><span className="text-xl">$</span>{item.price}</p>
                    <p>FREE DELIVERY <span className="font-semibold">{date1} {Number(date2)+4}</span> <br />
                    Or fastest delivery <span className="font-semibold">Tomorrow, {date3} {Number(date2)+1}</span></p>
                    {
                        cartSelector.some((product) => product.id === item.id) ?
                        <button className="bg-red-300 text-white px-3 py-1 rounded-md">Added to cart</button>
                        :
                        <button onClick={() => dispatch(addProduct(item))} className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    )
}
