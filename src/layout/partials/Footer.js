import React, {useContext} from 'react'
import {Querycontext} from '../../context/QueryContext'
import {Globalcontext} from '../../context/GlobalContext'
function Footer() {

  const {
    excludedFormats,
    includedFormats,
    includedDays,
    excludedDays,
    includedBodies,
    excludedBodies,
    dataFormat,
    dataQuery
  } = useContext(Querycontext);

  const {root_server_url} = useContext(Globalcontext);

  //Set Final Formats Array
  let formatsArr = [...includedFormats, ...excludedFormats];
  if (formatsArr.length > 1 ) {
    formatsArr = formatsArr.map(i => '&formats[]=' + i);
    } else {
    formatsArr = formatsArr.map(i => '&formats=' + i);
  }

  //Set Final Days Array
  let daysArr = [...includedDays, ...excludedDays];
  if (daysArr.length > 1 ) {
    daysArr = daysArr.map(i => '&weekdays[]=' + i);
    } else {
    daysArr = daysArr.map(i => '&weekdays=' + i);
  }

  //Set Final Service Bodies Array
  let bodiesArr = [...includedBodies, ...excludedBodies];
  if (bodiesArr.length > 1 ) {
    bodiesArr = bodiesArr.map(i => '&services[]=' + i);
    } else {
    bodiesArr = bodiesArr.map(i => '&services=' + i);
  }
  
  //Set Final Query Arrya
  let queryArr = [...bodiesArr, ...daysArr, ...formatsArr].join('');

  // console.log(queryArr.join('&'))
  
  return (
    <div className="container footer-container">
      {root_server_url !== null ?
      <>
      <h5 className="query-heading text-center">Your Query:</h5> 
      <a className="query-string" href={`${root_server_url}/client_interface/${dataFormat}/${dataQuery}${queryArr}`}>{`${root_server_url}/client_interface/${dataFormat}/${dataQuery}${queryArr}`}</a>
      </>
      :
      <>
      </>
    }
      
    </div>
  )
}

export default Footer
