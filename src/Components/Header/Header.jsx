import React from 'react'
import Logo from '../../img/logo.png'
import Avatar from '../../img/avatar.png'
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuth from '../../Hooks/useAuth'
import { useAuthContext } from '../../Hooks/useAuthContext'
import useLogout from '../../Hooks/useLogout'
// import { getApp } from '../../Firebase/Config'

export default function Header() {
    const [signInWithGoogle] = useAuth()
    const [logout] = useLogout()
    const { user } = useAuthContext()
    const login = (e) => {
        e.preventDefault()
        signInWithGoogle()
    }
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* For Desktop View */}
            <div className='hidden md:flex w-full h-full'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="Logo" className='w-8 object-cover' />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <ul className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor 
                    hover:text-headingColor 
                    duration-100 transition-all ease-in-out cursor-pointer'>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className='text-base text-textColor 
                    hover:text-headingColor 
                    duration-100 transition-all ease-in-out cursor-pointer'>
                        <Link to={'/menu'}>
                            Menu
                        </Link>
                    </li>
                    <li className='text-base text-textColor 
                    hover:text-headingColor 
                    duration-100 transition-all ease-in-out cursor-pointer'>
                        <Link to={'aboutus'}>
                            About us
                        </Link>
                    </li>
                    <li className='text-base text-textColor 
                    hover:text-headingColor 
                    duration-100 transition-all ease-in-out cursor-pointer'>
                        <Link to={'/service'}>
                            Service
                        </Link>
                    </li>
                    {
                        user && <p onClick={() => logout()} className='cursor-pointer'>Logout</p>
                    }
                </ul>
                <div className='flex items-center justify-start relative'>
                    <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center">
                        <p className='text-xs text-white font-samibold'>2</p>
                    </div>
                </div>
                <div className='relative'>
                    <motion.img
                        src={user ? user.photoURL : Avatar}
                        whileTap={{ scale: 0.6 }}
                        alt="userprofile"
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-7 cursor-pointer'
                        onClick={login}
                    />
                </div>
            </div>

            {/* For Mobile View */}
            <div className='flex md:hidden w-full h-full'>

            </div>
        </header >
    )
}
