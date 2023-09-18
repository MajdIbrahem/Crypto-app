import React from 'react'
import {Link ,NavLink} from 'react-router-dom';
import logoSvg from '../assets/logo.svg'

const Header = () => {
    return (
        <header className='w-full text-white flex md:flex-row flex-col bg-gray-200   shadow-lg justify-between items-center'>
            <Link to="/" className="text-lg flex  items-center text-cyan font-medium ">
                <img src={logoSvg} alt="crypto" />
                <span>Crypto Websit</span>
            </Link>
            <nav className='flex justify-around align-center w-[30%] font-medium' >
                <NavLink to='/' end className={({ isActive }) => {
                    return ` text-center font-nunito px-1 font-medium
                    ${isActive ? " border-cyan border-2 text-cyan rounded-lg ":" hover:text-cyan active:text-gray-300 border-0 courser-pointer rounded-lg"}`
                }}>
                    Crypto
                </NavLink>
                <NavLink to='/saved' className={({ isActive }) => {
                    return ` text-center font-nunito px-1 font-medium
                    ${isActive ? " border-cyan border-2 text-cyan rounded-lg ":" hover:text-cyan active:text-gray-300 border-0 courser-pointer rounded-lg"}`
                }}>
                    Saved
                </NavLink>
                <NavLink to='/trending' className={({ isActive }) => {
                    return ` text-center font-nunito px-1 font-medium
                    ${isActive ? " border-cyan border-2 text-cyan rounded-lg  ":" hover:text-cyan active:text-gray-300 border-0 courser-pointer rounded-lg "}`
                }}>
                    Trending
                </NavLink>
            </nav>
            
        </header>
    )
}

export default Header