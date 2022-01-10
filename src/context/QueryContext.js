import React, { createContext, useReducer } from 'react'
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
    htmlSimple: '',
    textSearch: '',
    searchType: '',
    searchRadius: '',
    startEndTime: '',
    meetingDuration: '',
    specificFields: '',
    sortResponse: '',
    includedVenueTypes: '',
    excludedVenueTypes: '',
    selectedResponse: 0,
    specificText: '',
    checkedBoxesString: '',
    formatLanguage: '',
}

// create context
export const Querycontext = createContext(initialState)

export const QueryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(QueryReducer, initialState)

    //Actions

    //excluded Format
    function excludedFormatsFunction(payload) {
        dispatch({
            type: 'SET_EXCLUDED_FORMATS',
            payload: payload,
        })
    }

    //Included Format
    function includedFormatsFunction(payload) {
        dispatch({
            type: 'SET_INCLUDED_FORMATS',
            payload: payload,
        })
    }

    //Excluded Days
    function excludedDaysFunction(payload) {
        dispatch({
            type: 'SET_EXCLUDED_DAYS',
            payload: payload,
        })
    }

    // Included Days
    function includedDaysFunction(payload) {
        dispatch({
            type: 'SET_INCLUDED_DAYS',
            payload: payload,
        })
    }

    // Included Service Bodies
    function includedBodiesFunction(payload) {
        dispatch({
            type: 'SET_INCLUDED_BODIES',
            payload: payload,
        })
    }

    // Excluded Bodies
    function excludedBodiesFunction(payload) {
        dispatch({
            type: 'SET_EXCLUDED_BODIES',
            payload: payload,
        })
    }

    // Data Format
    function dataFormatFunction(payload) {
        dispatch({
            type: 'SET_DATA_FORMAT',
            payload: payload,
        })
    }

    // Data Format HTML SIMPLE
    function htmlSimpleFunction(payload) {
        dispatch({
            type: 'SET_HTML_SIMPLE',
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

    // Text Search
    function textSearchFunction(payload) {
        dispatch({
            type: 'SET_TEXT_SEARCH',
            payload: payload,
        })
    }

    function searchTypeFunction(payload) {
        dispatch({
            type: 'SET_SEARCH_TYPE',
            payload: payload,
        })
    }

    function searchRadiusFunction(payload) {
        dispatch({
            type: 'SET_SEARCH_RADIUS',
            payload: payload,
        })
    }

    function startEndTimeFunction(payload) {
        dispatch({
            type: 'SET_START_END_TIME',
            payload: payload,
        })
    }

    function meetingDurationFunction(payload) {
        dispatch({
            type: 'SET_MEETING_DURATION',
            payload: payload,
        })
    }

    function specificFieldsFunction(payload) {
        dispatch({
            type: 'SET_SPECIFIC_FIELDS',
            payload: payload,
        })
    }

    function sortResponseFunction(payload) {
        dispatch({
            type: 'SET_SORT_RESPONSE',
            payload: payload,
        })
    }

    function includedVenueTypesFunction(payload) {
        dispatch({
            type: 'SET_INCLUDED_VENUE_TYPES',
            payload: payload,
        })
    }

    function excludedVenueTypesFunction(payload) {
        dispatch({
            type: 'SET_EXCLUDED_VENUE_TYPES',
            payload: payload,
        })
    }

    function selectedResponseFunction(payload) {
        dispatch({
            type: 'SET_SELECTED_RESPONSE',
            payload: payload,
        })
    }

    function specificTextFunction(payload) {
        dispatch({
            type: 'SET_SPECIFIC_TEXT',
            payload: payload,
        })
    }

    function checkedBoxesStringFunction(payload) {
        dispatch({
            type: 'SET_CHECKED_BOXES_STRING',
            payload: payload,
        })
    }

    function formatLanguageFunction(payload) {
        dispatch({
            type: 'SET_FORMAT_LANGUAGE',
            payload: payload,
        })
    }

    return (
        <Querycontext.Provider
            value={{
                excludedFormats: state.excludedFormats,
                includedFormats: state.includedFormats,
                excludedDays: state.excludedDays,
                includedDays: state.includedDays,
                excludedBodies: state.excludedBodies,
                includedBodies: state.includedBodies,
                dataFormat: state.dataFormat,
                htmlSimple: state.htmlSimple,
                dataQuery: state.dataQuery,
                formatComparison: state.formatComparison,
                textSearch: state.textSearch,
                searchType: state.searchType,
                searchRadius: state.searchRadius,
                startEndTime: state.startEndTime,
                meetingDuration: state.meetingDuration,
                specificFields: state.specificFields,
                sortResponse: state.sortResponse,
                includedVenueTypes: state.includedVenueTypes,
                excludedVenueTypes: state.excludedVenueTypes,
                selectedResponse: state.selectedResponse,
                specificText: state.specificText,
                checkedBoxesString: state.checkedBoxesString,
                formatLanguage: state.formatLanguage,
                excludedFormatsFunction,
                includedFormatsFunction,
                excludedDaysFunction,
                includedDaysFunction,
                excludedBodiesFunction,
                includedBodiesFunction,
                dataFormatFunction,
                htmlSimpleFunction,
                dataQueryFunction,
                setFormatComparison,
                textSearchFunction,
                searchTypeFunction,
                searchRadiusFunction,
                startEndTimeFunction,
                meetingDurationFunction,
                specificFieldsFunction,
                sortResponseFunction,
                includedVenueTypesFunction,
                excludedVenueTypesFunction,
                selectedResponseFunction,
                specificTextFunction,
                checkedBoxesStringFunction,
                formatLanguageFunction,
            }}
        >
            {children}
        </Querycontext.Provider>
    )
}
