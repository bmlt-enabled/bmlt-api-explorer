import React, {createContext, useReducer} from 'react'
import GlobalReducer from './GlobalReducer'

const initialState = {
    isLoading: true,
    root_server_url: window.location.href,
    tomato: null,
}


// create context
export const Globalcontext = createContext(initialState);

export const TomatoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

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

  return(
    <Globalcontext.Provider value={{
      isLoading: state.isLoading,
      root_server_url: state.root_server_url,
      tomato: state.tomato,
      updateRootServerURL,
      currentRootServerURL,
      setTomato
    }}>
      {children}
    </Globalcontext.Provider>
  )
}