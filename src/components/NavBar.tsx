import { Show, SignInButton, UserButton } from "@clerk/react";
import { LoaderCircle, MapPin, MapPinHouse } from "lucide-react"
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom"
import type { setResponseType } from "../types/locationType";
import { CgClose } from "react-icons/cg";

const NavBar = ({location, getLocation, locationButtonLoader, openDropdown, setOpenDropdown}: {location: setResponseType, getLocation: any, locationButtonLoader: boolean, openDropdown: boolean, setOpenDropdown: Function}) => {

    const toggleDropDown = (): void => {
        openDropdown? setOpenDropdown(false) : setOpenDropdown(true);
        return
    }
    
  return (
    <div className="bg-white py-3 shadow-2xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex gap-7 items-center">
                <Link to="/"><h1 className="font-bold text-3xl"><span className="text-red-500 font-serif">Z</span>aptro</h1></Link>
                <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
                    <MapPin className="text-red-500" />
                    <span className="font-semibold">{location? 
                        <div className="-space-y-1">
                        <p>{location.county}</p>
                        <p>{location.state}</p>
                        </div>
                        :"Add Address"}
                    </span>
                    <FaCaretDown onClick={toggleDropDown} />
                </div>
                {
                    openDropdown ? 
                    <div className="w-62.5 h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
                        <h1 className="font-semibold mb-4 text-xl flex justify-between items-center">Change Location<span><CgClose onClick={toggleDropDown} className="cursor-pointer" /></span></h1>
                        {
                            locationButtonLoader ?
                            <button onClick={getLocation} className="flex justify-center bg-red-400 w-full p-2 text-white font-bold rounded cursor-pointer"><LoaderCircle className="animate-spin" /></button>
                            :
                            <button onClick={getLocation} className="flex justify-evenly bg-red-500 w-full p-2 text-white font-bold rounded cursor-pointer"><MapPinHouse /> my location</button>
                        }
                    </div> 
                    : null
                }
            </div>
            {/* NavLink & Auth Section */}
            <nav className="flex gap-7 items-center">
                <ul className="flex gap-7 items-center text-xl font-semibold">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/products"><li>Products</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
                <Link to="/cart" className="relative">
                    <IoCartOutline className="h-7 w-7" />
                    <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">2</span>
                </Link>
                <div>
                    <Show when="signed-out">
                        <div className="text-white bg-red-500 px-3 py-1 rounded-md cursor-pointer">
                            <SignInButton />
                        </div>
                    </Show>
                    <Show when="signed-in">
                        <div className="flex items-center">
                            <UserButton />
                        </div>
                    </Show>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavBar