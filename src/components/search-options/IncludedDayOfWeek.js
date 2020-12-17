import React from 'react'

function IncludedDayOfWeek(props) {

  return (
    <section>
      <h2>Included Days Of Week</h2>
      <div className="row" id="IncludedDayOfWeek">
      <div className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start" key="sunday">
            <input  type="checkbox" value="&weekdays[]=1" onChange={props.onChange}/>
            <label className="ml-3 mb-2">Sunday</label>
            
          </div>
          <div className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start" key="monday">
            <input  type="checkbox" value="&weekdays[]=2" onChange={props.onChange}/>
            <label className="ml-3 mb-2">Monday</label>
            
          </div>
          <div className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start" key="tuesday">
            <input  type="checkbox" value="&weekdays[]=3" onChange={props.onChange}/>
            <label className="ml-3 mb-2">Tuesday</label>
            
          </div>
          <div className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start" key="wednesday">
            <input  type="checkbox" value="&weekdays[]=4" onChange={props.onChange}/>
            <label className="ml-3 mb-2">Wednesday</label>
            
          </div>
          <div className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start" key="thursday">
            <input  type="checkbox" value="&weekdays[]=5" onChange={props.onChange}/>
            <label className="ml-3 mb-2">Thursday</label>
            
          </div>
          <div className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start" key="friday">
            <input  type="checkbox" value="&weekdays[]=6" onChange={props.onChange}/>
            <label className="ml-3 mb-2">Friday</label>
            
          </div>
          <div className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start" key="saturday">
            <input  type="checkbox" value="&weekdays[]=7" onChange={props.onChange}/>
            <label className="ml-3 mb-2">Saturday</label>
           
          </div>
      </div>
    </section>
  )
}

export default IncludedDayOfWeek
