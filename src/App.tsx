import { useState } from 'react'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'

export default function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="min-h-full">
      <Layout collapsed={collapsed} onToggle={() => setCollapsed(v => !v)}>
        <Dashboard />
      </Layout>
    </div>
  )
}
