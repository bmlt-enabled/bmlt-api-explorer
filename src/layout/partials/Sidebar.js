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
import { Globalcontext } from '../../context/GlobalContext'

const Sidebar = (props) => {
    const { serverDetails } = useContext(Globalcontext)

    const showVenueInfo = () => {
        // 2.16.4 and above will return true
        const version = serverDetails[0].version
        const major = parseInt(version.split('.')[0])
        const minor = parseInt(version.split('.')[1])
        const patch = parseInt(version.split('.')[2])
        if (major >= 2 && minor >= 16 && patch >= 4) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            <section className="card interface-selectors">
                <div className="card-header">
                    <h3>Select Your Response</h3>
                </div>
                <div className="card-body">
                    <DataResponse />
                    <DataFormat />
                    <DataQuery />
                </div>
            </section>
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
            {showVenueInfo() && (
                <div>
                    <section className="card interface-selectors">
                        <div className="card-header">
                            <h3>Specific Venue Types to Include</h3>
                        </div>
                        <div className="card-body">
                            <IncludedVenueTypes />
                        </div>
                    </section>
                    <section className="card interface-selectors">
                        <div className="card-header">
                            <h3>Specific Venue Types to Exclude</h3>
                        </div>
                        <div className="card-body">
                            <ExcludedVenueTypes />
                        </div>
                    </section>
                </div>
            )}
            <section className="card interface-selectors">
                <div className="card-header">
                    <h3>Sort Response</h3>
                </div>
                <div className="card-body">
                    <SortResponse />
                </div>
            </section>
        </>
    )
}

export default Sidebar
