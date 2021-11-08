import React, { useContext } from 'react'
import { Querycontext } from '../../context/QueryContext'
import { Globalcontext } from '../../context/GlobalContext'

function Query() {
    const {
        excludedFormats,
        includedFormats,
        includedDays,
        excludedDays,
        includedBodies,
        excludedBodies,
        dataFormat,
        dataQuery,
        formatComparison,
        htmlSimple,
        textSearch,
        searchType,
        searchRadius,
        startEndTime,
        meetingDuration,
    } = useContext(Querycontext)

    const { root_server_url } = useContext(Globalcontext)

    //Set Final Formats Array
    let formatsArr = [...includedFormats, ...excludedFormats]
    if (formatsArr.length > 1) {
        formatsArr = formatsArr.map((i) => '&formats[]=' + i)
    } else {
        formatsArr = formatsArr.map((i) => '&formats=' + i)
    }

    //Set Final Days Array
    let daysArr = [...includedDays, ...excludedDays]
    if (daysArr.length > 1) {
        daysArr = daysArr.map((i) => '&weekdays[]=' + i)
    } else {
        daysArr = daysArr.map((i) => '&weekdays=' + i)
    }

    //Set Final Service Bodies Array
    let bodiesArr = [...includedBodies, ...excludedBodies]
    if (bodiesArr.length > 1) {
        bodiesArr = bodiesArr.map((i) => '&services[]=' + i)
    } else {
        bodiesArr = bodiesArr.map((i) => '&services=' + i)
    }

    //Set Text Search
    let txtVal = ''
    if (textSearch.length > 0) {
        txtVal = '&SearchString=' + textSearch
    } else {
        txtVal = ''
    }

    //Set Search Type
    let tempSearchString = ''
    switch (searchType) {
        case '1':
            tempSearchString = '&SearchStringAll=1'
            break
        case '2':
            tempSearchString = '&SearchStringExact=1'
            break
        case '3':
            tempSearchString = '&StringSearchIsAnAddress=1'
            break
        default:
            tempSearchString = ''
    }

    //Set Search Radius
    let tempSearchRadius = ''
    if (searchType === '3' && searchRadius) {
        tempSearchRadius = `&SearchStringRadius=${searchRadius}`
    }

    //Set Final Query Array
    let joinArr = [...bodiesArr, ...daysArr, ...formatsArr].join('')
    if (txtVal.length > 0) {
        txtVal += tempSearchString + tempSearchRadius
    }
    let queryArr = joinArr + formatComparison + htmlSimple + txtVal
    queryArr = queryArr.replace(/\s/g, '%20')

    return (
        <div className="hmmm">
            {root_server_url !== null ? (
                <>
                    <h5 className="query-heading text-center">Your Query:</h5>
                    <a
                        className="query-string"
                        href={`${root_server_url}/client_interface/${dataFormat}/${dataQuery}${queryArr}${startEndTime}${meetingDuration}`}
                    >{`${root_server_url}/client_interface/${dataFormat}/${dataQuery}${queryArr}${startEndTime}${meetingDuration}`}</a>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Query
