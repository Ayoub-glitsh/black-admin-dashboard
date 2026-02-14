type Props = {
  value: number
  label?: string
}

export function ProgressBar({ value, label }: Props) {
  return (
    <div>
      {label && <div className="text-xs text-white/60 mb-1">{label}</div>}
      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  )
}
