/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch(action.type) {
    case 'SET_EXCLUDED_FORMATS':
      return {
        ...state,
        excludedFormats: action.payload,
      }
    case 'SET_INCLUDED_FORMATS':
      return {
        ...state,
        includedFormats: action.payload,
      }
    case 'SET_EXCLUDED_DAYS':
      return {
        ...state,
        excludedDays: action.payload,
      }
    case 'SET_INCLUDED_DAYS':
      return {
        ...state,
        includedDays: action.payload,
      }
    case 'SET_EXCLUDED_BODIES':
      return {
        ...state,
        excludedBodies: action.payload,
      }
    case 'SET_INCLUDED_BODIES':
      return {
        ...state,
        includedBodies: action.payload,
      }
      // case 'CURRENT_URL':
      //   case 'UPDATE_URL':
      // return {
      //   ...state,
      //   root_server_url: action.payload,
      //   isLoading: false,
      // }
    default:
      return state;
  }
}