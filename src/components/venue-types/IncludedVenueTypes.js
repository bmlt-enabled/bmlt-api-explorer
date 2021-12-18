import React, { useState, useEffect, useContext } from 'react'
import { ShowVenueTypes } from './helpers'
import { Querycontext } from '../../context/QueryContext'

const IncludedVenueTypes = () => {
    const [selectedTypes, setSelectedTypes] = useState([])
    const { includedVenueTypesFunction } = useContext(Querycontext)

    const selectIncludedTypes = (e) => {
        if (e.currentTarget.checked) {
            setSelectedTypes([...selectedTypes, e.target.value])
        } else {
            const newArr = selectedTypes.filter(
                (item) => item !== e.target.value
            )
            setSelectedTypes(newArr)
        }
    }

    useEffect(() => {
        let searchString = ''
        if (selectedTypes.length > 0) {
            selectedTypes.map((type) => {
                if (selectedTypes.length == 1) {
                    searchString = '&venue_types=' + type
                } else {
                    searchString += `&venue_types[]=${type}`
                }
            })
        } else {
            searchString = ''
        }
        includedVenueTypesFunction(searchString)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTypes])

    return <div>{<ShowVenueTypes selectTypes={selectIncludedTypes} />}</div>
}

export default IncludedVenueTypes
