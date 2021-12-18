import React, { useContext, useEffect, useState } from 'react'
import { Globalcontext } from '../../context/GlobalContext'
import { Querycontext } from '../../context/QueryContext'

const SpecificFields = () => {
    const { fields } = useContext(Globalcontext)
    const [selectedFields, setSelectedFields] = useState([])
    const { specificFieldsFunction } = useContext(Querycontext)

    const checkedFields = (e) => {
        if (e.currentTarget.checked) {
            setSelectedFields([...selectedFields, e.target.value])
        } else {
            const newArr = selectedFields.filter(
                (item) => item !== e.target.value
            )
            setSelectedFields(newArr)
        }
    }

    useEffect(() => {
        if (selectedFields.length > 0) {
            specificFieldsFunction(
                '&data_field_key=' + selectedFields.join(',')
            )
        } else {
            specificFieldsFunction('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFields])

    return (
        <section className="card interface-selectors">
            <div className="card-header">
                <h3>Return Only Specific Fields</h3>
            </div>
            <div className="card-body">
                {fields.map((field) => {
                    return (
                        <div className="ml-2" key={field.key}>
                            <input
                                id={`format-${field.key}`}
                                type="checkbox"
                                value={`${field.key}`}
                                onChange={checkedFields}
                            />
                            <label
                                className="ml-3 mb-0"
                                htmlFor={`format-${field.key}`}
                            >
                                {field.description}
                            </label>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SpecificFields
