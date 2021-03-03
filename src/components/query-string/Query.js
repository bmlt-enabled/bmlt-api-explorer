import React, {useContext} from 'react'
import {Querycontext} from '../../context/QueryContext'
import {Globalcontext} from '../../context/GlobalContext'

function Query() {

  const {
    excludedFormats,
    includedFormats,
    includedDays,
    excludedDays,
    includedBodies,
    excludedBodies,
    dataFormat,
    dataQuery,
    formatComparison,
    htmlSimple,
    textSearch,
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

  //Set Text Search 
  let txtVal = ''
  if (textSearch.length > 0) {
    txtVal = '&SearchString=' + textSearch;
  } else {
    txtVal = '';
  }
  
  //Set Final Query Arrya
  let joinArr = [...bodiesArr, ...daysArr, ...formatsArr].join('');
  let queryArr = joinArr + formatComparison + htmlSimple + txtVal;
  queryArr = queryArr.replace(/\s/g, '%20');
  
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

export default Query
