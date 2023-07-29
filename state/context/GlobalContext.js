
import React, { createContext, useReducer } from 'react'
import { globalReducer } from '../reducers/globalReducer'

export const GlobalContext = createContext(null)
export const GlobalDispatchContext = createContext(null)


const initialState = {
    user: {},
    isAuthenticated: false,
    isOnboarded: false,
    isLoading: false
}

const GlobalContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(globalReducer, initialState)  
  
  return (
    <GlobalContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
            {children}
        </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider