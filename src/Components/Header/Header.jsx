import { useState } from 'react'
import Logo from '../../img/logo.png'
import Avatar from '../../img/avatar.png'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuth from '../../Hooks/useAuth'
import { useAuthContext } from '../../Hooks/useAuthContext'
import useLogout from '../../Hooks/useLogout'


export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [signInWithGoogle, isPending] = useAuth()
    const [logout] = useLogout()
    const { user } = useAuthContext()
    const login = (e) => {
        e.preventDefault()
        setShowMenu(false)
        !user ? signInWithGoogle() : setShowMenu(!showMenu)
    }
    return (
        <header className='fixed z-50 w-screen pt-5 p-2 px-4 md:p-6 md:px-16 bg-gray-300'>
            {/* For Desktop View */}
            <div className='hidden md:flex w-full h-full'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="Logo" className='w-8 object-cover' />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <motion.ul
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className='flex items-center gap-8 ml-auto'>
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
                </motion.ul>
                <div className='flex items-center justify-start relative'>
                    <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center">
                        <p className='text-xs text-white font-samibold'>2</p>
                    </div>
                </div>
                <div className='relative'>
                    {
                        !isPending &&
                        (
                            <motion.img
                                src={user ? user.photoURL : Avatar}
                                whileTap={{ scale: 0.6 }}
                                alt="userprofile"
                                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-7 cursor-pointer rounded-full'
                                onClick={login}
                            />
                        )
                    }
                    {
                        isPending && (
                            <svg role="status" className="h-8 w-8 animate-spin ml-7 text-gray-200 dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        )
                    }
                    {
                        showMenu && user && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 flex flex-col bg-gray-50 shadow-lg rounded-lg absolute top-12 right-0'>
                                {/* Will Work on this Admin Thing */}
                                {user && user.uid === "T0ghMzonngOuzWgzdlXStP65vvf2" && (
                                    <>
                                        <p className='px-3 py-2 flex items-center
                                 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-text-base gap-3 rounded-lg'>
                                            <Link className='flex items-center gap-3' to={'/createItem'} onClick={() => setShowMenu(!showMenu)}>
                                                New Item<MdAdd />
                                            </Link>
                                        </p>
                                        <p className='px-3 py-2 flex items-center
                                 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-text-base rounded-lg'>
                                            <Link className='flex items-center' to={'/admins'} onClick={() => setShowMenu(!showMenu)}>
                                                Manage Admins
                                            </Link>
                                        </p>
                                    </>
                                )}
                                <p onClick={() => logout()} className='px-4 py-2 flex items-center
                                 cursor-pointer hover:bg-slate-100 transition-all
                                 duration-100 ease-in-out text-text-base gap-3 rounded-lg'>
                                    Logout
                                    <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>

            {/* For Mobile View */}
            <div className='flex items-center justify-between md:hidden w-full h-full'>
                <div className='flex items-center justify-start relative'>
                    <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center">
                        <p className='text-xs text-white font-samibold'>2</p>
                    </div>
                </div>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="Logo" className='w-8 object-cover' />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <div className='relative flex'>
                    {
                        !isPending &&
                        (
                            <motion.img
                                src={user ? user.photoURL : Avatar}
                                whileTap={{ scale: 0.6 }}
                                alt="userprofile"
                                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-7 cursor-pointer rounded-full'
                                onClick={login}
                            />
                        )
                    }
                    {
                        isPending && (
                            <svg role="status" className="h-8 w-8 animate-spin ml-7 text-gray-200 dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        )
                    }{
                        showMenu && user && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 flex flex-col bg-gray-50 shadow-lg rounded-lg absolute top-12 right-0'>
                                <ul className='flex flex-col px-3 py-2 gap-5'>
                                    <li className='text-base text-textColor hover:bg-slate-100
                                    duration-100 transition-all ease-in-out cursor-pointer'>
                                        <Link to={'/'} onClick={() => setShowMenu(!showMenu)}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='text-base text-textColor hover:bg-slate-100 
                                    duration-100 transition-all ease-in-out cursor-pointer'>
                                        <Link to={'/menu'} onClick={() => setShowMenu(!showMenu)}>
                                            Menu
                                        </Link>
                                    </li>
                                    <li className='text-base text-textColor hover:bg-slate-100 
                                    duration-100 transition-all ease-in-out cursor-pointer'>
                                        <Link to={'aboutus'} onClick={() => setShowMenu(!showMenu)}>
                                            About us
                                        </Link>
                                    </li>
                                    <li className='text-base text-textColor hover:bg-slate-100 
                                    duration-100 transition-all ease-in-out cursor-pointer'>
                                        <Link to={'/service'} onClick={() => setShowMenu(!showMenu)}>
                                            Service
                                        </Link>
                                    </li>
                                </ul>
                                {/* Will Work on this Admin Thing */}
                                {user && user.uid === "T0ghMzonngOuzWgzdlXStP65vvf2" && (
                                    <>
                                        <p className='px-3 py-2 flex items-center
                                 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-text-base rounded-lg'>
                                            <Link className='flex items-center' to={'/admins'} onClick={() => setShowMenu(!showMenu)}>
                                                Manage Admins
                                                {/* <MdOutlineAdminPanelSettings /> */}
                                            </Link>
                                        </p>
                                        <p className='px-3 py-2 flex items-center
                                 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-text-base gap-3 rounded-lg'>
                                            <Link className='flex items-center gap-3' to={'/createItem'} onClick={() => setShowMenu(!showMenu)}>
                                                New Item<MdAdd />
                                            </Link>
                                        </p>
                                    </>
                                )}
                                <p onClick={() => logout()} className='m-2 p-2 shadow-md flex items-center justify-center bg-gray-200
                                 cursor-pointer hover:bg-gray-300 transition-all
                                 duration-100 ease-in-out text-text-base gap-3 rounded-lg'>
                                    Logout
                                    <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header >
    )
}
