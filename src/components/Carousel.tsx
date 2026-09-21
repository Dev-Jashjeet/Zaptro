import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
import type { dataArray } from "../types/apiResponseType";
const Slider = SliderImport.default ?? SliderImport;

function Carousel() {
    const {data, fetchAllProducts} = useContext(DataContext);
    
    useEffect((): void => {
        fetchAllProducts();
    }, [])

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };

    return(
        <div>
            <Slider {...settings}>
                {
                    data?.slice(0,7)?.map((item: dataArray, index: number) => (
                        <div key={index} className="bg-linear-to-r from-[#0f0c29] via=[#302b63] to-[#24243e] -z-10">
                            <div className="flex gap-10 justify-center h-150 items-center my-20 px-4">
                                <div className="space-y-6">
                                    <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">{item.title}</h1>
                                    <p className="md:w-125 line-clamp-3 text-gray-400 pr-7">{item.description}</p>
                                    <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
                                </div>
                                <div>
                                    <img src={item.image} alt={item.title} className="rounded-full h-150 w-137.5 hover:scale-105 transition-all shadow-2xl shadow-red-400" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carousel;