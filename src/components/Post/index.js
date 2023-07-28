import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { IoShareOutline } from 'react-icons/io5'

const Post = ({ index }) => {
  return (
    <div className="flex flex-col w-full bg-black/50 border-gray-200 border-[1px] bg-white ">
        <div className="flex items-center justify-between w-full bg-white space-x-2 p-2 c">

            <div className="flex space-x-2 justify-center items-center">
                <div className="w-10 h-10  border-2 bg-black rounded-full"/>
                <div>username</div>
            </div>
            <div className="select-none ml-auto">
                <BsThreeDots/>
            </div>
        </div>
        
        <div className="aspect-square bg-black w-full h-full"></div>
        <div className='flex justify-between p-2 text-lg '>
            <div className='space-x-2 flex'>
                <div>
                    <AiOutlineHeart size={25} className='text-black hover:text-black/50 cursor-pointer'/>
                </div>
                <div>
                    <FaRegComment size={22} className='text-black hover:text-black/50 cursor-pointer'/>
                </div>
                <div>
                    <IoShareOutline size={25} className='text-black hover:text-black/50 cursor-pointer'/>
                </div>
            </div>
            <div>
                <BsBookmark/>
            </div>
        </div>
        <div className='px-2'>1000 Likes</div>
        <div className='px-2'>
            <div className='flex flex-col space-y-1'>
            {
                new Array(3).fill(0).map((_,i) => (
                    <div key={i} className='flex space-x-2'>
                        <div className='font-medium'>username</div>
                        <div>comment {i + 1}</div>
                    </div>
                ))
            }
            </div>
        </div>
        <div className='px-2 py-1 '>
            3 hours ago.
        </div>
        <div className='px-2 mt-1 flex items-center space-x-3  py-2 border-t border-gray-200'>
            <div>
                
                <BsEmojiSmile className='text-xl'/>

            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-full flex px-2'>

                <div className='w-full'>
                    <input className='w-full outline-none bg-white' 
                        type="text" name={`comment ${index}`} id={`comment ${index}`} placeholder='Add a comment....'
                    />
                </div>
                <div>
                    <button className='text-blue-600 inline-block font-semibold text-sm'>
                        Post
                    </button>
                </div>
            </form>
        </div>
                      
    </div>

                
                
                
  )
}

export default Post

