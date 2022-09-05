import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
            <Image src="/../public/assets/navLogo.png" alt="/" width='125' height='50' />
        </div>
    </div>
  )
}

export default NavBar