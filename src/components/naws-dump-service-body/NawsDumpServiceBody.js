import React, { useState, useContext, useEffect } from 'react'
import { ServiceBodySelect } from '../helpers'
import { Querycontext } from '../../context/QueryContext'

const NawsDumpServiceBody = () => {
    const [values, setValues] = useState({
        service_body_id: '',
    })
    const { nawsServiceBodyFunction } = useContext(Querycontext)

    useEffect(() => {
        if (values.service_body_id.length > 0) {
            nawsServiceBodyFunction(`&sb_id=${values.service_body_id}`)
        }
    }, [values])

    return <ServiceBodySelect values={values} setValues={setValues} />
}

export default NawsDumpServiceBody
