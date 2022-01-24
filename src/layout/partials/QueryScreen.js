import React, { useContext } from 'react'
import IncludedFormats from '../../components/formats/IncludedFormats'
import ExcludedFormats from '../../components/formats/ExcludedFormats'
import IncludedDay from '../../components/weekdays/IncludedDay'
import ExcludedDay from '../../components/weekdays/ExcludedDay'
import IncludedServiceBody from '../../components/service-bodies/IncludedServiceBody'
import ExcludedServiceBody from '../../components/service-bodies/ExcludedServiceBody'
import SpecificFields from '../../components/specific-fields/SpecificFields'
import { Querycontext } from '../../context/QueryContext'
import { shouldHideSubsections } from '../../components/helpers'

const QueryScreen = () => {
    const { selectedResponse, dataQuery } = useContext(Querycontext)

    const hideSubsections = shouldHideSubsections(selectedResponse, dataQuery)

    return (
        <div>
            {!hideSubsections && (
                <div>
                    {selectedResponse !== 2 && (
                        <div>
                            <IncludedDay />
                            <ExcludedDay />
                        </div>
                    )}
                    <IncludedFormats />
                    <ExcludedFormats />
                    <IncludedServiceBody />
                    <ExcludedServiceBody />
                    {selectedResponse === 0 && <SpecificFields />}
                </div>
            )}
        </div>
    )
}

export default QueryScreen
