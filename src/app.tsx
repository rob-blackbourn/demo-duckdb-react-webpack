import React from 'react'

import DuckDB from '@jetblack/duckdb-react'

import bundles from './bundles'
import Shell from './components/shell'

export default function App() {
  return (
    <DuckDB bundles={bundles}>
      <Shell />
    </DuckDB>
  )
}
