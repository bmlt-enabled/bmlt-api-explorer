/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
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
        case 'SET_DATA_FORMAT':
            return {
                ...state,
                dataFormat: action.payload,
            }
        case 'SET_HTML_SIMPLE':
            return {
                ...state,
                htmlSimple: action.payload,
            }
        case 'SET_DATA_QUERY':
            return {
                ...state,
                dataQuery: action.payload,
            }
        case 'SET_FORMAT_COMPARISON':
            return {
                ...state,
                formatComparison: action.payload,
            }
        case 'SET_TEXT_SEARCH':
            return {
                ...state,
                textSearch: action.payload,
            }
        case 'SET_SEARCH_TYPE':
            return {
                ...state,
                searchType: action.payload,
            }
        case 'SET_SEARCH_RADIUS':
            return {
                ...state,
                searchRadius: action.payload,
            }
        case 'SET_START_END_TIME':
            return {
                ...state,
                startEndTime: action.payload,
            }
        case 'SET_MEETING_DURATION':
            return {
                ...state,
                meetingDuration: action.payload,
            }
        case 'SET_SPECIFIC_FIELDS':
            return {
                ...state,
                specificFields: action.payload,
            }
        case 'SET_SORT_RESPONSE':
            return {
                ...state,
                sortResponse: action.payload,
            }
        case 'SET_INCLUDED_VENUE_TYPES':
            return {
                ...state,
                includedVenueTypes: action.payload,
            }
        case 'SET_EXCLUDED_VENUE_TYPES':
            return {
                ...state,
                excludedVenueTypes: action.payload,
            }

        case 'SET_SELECTED_RESPONSE':
            return {
                ...state,
                selectedResponse: action.payload,
            }

        case 'SET_SPECIFIC_TEXT':
            return {
                ...state,
                specificText: action.payload,
            }

        case 'SET_CHECKED_BOXES_STRING':
            return {
                ...state,
                checkedBoxesString: action.payload,
            }

        case 'SET_FORMAT_LANGUAGE':
            return {
                ...state,
                formatLanguage: action.payload,
            }
        case 'SET_GET_CHANGES_QUERY':
            return {
                ...state,
                getChangesQuery: action.payload,
            }
        case 'SET_VALUE_LIST':
            return {
                ...state,
                valueList: action.payload,
            }
        // case 'CURRENT_URL':
        //   case 'UPDATE_URL':
        // return {
        //   ...state,
        //   root_server_url: action.payload,
        //   isLoading: false,
        // }
        default:
            return state
    }
}
