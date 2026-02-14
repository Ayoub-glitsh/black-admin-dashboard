import { PropsWithChildren } from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

type LayoutProps = PropsWithChildren<{
  collapsed: boolean
  onToggle: () => void
}>

export function Layout({ collapsed, onToggle, children }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-base text-ink">
      <Sidebar collapsed={collapsed} onToggle={onToggle} />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Navbar onMenuClick={onToggle} />
        <main className="p-6 md:p-8 lg:p-10 animate-fade-in">{children}</main>
      </div>
    </div>
  )
}
