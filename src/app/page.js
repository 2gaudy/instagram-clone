'use client'
import Auth from '../components/Auth/index.js'
import { useState } from 'react'
import Feed from '@/components/Feed/index.js'

const HomePage = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true)




  return isAuthenticated ? <Feed/> : <Auth/>;

  
}

export default HomePage