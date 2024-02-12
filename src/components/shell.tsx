import React, { useEffect } from 'react'

import * as duckdbWasmShell from '@duckdb/duckdb-wasm-shell'
import shellWasm from '@duckdb/duckdb-wasm-shell/dist/shell_bg.wasm'

import { useDuckDB } from '@jetblack/duckdb-react'

import 'xterm/css/xterm.css'

export default function Shell() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const { db, loading, error } = useDuckDB()

  useEffect(() => {
    if (loading || !db || error || !ref.current) {
      return
    }

    duckdbWasmShell.embed({
      shellModule: shellWasm,
      container: ref.current!,
      resolveDatabase: async () => db
    })
  }, [db, loading, error, ref.current])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '16px',
        overflow: 'hidden',
        backgroundColor: '#333'
      }}
    >
      <div ref={ref} />
    </div>
  )
}
