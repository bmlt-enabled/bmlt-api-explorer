import React from 'react'
import IncludedFormats from '../../components/formats/IncludedFormats'
import ExcludedFormats from '../../components/formats/ExcludedFormats'
import IncludedDay from '../../components/weekdays/IncludedDay'
import ExcludedDay from '../../components/weekdays/ExcludedDay'
import { QueryProvider } from '../../context/QueryContext'

function QueryScreen() {
  return (
    <QueryProvider>
      <IncludedDay />
      <ExcludedDay />
      <IncludedFormats />
      <ExcludedFormats/>
    </QueryProvider>
  )
}

export default QueryScreen
