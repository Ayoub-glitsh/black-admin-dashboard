type Props = {
  title: string
  value: string
  delta?: string
}

export function KPICard({ title, value, delta }: Props) {
  return (
    <div className="card hover-lift">
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value}</div>
      {delta && (
        <div className="mt-2 text-xs text-white/60">{delta}</div>
      )}
    </div>
  )
}
