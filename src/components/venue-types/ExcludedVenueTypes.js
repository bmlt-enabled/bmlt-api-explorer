import React, { useState, useEffect, useContext } from 'react'
import { ShowVenueTypes } from './helpers'
import { Querycontext } from '../../context/QueryContext'

const ExcludedVenueTypes = () => {
    const [selectedTypes, setSelectedTypes] = useState([])
    const { excludedVenueTypesFunction } = useContext(Querycontext)

    const selectExcludedTypes = (e) => {
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
            selectedTypes.forEach((type, index) => {
                type *= -1;
                if (selectedTypes.length === 1) {
                    searchString = '&venue_types=' + type;
                } else {
                    searchString += `&venue_types[]=${type}`;
                }
            });
        } else {
            searchString = ''
        }
        excludedVenueTypesFunction(searchString)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTypes])

    return <div>{<ShowVenueTypes selectTypes={selectExcludedTypes} />}</div>
}

export default ExcludedVenueTypes
