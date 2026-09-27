export default function MidBanner() {

    return(
        <div className='bg-gray-100 md:py-24'>
            <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover h-137.5 md:h-137.5' style=
            {{backgroundImage: `url(https://img.magnific.com/free-photo/computer-mouse-paper-bags-blue-background-top-view_169016-43523.jpg?semt=ais_hybrid&w=740&q=80)`, backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
                <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
                    <div className='text-center text-white px-4'>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Next-Gen Fashion & Electronics at Your Fingertips</h1>
                        <p className='text-lg md:text-xl mb-6'>Discover the latest fashion and tech innovation with unbeatable prices and free shipping on all orders.</p>
                        <button className='bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}