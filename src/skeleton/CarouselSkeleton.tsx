import { useEffect } from "react"

export default function CarouselSkeleton() {
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return (): void => {
            document.body.style.overflow = "";
        }
    }, []);
    
    return(
        <div className="bg-gray-200 -z-10">
            <div className="flex gap-10 justify-center h-150 items-center my-20 px-4">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-125 h-10 rounded-md bg-gray-300/60"></h1>
                    <p className="md:w-125 line-clamp-3 bg-gray-200 pr-7 h-10 w-20"></p>
                    <button className="bg-gray-300 text-white px-3 py-2 rounded-md cursor-pointer mt-2 h-10 w-30"></button>
                </div>
                <div>
                    <img className="rounded-full h-150 w-137.5 transition-all shadow-2xl shadow-gray-300" />
                </div>
            </div>
        </div>
    )
}