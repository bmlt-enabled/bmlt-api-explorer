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
import { showVenueInfo } from './helpers'
import GetChanges from '../../components/get-changes/GetChanges'
import ValueList from '../../components/value-list/ValueList'

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
                <section className="card interface-selectors">
                    <div className="card-header">
                        <h3>Changes</h3>
                    </div>
                    <div className="card-body">
                        <GetChanges />
                    </div>
                </section>
            )}
            {dataQuery === '?switcher=GetFieldValues' && (
                <section className="card interface-selectors">
                    <div className="card-header">
                        <h3>Get List of Values</h3>
                    </div>
                    <div className="card-body">
                        <ValueList />
                    </div>
                </section>
            )}
            {!hideSubsections && (
                <div>
                    <section className="card interface-selectors">
                        <div className="card-header">
                            <h3>Search for Specific Text</h3>
                        </div>
                        <div className="card-body">
                            <TextSearch />
                        </div>
                    </section>
                    <section className="card interface-selectors">
                        <div className="card-header">
                            <h3>Search for Specific Value</h3>
                        </div>
                        <div className="card-body">
                            <SpecificValue />
                        </div>
                    </section>
                    <section className="card interface-selectors">
                        <div className="card-header">
                            <h3>Meeting Start or End Time</h3>
                        </div>
                        <div className="card-body">
                            <StartOrEndTime />
                        </div>
                    </section>
                    <section className="card interface-selectors">
                        <div className="card-header">
                            <h3>Meeting Duration</h3>
                        </div>
                        <div className="card-body">
                            <MeetingDuration />
                        </div>
                    </section>
                    {showVenueInfo(serverDetails[0].version) && (
                        <div>
                            <section className="card interface-selectors">
                                <div className="card-header">
                                    <h3>Venue Types to Include</h3>
                                </div>
                                <div className="card-body">
                                    <IncludedVenueTypes />
                                </div>
                            </section>
                            <section className="card interface-selectors">
                                <div className="card-header">
                                    <h3>Venue Types to Exclude</h3>
                                </div>
                                <div className="card-body">
                                    <ExcludedVenueTypes />
                                </div>
                            </section>
                        </div>
                    )}
                    {selectedResponse != 2 && (
                        <section className="card interface-selectors">
                            <div className="card-header">
                                <h3>Sort Response</h3>
                            </div>
                            <div className="card-body">
                                <SortResponse />
                            </div>
                        </section>
                    )}
                </div>
            )}
        </>
    )
}

export default Sidebar
