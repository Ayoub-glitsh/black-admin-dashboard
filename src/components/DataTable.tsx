type Column<T> = {
  key: keyof T
  header: string
  width?: string
}

type Props<T extends Record<string, any>> = {
  columns: Column<T>[]
  rows: T[]
}

export function DataTable<T extends Record<string, any>>({ columns, rows }: Props<T>) {
  return (
    <div className="card p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-white/60 border-b border-line">
              {columns.map(col => (
                <th key={String(col.key)} className="text-left font-medium px-6 py-3" style={{ width: col.width }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-line/70 hover:bg-white/5 transition-colors">
                {columns.map(col => (
                  <td key={String(col.key)} className="px-6 py-3">
                    {String(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
