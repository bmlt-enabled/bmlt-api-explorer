import React, { useContext, useEffect, useState } from 'react'
import {Globalcontext} from '../../context/GlobalContext'

const SpecificFields = () => {
    const {fields} = useContext(Globalcontext)
    console.log(fields)
    // const fields = {
    //     "ID": "id_bigint",
    //     "World ID": "worldid_mixed",
    //     "Service Body ID": "service_body_bigint",
    //     "Weekday": "weekday_tinyint",
    //     "Venue Type": "venue_type",
    //     "Start Time": "start_time",
    //     "Duration": "duration_time",
    //     "Time Zone": "time_zone",
    //     "Formats": "formats",
    //     "Language": "lang_enum",
    //     "Longitude": "longitude",
    //     "Latitude": "latitude",
    //     "Meeting Name": "meeting_name",
    //     "Location Name": "location_text",
    //     "Additional Location Information": "location_info",
    //     "Street Address": "location_street",
    //     "Borough": "location_city_subsection",
    //     "Neighborhood": "location_neighborhood",
    //     "Town": "location_municipality",
    //     "County": "location_sub_province",
    //     "State": "location_province",
    //     "Zip Code": "location_postal_code_1",
    //     "Nation": "location_nation",
    //     "Comments": "comments",
    //     "Train Lines": "train_lines",
    //     "Bus Lines": "bus_lines",
    //     "Phone Meeting Dial-In Number": "phone_meeting_number",
    //     "Virtual Meeting Link": "virtual_meeting_link",
    //     "Virtual Meeting Additional Info": "virtual_meeting_additional_info"
    // }

    return (
        <div>
            <h2>test</h2>
        </div>
    )
}

export default SpecificFields