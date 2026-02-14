import { KPICard } from '../components/KPICard'
import { LineChartDark, BarChartDark } from '../components/Charts'
import { DataTable } from '../components/DataTable'
import { ProgressBar } from '../components/ProgressBar'
import { kpis, lineData, barData, tableRows, tasks } from '../data/mock'

export function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpis.map(k => (
          <KPICard key={k.title} title={k.title} value={k.value} delta={k.delta} />
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <LineChartDark data={lineData} />
        </div>
        <div>
          <BarChartDark data={barData} />
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <DataTable
            columns={[
              { key: 'id', header: 'ID', width: '10%' },
              { key: 'name', header: 'Item' },
              { key: 'user', header: 'Customer' },
              { key: 'status', header: 'Status' },
              { key: 'amount', header: 'Amount', width: '12%' },
            ]}
            rows={tableRows}
          />
        </div>
        <div className="card">
          <div className="text-sm text-white/70 mb-4">Workloads</div>
          <div className="space-y-4">
            {tasks.map(t => (
              <div key={t.name}>
                <ProgressBar value={t.progress} label={t.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
