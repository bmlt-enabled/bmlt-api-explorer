import React, { useContext } from 'react'
import DataFormat from '../../components/data-selectors/DataFormat'
import DataQuery from '../../components/data-selectors/DataQuery'
import DataResponse from '../../components/data-selectors/DataResponse'
import TextSearch from '../../components/text-search/TextSearch'
import StartOrEndTime from '../../components/time-and-duration/StartOrEndTime'
import MeetingDuration from '../../components/time-and-duration/MeetingDuration'
import SortResponse from '../../components/sort-response/SortResponse'
import IncludedVenueTypes from '../../components/venue-types/IncludedVenueTypes'
import ExcludedVenueTypes from '../../components/venue-types/ExcludedVenueTypes'
import SpecificValue from '../../components/specific-value/SpecificValue'
import { Globalcontext } from '../../context/GlobalContext'
import { Querycontext } from '../../context/QueryContext'
import { shouldHideSubsections } from '../../components/helpers'
import { showVenueInfo, SectionToShow } from './helpers'
import GetChanges from '../../components/get-changes/GetChanges'
import ValueList from '../../components/value-list/ValueList'
import NawsDumpServiceBody from '../../components/naws-dump-service-body/NawsDumpServiceBody'

const Sidebar = (props) => {
    const { serverDetails } = useContext(Globalcontext)
    const { selectedResponse, dataQuery } = useContext(Querycontext)

    const hideSubsections = shouldHideSubsections(selectedResponse, dataQuery)

    return (
        <>
            <section className="card interface-selectors">
                <div className="card-header">
                    <h3>Select Your Response</h3>
                </div>
                <div className="card-body">
                    <DataResponse />
                    {selectedResponse == 0 && <DataFormat />}
                    <DataQuery />
                </div>
            </section>
            {dataQuery === '?switcher=GetChanges' && (
                <SectionToShow component={<GetChanges />} name={'Changes'} />
            )}
            {dataQuery === '?switcher=GetFieldValues' && (
                <SectionToShow
                    component={<ValueList />}
                    name={'Get List of Values'}
                />
            )}
            {dataQuery === '?switcher=GetNAWSDump' && (
                <SectionToShow
                    component={<NawsDumpServiceBody />}
                    name={'Select Service Body'}
                />
            )}
            {!hideSubsections && (
                <div>
                    <SectionToShow
                        component={<TextSearch />}
                        name={'Search for Specific Text'}
                    />
                    <SectionToShow
                        component={<SpecificValue />}
                        name={'Search for Specific Value'}
                    />
                    <SectionToShow
                        component={<StartOrEndTime />}
                        name={'Meeting Start of End Time'}
                    />
                    <SectionToShow
                        component={<MeetingDuration />}
                        name={'Meeting Duration'}
                    />
                    {showVenueInfo(serverDetails[0].version) && (
                        <div>
                            <SectionToShow
                                component={<IncludedVenueTypes />}
                                name={'Venue Types to Include'}
                            />
                            <SectionToShow
                                component={<ExcludedVenueTypes />}
                                name={'Venue Types to Exclude'}
                            />
                        </div>
                    )}
                    {selectedResponse != 2 && (
                        <SectionToShow
                            component={<SortResponse />}
                            name={'Sort Response'}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export default Sidebar
