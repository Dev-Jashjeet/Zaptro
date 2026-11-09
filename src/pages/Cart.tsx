import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { FaRegTrashAlt } from "react-icons/fa";
import { LucideNotebook, ShoppingBag, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import type { dataArray } from "../types/apiResponseType";
import { removeProduct } from "../store/addToCartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const cartSelector = useSelector((state: RootState) => state.cart.items);
  const [itemsTotal, setItemsTotal] = useState<number>(0);

  // Function to calculate total amount of cart items
  useEffect((): void => {
    if(cartSelector.length) {
      let tempAmt: number = 0;
      for(let val of cartSelector) {
        tempAmt += val.price;
      }
      setItemsTotal(tempAmt);
    }
    return;
  }, [cartSelector]);
  // ---

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
      {
        cartSelector.length > 0 ?
        <div>
          <h1 className='font-bold text-2xl'>My Cart ({cartSelector.length})</h1>
          <div>
            <div className="mt-10">
              {
                cartSelector.map((item: dataArray, index: number) => (
                  <div key={index} className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.title} className="w-20 h-20 rounded-md" />
                      <div>
                        <h1 className="w-75 line-clamp-2">{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">${item.price}</p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                      <button className="cursor-pointer ">-</button>
                      <span>1</span>
                      <button className="cursor-pointer">+</button>
                    </div>
                    <span onClick={() => dispatch(removeProduct(item))} className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl">
                      <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                ))
              }
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2 ">
                <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="p-2 rounded-md bg-white" />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Enter your address" className="p-2 rounded-md bg-white" />
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State</label>
                    <input type="text" placeholder="Enter your state" className="p-2 rounded-md w-full bg-white" />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">PostCode</label>
                    <input type="text" placeholder="Enter your postcode" className="p-2 rounded-md w-full bg-white" />
                  </div>
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder="Enter your country" className="p-2 rounded-md w-full bg-white" />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder="Enter your number" className="p-2 rounded-md w-full bg-white" />
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer hover:bg-red-600">Submit</button>
              <div className="flex items-center justify-center w-full text-gray-700">
                -----or-----
              </div>
              <div className="flex justify-center">
                <button className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer">Detect location</button>
              </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="text-gray-800 font-bold text-xl">Bill details</h1>
                <div className="flex justify-between items-center py-2">
                  <h1 className="flex gap-1 items-center text-gray-700"><span><LucideNotebook /></span>Items total</h1>
                  <p>${itemsTotal}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700"><span><Truck /></span>Delivery Charge</h1>
                  <p className="text-red-500 font-semibold"><span className="text-gray-600 line-through">$10</span> FREE</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700 py-2"><span><ShoppingBag /></span>Handling Charge</h1>
                  <p className="text-red-500 font-semibold">$5</p>
                </div>
                <hr className="text-gray-200 mt-2" />
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg">Grand total</h1>
                  <p className="font-semibold text-lg">${itemsTotal + 5}</p>
                </div>
                <div>
                  <h1 className="font-bold text-gray-700 mb-3 mt-7">Apply Promo Code</h1>
                    <div className="flex gap-3">
                      <input type="text" placeholder="Enter your code" className="p-2 rounded-md w-full outline-none border border-gray-300" />
                      <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md">Apply</button>
                    </div>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="w-full h-fit flex justify-center items-center">
          <iframe className="h-120" src="https://lottie.host/embed/4148a4c1-6c56-4f1f-b6f1-6e97cb48342b/Ki6nCYAT1Y.lottie" />
        </div>
      }
    </div>
  )
}

export default Cart
