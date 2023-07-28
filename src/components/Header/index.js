import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {
    Add,
    Cross,
    Home,
    Heart,
    Messenger,
    Search,
    Compass,
    Profile
} from '../Header/HeaderIcons'
import HeaderIcon from '../Header/HeaderIcon';
import { IoPersonCircleOutline } from '../Header/HeaderIcons';
import Link from 'next/link'

const HEADERITEMS = [
    {
        icon: Home,
        url: '/',
        name: "Home"
    },
    {
        icon: Messenger,
        url: '/',
        name: "Messenger"
    },
    {
        icon: Add,
        url: '/',
        name: "Add"
    },
    {
        icon: Compass,
        url: '/',
        name: "Discover"
    },
    {
        icon: Heart,
        url: '/',
        name: "Likes"
    },
    {
        icon: Profile,
        url: '/',
        name: "Profile",
    }
];

const Header = () => {
  return (
    <header className='w-full flex items-center justify-around h-16 bg-white shadow-md'>

        <Link href="/">
        
            <div className='text-xl font-semibold tracking-wider cursor-pointer select-none'>
                Instagram
            </div>
        
        </Link>
        
        <div className='flex bg-gray-100 group items-center border space-x-4 focus:border-gray-400 rounded-lg px-2'>
            <label htmlFor='search' className=''>
                <BsSearch className='text-lg text-gray-400'/>
            </label>

            <input type="search" name="search" id="search" className='bg-gray-100 hover:bg-transparent focus:bg-transparent  placeholder:text-sm py-1 px-2 outline-none w-full rounded-sm  transition focus:border-gray-400' placeholder='Search'/>

        </div>

        <div className='flex space-x-2 items-center'>
            <div className='flex space-x-4'>
                {HEADERITEMS.map((item, index) => (
                        <HeaderIcon
                            Icon={item.icon}
                            key={item.name}
                        />
                ))}
                
            </div>
            <button className='bg-[#0095F6] py-1 h-4/5 text-white active:scale-95 transform transition disabled:bg-opacity-50 px-6 disabled:scale-100 rounded text-sm font-semibold'>
                Logout
            </button>
            
        </div>
    </header>
  )
}

export default Header