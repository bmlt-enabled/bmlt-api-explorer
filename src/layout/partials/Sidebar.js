import React from "react";
import DataFormat from "../../components/data-selectors/DataFormat";
import DataQuery from "../../components/data-selectors/DataQuery";
import DataResponse from "../../components/data-selectors/DataResponse";
import TextSearch from "../../components/text-search/TextSearch";
import StartOrEndTime from "../../components/time-and-duration/StartOrEndTime";
import MeetingDuration from "../../components/time-and-duration/MeetingDuration";
import SpecificFields from "../../components/specific-fields/SpecificFields";

function Sidebar(props) {
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
      <section className="card interface-selectors">
          <div className="card-header">
              <h3>Return Only Specific Fields</h3>
          </div>
          <div className="card-body">
              <SpecificFields />
          </div>
      </section>
    </>
  );
}

export default Sidebar;
