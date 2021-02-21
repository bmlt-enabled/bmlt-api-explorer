import React, {createContext, useReducer} from 'react'
import QueryReducer from './QueryReducer'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

const initialState = {
    excludedFormats: [],
    includedFormats: [],
    includedDays: [],
    excludedDays: [],
    includedBodies: [],
    excludedBodies: [],
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

  // Included Service Bodies
  function includedBodiesFunction(payload) {
    // if (payload.length > 1 ) {
    //  payload = payload.map(i => 'formats[]=' + i);
    // } else {
    //   payload = payload.map(i => 'formats=' + i);
    // }
    dispatch({
      type: 'SET_INCLUDED_BODIES',
      payload: payload,
    });
  }

  // Excluded Bodies
  function excludedBodiesFunction(payload) {
    // if (payload.length > 1 ) {
    //  payload = payload.map(i => 'formats[]=' + i);
    // } else {
    //   payload = payload.map(i => 'formats=' + i);
    // }
    dispatch({
      type: 'SET_EXCLUDED_BODIES',
      payload: payload,
    });
  }

  console.log(state)
  
  return(
    <Querycontext.Provider value={{
      excludedFormats: state.excludedFormats,
      includedFormats: state.includedFormats,
      excludedDays: state.excludedDays,
      includedDays: state.includedDays,
      excludedBodies: state.excludedBodies,
      includedBodies: state.includedBodies,
      excludedFormatsFunction,
      includedFormatsFunction,
      excludedDaysFunction,
      includedDaysFunction,
      excludedBodiesFunction,
      includedBodiesFunction,
    }}>
      {children}
    </Querycontext.Provider>
  )
}