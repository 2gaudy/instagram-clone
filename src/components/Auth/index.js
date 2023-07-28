'use client'
import React from 'react'
import Lottie from "react-lottie-player"
import Button from "../Button/index"
import AuthAnimation from "../../../public/animations/auth_page_animation.json"
import useForm from '@/hooks/useForm'
import { useMemo } from 'react'
import { AiFillFacebook } from "react-icons/ai"



const Auth = () => {
    const {form, onChangeHandler} = useForm({
        email: '',
        password: ''
      });
    
    
      const submitHandler = async (e) => {
        e.preventDefault();
        console.log(form)
      }
    
      const isDisabled = useMemo(() => {
        return !Object.values(form).every((val) => !!val);
    
      
      }, [form])
      
      return (
        <div className='w-screen h-screen flex items-center justify-center bg-[#FAFAFA]'>
          <div className='flex h-4/5 w-4/5'>
            <div className='w-full'>
              <Lottie
                play
                loop
                animationData={AuthAnimation}
                className="w-full h-full" 
              />
            </div>
            
            <div className='w-full flex flex-col space-y-5 items-center'>
            <div className='w-4/5 bg-white border flex flex-col space-y-5  p-10'>
    
              <form onSubmit={submitHandler} className='flex flex-col space-y-4  items-center'>
                <div className='tracking-widest text-5xl my-5'>Instagram</div>
                <input type="email" 
                  name='email' 
                  id='email' 
                  onChange={onChangeHandler} 
                  value={form.email} 
                  className='bg-gray-100 hover:bg-transparent focus:bg-transparent border placeholder:text-sm py-1 px-2 outline-none w-full rounded-sm focus:border-gray-400' 
                  placeholder='Email'
                />
                <input 
                  type='password' 
                  name='password' 
                  id="password" 
                  onChange={onChangeHandler} 
                  value={form.password } 
                  className='bg-gray-100 hover:bg-transparent focus:bg-transparent border placeholder:text-sm py-1 px-2 outline-none w-full rounded-sm focus:border-gray-400' 
                  placeholder='Password'
                />
                <button 
                  className='bg-[#0095F6] py-1 text-white active:scale-95 transform transition w-full disabled:bg-opacity-50 disabled:scale-100 rounded text-sm font-semibold' 
                  disabled={isDisabled}
                >
                  Log In
                </button>
              </form>
              <div className='w-full flex items-center justify-center my-5 space-x-2'>
                <div className='h-[0.8px] w-full bg-slate-400'/>
                <div className='text-gray-400 font-semibold text-center text-sm'>OR</div>
                <div className='h-[0.8px] w-full bg-slate-400'/>
              </div>
              <div className='w-full text-center flex text-indigo-900 space-x-2 items-center justify-center '>
                <AiFillFacebook className='inline-block text-2xl mr-2' />
                <span className='font-semibold text-sm'>Log in with Facebook</span>
              </div>
              <div className='w-full text-center text-xs text-indigo-900'>Forgotten your password?</div>
            
            </div>
            <div className='w-4/5 bg-white border flex flex-col ml-2 text-sm  border-gray-300 space-y-5 text-center py-5'>
              Don&apos;t have an account? <span className='text-blue-600 inline-block font-semibold'>Sign up</span>
            </div>
            </div>
          </div>
          
        </div>
      )
}

export default Auth