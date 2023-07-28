import React from 'react'

const HeaderIcon = ({Icon, name}) => {
  return (
    <div className="hover:bg-black transition rounded cursor-pointer text-black hover:text-white p-2">
        <Icon 
            className="" size={25}
        />
    </div>
    
  )
}

export default HeaderIcon