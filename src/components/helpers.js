import React, { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'

export const shouldHideSubsections = (currentSelection, dataQuery) => {
    let hideSubsections = false
    if (
        (currentSelection === 0 || currentSelection === 1) &&
        (dataQuery === '?switcher=GetFormats' ||
            dataQuery === '?switcher=GetServiceBodies' ||
            dataQuery === '?switcher=GetChanges' ||
            dataQuery === '?switcher=GetFieldKeys' ||
            dataQuery === '?switcher=GetFieldValues' ||
            dataQuery === '?switcher=GetServerInfo' ||
            dataQuery === '?switcher=GetNAWSDump')
    ) {
        hideSubsections = true
    }
    return hideSubsections
}

export const ServiceBodySelect = ({ setValues, values }) => {
    const { serviceBodies } = useContext(Globalcontext)

    let allServiceBodies = []
    for (let i = 0; i < serviceBodies.length; i++) {
        const body = serviceBodies[i].children
        for (let j = 0; j < body.length; j++) {
            allServiceBodies.push({
                label: body[j].label,
                value: body[j].value,
            })
        }
    }

    return (
        <select
            className="form-control custom-select"
            id="dataQueryResults"
            onChange={(e) => {
                setValues({
                    ...values,
                    service_body_id: e.target.value,
                })
            }}
        >
            <option value={''} key={-1}>
                No Service Body Selected
            </option>
            {allServiceBodies.map((serviceBody) => {
                return (
                    <option value={serviceBody.value} key={serviceBody.value}>
                        {serviceBody.label}
                    </option>
                )
            })}
        </select>
    )
}
