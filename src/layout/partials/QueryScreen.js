import React from 'react'
import IncludedFormats from '../../components/formats/IncludedFormats'
import ExcludedFormats from '../../components/formats/ExcludedFormats'
import IncludedDay from '../../components/weekdays/IncludedDay'
import ExcludedDay from '../../components/weekdays/ExcludedDay'
import IncludedServiceBody from '../../components/service-bodies/IncludedServiceBody'
import ExcludedServiceBody from '../../components/service-bodies/ExcludedServiceBody'
import SpecificFields from '../../components/specific-fields/SpecificFields'

function QueryScreen() {
  return (
    <>
      <IncludedDay />
      <ExcludedDay />
      <IncludedFormats />
      <ExcludedFormats/>
      <IncludedServiceBody />
      <ExcludedServiceBody />
      <SpecificFields />
    </>
  )
}

export default QueryScreen
