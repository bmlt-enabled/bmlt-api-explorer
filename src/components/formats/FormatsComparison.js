import React, {useContext, useEffect, useState} from 'react'
import {Querycontext} from '../../context/QueryContext'

function FormatsComparison(props) {

  const {includedFormats} = useContext(Querycontext);
  const [disabeld, setDisabled] = useState(true);

  // console.log(includedFormats.length)

  // useEffect(() => {
  //   if (includedFormats.length > 0) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // }, [includedFormats])

  return (
    <div className="formats-operator">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" id="huey" name="drone" disabled={props.disabled} checked={props.disabled} />
        <label className="form-check-label">AND</label>
      
        <input className="form-check-input" type="radio" id="louie" name="drone" disabled={props.disabled} value="option2"/>
        <label className="form-check-label">OR</label>
      </div>
    </div>
  )
}

export default FormatsComparison
