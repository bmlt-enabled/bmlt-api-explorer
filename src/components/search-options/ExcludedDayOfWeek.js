import React from 'react'

function ExcludedDayOfWeek(props) {

  return (
    <section>
      <h2>Excluded Days Of Week</h2>
      <div className="row" id="ExcludedDayOfWeek">
          <div className="col d-flex flex-column align-items-center justify-content-center" key="monday">
            <label className="mr-2 mb-0">Sunday</label>
            <input  type="checkbox" value="&weekdays[]=-1" onChange={props.onChange}/>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center" key="monday">
            <label className="mr-2 mb-0">Monday</label>
            <input  type="checkbox" value="&weekdays[]=-2" onChange={props.onChange}/>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center" key="monday">
            <label className="mr-2 mb-0">Tuesday</label>
            <input  type="checkbox" value="&weekdays[]=-3" onChange={props.onChange}/>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center" key="monday">
            <label className="mr-2 mb-0">Wednesday</label>
            <input  type="checkbox" value="&weekdays[]=-4" onChange={props.onChange}/>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center" key="monday">
            <label className="mr-2 mb-0">Thursday</label>
            <input  type="checkbox" value="&weekdays[]=-5" onChange={props.onChange}/>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center" key="monday">
            <label className="mr-2 mb-0">Friday</label>
            <input  type="checkbox" value="&weekdays[]=-6" onChange={props.onChange}/>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center" key="monday">
            <label className="mr-2 mb-0">Saturday</label>
            <input  type="checkbox" value="&weekdays[]=-7" onChange={props.onChange}/>
          </div>
      </div>
    </section>
  )
}

export default ExcludedDayOfWeek
