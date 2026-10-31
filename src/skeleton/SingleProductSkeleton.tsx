export default function SingleProductSkeleton() {

    return(
        <div className='px-4 pb-4 md:px-0'>
            <div className="w-100 h-10 rounded ml-50 my-10 bg-gray-200"></div>
            <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10'>
                {/* product image */}
                <div className='w-full h-100 bg-gray-200 rounded-xl'></div>
                {/* product details */}
                <div className='flex flex-col gap-6'>
                    <h1 className='h-10 w-80 bg-gray-200 rounded-xl'></h1>
                    <div className=' h-10 w-85 rounded-xl bg-gray-200'></div>
                    <p className='bg-gray-200 h-10 w-20'></p>
                    <p className='bg-gray-200 h-40'></p>
                    {/* quantity selector */}
                    <div className='bg-gray-200 h-10 w-40'></div>
                </div>
            </div>
        </div>
    )
}
