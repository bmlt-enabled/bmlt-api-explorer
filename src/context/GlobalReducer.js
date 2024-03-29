/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case 'SET_AGGREGATOR':
            return {
                ...state,
                isLoading: false,
                aggregator: action.payload,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'UPDATE_URL':
            return {
                ...state,
                root_server_url: action.payload,
                isMatched: true,
            }
        case 'GET_SERVER_DETAILS':
            return {
                ...state,
                serverDetails: action.payload,
            }
        case 'GET_FORMATS':
            return {
                ...state,
                formats: action.payload,
            }
        case 'GET_FIELDS':
            return {
                ...state,
                fields: action.payload,
            }
        case 'GET_SEARCH':
            return {
                ...state,
                search: action.payload,
            }
        case 'GET_SERVICE_BODIES':
            return {
                ...state,
                serviceBodies: action.payload,
            }
        case 'SET_MATCHED':
            return {
                ...state,
                isMatched: true,
            }
        default:
            return state
    }
}
