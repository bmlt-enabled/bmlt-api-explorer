import React, {useContext, useEffect, useState} from 'react'
import {Querycontext} from '../../context/QueryContext'

function FormatsComparison(props) {
//disabled true/false passed from included formats


  const {setFormatComparison} = useContext(Querycontext);
  const [checked, setchecked] = useState(false);

  function setComparison(e) {
    if (e.target.checked) {
      setFormatComparison(e.target.value)
      setchecked(true);
    } else {
      setFormatComparison('')
      setchecked(false)
    }
  }

  useEffect((e) => {
    if (props.disabled === true) {
      setFormatComparison('')
      setchecked(false)
    }
  }, [props.disabled, setFormatComparison])
  

  return (
    <div className="formats-operator">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="or-comparison" checked={checked} disabled={props.disabled} value="&formats_comparison_operator=OR" onChange={setComparison}/>
        <label className="form-check-label" htmlFor="or-comparison">Use OR Comparison Operator</label>
      </div>
    </div>
  )
}

export default FormatsComparison
