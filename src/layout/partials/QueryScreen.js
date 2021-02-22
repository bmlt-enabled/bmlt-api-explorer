import React from 'react'
import IncludedFormats from '../../components/formats/IncludedFormats'
import ExcludedFormats from '../../components/formats/ExcludedFormats'
import IncludedDay from '../../components/weekdays/IncludedDay'
import ExcludedDay from '../../components/weekdays/ExcludedDay'
import IncludedServiceBody from '../../components/service-bodies/IncludedServiceBody'
import ExcludedServiceBody from '../../components/service-bodies/ExcludedServiceBody'

function QueryScreen() {
  return (
    <>
      <IncludedDay />
      <ExcludedDay />
      <IncludedFormats />
      <ExcludedFormats/>
      <IncludedServiceBody />
      <ExcludedServiceBody />
    </>
  )
}

export default QueryScreen
