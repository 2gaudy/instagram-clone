import React from 'react'
import { RiLoader4Line } from 'react-icons/ri'

const LoadingOverlay = () => {
  return (
    <div className='flex absolute inset-0 w-full h-full bg-black bg-opacity-10 items-center blur justify-center a-1'>
        <RiLoader4Line size={50} className='animate-spin'/>
    </div>
  )
}

export default LoadingOverlay