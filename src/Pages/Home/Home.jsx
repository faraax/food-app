import Delivery from '../../img/delivery.png'
import HeroBg from '../../img/heroBg.png'
import IceCream from '../../img/i1.png'
import Data from '../../Utils/data'




export default function Home() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen' id='home'>
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
                <button className="bg-gradient-to-br text-white from-orange-400 to-orange-500 w-full sm:w-auto px-4 py-2 mt-5
                rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"> Order Now</button>
            </div>
            <div className='py-2 flex flex-1 items-center relative'>
                <img
                    src={HeroBg}
                    className='ml-auto h-420 w-full lg:w-auto lg:h-650'
                    alt="Hero" />
                {/* <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4'>
                    <div className="w-190 p-4 flex bg-cardOverLay backdrop-blur-md rounded-3xl items-center justify-center flex-col">
                        <img src={IceCream} className='w-40 -mt-20' alt="Ice cream" />
                        <p className='text-xl mt-4 font-semibold text-textColor'>Icecream</p>
                        <p className='text-md text-center text-lightTextGray font-semibold my-3'>Chocolate & Vanilla</p>
                        <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>Rs.</span> 249</p>
                    </div>
                </div> */}
                {
                    Data.heroData.map((data, index) => (
                        <div key={index} className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4'>
                            <div className="w-190 p-4 flex bg-cardOverLay backdrop-blur-md rounded-3xl items-center justify-center flex-col">
                                <img src={data.src} className='w-40 -mt-20' alt="Ice cream" />
                                <p className='text-xl mt-4 font-semibold text-textColor'>{data.name}</p>
                                <p className='text-md text-center text-lightTextGray font-semibold my-3'>{data.desc}</p>
                                <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>Rs.</span> {data.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
