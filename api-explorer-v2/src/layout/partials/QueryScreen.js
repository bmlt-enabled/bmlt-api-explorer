import React from 'react'
import ExcludedFormats from '../../components/formats/ExcludedFormats'
import { QueryProvider } from '../../context/QueryContext'

function QueryScreen() {
  return (
    <QueryProvider>
      <ExcludedFormats/>
    </QueryProvider>
  )
}

export default QueryScreen
