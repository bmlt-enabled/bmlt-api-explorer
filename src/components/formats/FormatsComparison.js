import React, {useContext, useEffect, useState} from 'react'
import {Querycontext} from '../../context/QueryContext'

function FormatsComparison(props) {
//disabled true/false passed from included formats


  const {setFormatComparison} = useContext(Querycontext);

  function setComparison(e) {
    if (e.target.checked) {
      setFormatComparison(e.target.value)
    } else {
      setFormatComparison('')
    }
  }

  return (
    <div className="formats-operator">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="or-comparison" disabled={props.disabled} value="&formats_comparison_operator=OR" onChange={setComparison}/>
        <label className="form-check-label" htmlFor="or-comparison">Use OR Comparison Operator</label>
      </div>
    </div>
  )
}

export default FormatsComparison
