import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    isLoading: true,
    root_server_url: null,
    tomato: null,
}


// create context
export const TomatoContext = createContext(initialState);

export const TomatoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function updateRootServerURL(payload) {
    dispatch({
      type: 'UPDATE_URL',
      payload: payload,
    });
  }

  function currentRootServerURL(payload) {
    dispatch({
      type: 'CURRENT_URL',
      payload: payload,
    });
  }

  function setTomato(payload) {
    dispatch({
      type: 'SET_TOMATO',
      payload: payload,
    })
  }
  console.log(state)

  return(
    <TomatoContext.Provider value={{
      isLoading: state.isLoading,
      root_server_url: state.root_server_url,
      tomato: state.tomato,
      updateRootServerURL,
      currentRootServerURL,
      setTomato
    }}>
      {children}
    </TomatoContext.Provider>
  )
}