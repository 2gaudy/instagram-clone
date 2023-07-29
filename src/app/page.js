'use client'
import Auth from '../components/Auth/index.js'
import { useState, useContext } from 'react'
import Feed from '@/components/Feed/index.js'
import { GlobalContext } from '../../state/context/GlobalContext.js'

const HomePage = () => {
  
  const  { isAuthenticated } = useContext(GlobalContext)

  console.log(isAuthenticated)




  return isAuthenticated ? <Feed /> : <Auth/>;

  
}

export default HomePage;