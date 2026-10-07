import { IoCartOutline } from "react-icons/io5"
import type { dataArray } from "../types/apiResponseType"

const ProductCart = ({product}: {product: dataArray}) => {
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
        <img src={product.image} alt={product.title} className="bg-gray-100 aspect-square" />
        <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
        <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
        <button className="cursor-pointer bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full flex gap-2 items-center justify-center font-semibold"><span><IoCartOutline className="h-6 w-6" /></span>Add to cart</button>
    </div>
  )
}

export default ProductCart