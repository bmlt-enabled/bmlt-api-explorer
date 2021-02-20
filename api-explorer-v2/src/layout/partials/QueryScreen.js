import React from 'react'
import IncludedFormats from '../../components/formats/IncludedFormats'
import ExcludedFormats from '../../components/formats/ExcludedFormats'
import IncludedDay from '../../components/weekdays/IncludedDay'
import ExcludedDay from '../../components/weekdays/ExcludedDay'
import IncludedServiceBody from '../../components/service-bodies/IncludedServiceBody'
import { QueryProvider } from '../../context/QueryContext'

function QueryScreen() {
  return (
    <QueryProvider>
      <IncludedDay />
      <ExcludedDay />
      <IncludedFormats />
      <ExcludedFormats/>
      <IncludedServiceBody />
    </QueryProvider>
  )
}

export default QueryScreen
