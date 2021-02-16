import React from 'react'
import Formats from '../../components/formats/Formats'
import { QueryProvider } from '../../context/QueryContext'

function QueryScreen() {
  return (
    <QueryProvider>
      <Formats/>
    </QueryProvider>
  )
}

export default QueryScreen
