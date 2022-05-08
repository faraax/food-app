import Delivery from '../../img/delivery.png'

export default function MainContainer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center '>
                <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide'>
                    The Fastest Delivery in
                    <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your Town</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum similique et tempore minima eaque perspiciatis blanditiis
                    repudiandae quam sequi at quia corrupti architecto ut praesentium,
                    accusamus delectus omnis ducimus! Illum!
                </p>
                <button className="bg-gradient-to-br text-white from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 mt-5
                rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"> Order Now</button>
            </div>
            <div className='py-2 bg-blue-400 flex-1'></div>
        </div>
    )
}
