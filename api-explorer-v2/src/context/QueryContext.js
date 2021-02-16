import React, {createContext, useReducer} from 'react'
import QueryReducer from './QueryReducer'

const initialState = {
    formats: null,
}

// create context
export const Querycontext = createContext(initialState);

export const QueryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QueryReducer, initialState);

  //Actions
  function formatsFunction(payload) {
    console.log(payload)
    dispatch({
      type: 'GET_FORMATS',
      payload: payload,
    });
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