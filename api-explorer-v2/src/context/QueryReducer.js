/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch(action.type) {
    case 'GET_FORMATS':
      return {
        ...state,
        formats: action.payload,
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