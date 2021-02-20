import React, {createContext, useReducer} from 'react'
import GlobalReducer from './GlobalReducer'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import {tomatoAPI} from '../api/switchers'

const initialState = {
    isLoading: true,
    root_server_url: null,
    tomato: null,
    isMatched: false,
    serverDetails: null,
    formats: null,
    serviceBodies: null,
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

  //Server Details API
  function getServerDetails(payload) {
    axios({
      url: payload,
      adapter: jsonpAdapter
    }).then((res) => {
      dispatch({
        type: 'GET_SERVER_DETAILS',
        payload: res.data,
      })
    });
  }

  //Formats API
  function getFormats(payload) {
    axios({
      url: payload,
      adapter: jsonpAdapter
    }).then((res) => {
      dispatch({
        type: 'GET_FORMATS',
        payload: res.data,
      })
    });
  }

  //Service Bodies API
  function getServiceBodies(payload) {
    axios({
      url: payload,
      adapter: jsonpAdapter
    }).then((res) => {
      console.log(res.data)
      dispatch({
        type: 'GET_SERVICE_BODIES',
        payload: res.data,
      })
    });
  }

  function setLoading(payload) {
    dispatch({
      type: 'SET_LOADING',
      payload: payload,
    })
  }
  // function currentRootServerURL(payload) {
  //   dispatch({
  //     type: 'CURRENT_URL',
  //     payload: payload,
  //   });
  // }

  function setTomato() {
    let path = window.location.pathname.split("/");
    let strippedPath = path.slice(0, path.length-2).join("/");

    axios({
      url: tomatoAPI,
    }).then((res) => {
      // On initial load check to see if current url matches any tomato urls
      if (res.data.length>0) {
        res.data.forEach(i => {
          if (i.root_server_url === strippedPath) {
            dispatch({
              type: 'SET_MATCHED',
            })
          } 
        })
      }
      dispatch({
        type: 'SET_TOMATO',
        payload: res.data,
      })
    });
  }

  return(
    <Globalcontext.Provider value={{
      isLoading: state.isLoading,
      root_server_url: state.root_server_url,
      tomato: state.tomato,
      serverDetails: state.serverDetails,
      isMatched: state.isMatched,
      formats: state.formats,
      serviceBodies: state.serviceBodies,
      updateRootServerURL,
      setLoading,
      getServerDetails,
      getFormats,
      setTomato,
      getServiceBodies,
    }}>
      {children}
    </Globalcontext.Provider>
  )
}