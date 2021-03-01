import React, {createContext, useReducer} from 'react'
import QueryReducer from './QueryReducer'

const initialState = {
    excludedFormats: [],
    includedFormats: [],
    includedDays: [],
    excludedDays: [],
    includedBodies: [],
    excludedBodies: [],
    dataFormat: 'csv',
    dataQuery: '?switcher=GetSearchResults',
    formatComparison: '',
}

// create context
export const Querycontext = createContext(initialState);

export const QueryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QueryReducer, initialState);

  //Actions

  //excluded Format 
  function excludedFormatsFunction(payload) {
    dispatch({
      type: 'SET_EXCLUDED_FORMATS',
      payload: payload,
    });
  }

  //Included Format
  function includedFormatsFunction(payload) {
    dispatch({
      type: 'SET_INCLUDED_FORMATS',
      payload: payload,
    });
  }

  //Excluded Days
  function excludedDaysFunction(payload) {
    dispatch({
      type: 'SET_EXCLUDED_DAYS',
      payload: payload,
    });
  }

  // Included Days
  function includedDaysFunction(payload) {
    dispatch({
      type: 'SET_INCLUDED_DAYS',
      payload: payload,
    });
  }

  // Included Service Bodies
  function includedBodiesFunction(payload) {
    dispatch({
      type: 'SET_INCLUDED_BODIES',
      payload: payload,
    });
  }

  // Excluded Bodies
  function excludedBodiesFunction(payload) {
    dispatch({
      type: 'SET_EXCLUDED_BODIES',
      payload: payload,
    });
  }

  // Data Format
  function dataFormatFunction(payload) {
    dispatch({
      type: 'SET_DATA_FORMAT',
      payload: payload,
    })
  }

  // Data Query
  function dataQueryFunction(payload) {
    dispatch({
      type: 'SET_DATA_QUERY',
      payload: payload,
    })
  }

  // Format Comparison Operator
  function setFormatComparison(payload) {
    dispatch({
      type: 'SET_FORMAT_COMPARISON',
      payload: payload,
    })
  }
  return(
    <Querycontext.Provider value={{
      excludedFormats: state.excludedFormats,
      includedFormats: state.includedFormats,
      excludedDays: state.excludedDays,
      includedDays: state.includedDays,
      excludedBodies: state.excludedBodies,
      includedBodies: state.includedBodies,
      dataFormat: state.dataFormat,
      dataQuery: state.dataQuery,
      formatComparison: state.formatComparison,
      setFormatComparison,
      excludedFormatsFunction,
      includedFormatsFunction,
      excludedDaysFunction,
      includedDaysFunction,
      excludedBodiesFunction,
      includedBodiesFunction,
      dataFormatFunction,
      dataQueryFunction,
    }}>
      {children}
    </Querycontext.Provider>
  )
}