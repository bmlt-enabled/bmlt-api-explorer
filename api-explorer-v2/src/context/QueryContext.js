import React, {createContext, useReducer} from 'react'
import QueryReducer from './QueryReducer'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

const initialState = {
    excludedFormats: [],
    includedFormats: [],
    includedDays: [],
    excludedDays: [],
}

// create context
export const Querycontext = createContext(initialState);

export const QueryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QueryReducer, initialState);

  //Actions

  //excluded Format 
  function excludedFormatsFunction(payload) {
      // if (payload.length > 1 ) {
      //  payload = payload.map(i => 'formats[]=' + i);
      // } else {
      //   payload = payload.map(i => 'formats=' + i);
      // }
    dispatch({
      type: 'SET_EXCLUDED_FORMATS',
      payload: payload,
    });
  }

  //Included Format
  function includedFormatsFunction(payload) {
    // if (payload.length > 1 ) {
    //  payload = payload.map(i => 'formats[]=' + i);
    // } else {
    //   payload = payload.map(i => 'formats=' + i);
    // }
    dispatch({
      type: 'SET_INCLUDED_FORMATS',
      payload: payload,
    });
  }

  //Excluded Days
  function excludedDaysFunction(payload) {
    // if (payload.length > 1 ) {
    //  payload = payload.map(i => 'formats[]=' + i);
    // } else {
    //   payload = payload.map(i => 'formats=' + i);
    // }
    dispatch({
      type: 'SET_EXCLUDED_DAYS',
      payload: payload,
    });
  }

  // Included Days
  function includedDaysFunction(payload) {
    // if (payload.length > 1 ) {
    //  payload = payload.map(i => 'formats[]=' + i);
    // } else {
    //   payload = payload.map(i => 'formats=' + i);
    // }
    dispatch({
      type: 'SET_INCLUDED_DAYS',
      payload: payload,
    });
  }
  
  return(
    <Querycontext.Provider value={{
      excludedFormats: state.excludedFormats,
      includedFormats: state.includedFormats,
      excludedDays: state.excludedDays,
      includedDays: state.includedDays,
      excludedFormatsFunction,
      includedFormatsFunction,
      excludedDaysFunction,
      includedDaysFunction,
    }}>
      {children}
    </Querycontext.Provider>
  )
}