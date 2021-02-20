import React, {createContext, useReducer} from 'react'
import QueryReducer from './QueryReducer'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

const initialState = {
    formats: null,
}

// create context
export const Querycontext = createContext(initialState);

export const QueryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QueryReducer, initialState);

  //Actions
  function formatsFunction() {
   console.log('why is querycontext firing?')
  }

  return(
    <Querycontext.Provider value={{
      formats: state.formats,
      formatsFunction
    }}>
      {children}
    </Querycontext.Provider>
  )
}