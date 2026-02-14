import { useState } from 'react'

type Props = {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: Props) {
  const [openMobile, setOpenMobile] = useState(false)

  const navItems = [
    { label: 'Dashboard', icon: DashboardIcon },
    { label: 'Analytics', icon: ChartIcon },
    { label: 'Users', icon: UsersIcon },
    { label: 'Settings', icon: SettingsIcon },
  ]

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity lg:hidden ${openMobile ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpenMobile(false)}
      />
      <aside
        className={[
          'surface w-72 shrink-0',
          'fixed z-40 left-0 top-0 lg:block',
          'lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto',
          'h-full',
          'transition-all duration-300',
          collapsed ? 'lg:w-20' : 'lg:w-72',
          openMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
        aria-label="Sidebar"
      >
        <div className="h-18 px-5 flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-white/5 grid place-items-center border border-line">
              <SparkIcon className="size-4" />
            </div>
            {!collapsed && <span className="font-semibold tracking-wide">Lux Admin</span>}
          </div>
          <button
            className="hidden lg:inline-flex size-9 rounded-xl border border-line hover:bg-white/5 focus-ring items-center justify-center"
            onClick={onToggle}
            aria-label="Collapse sidebar"
            title="Collapse"
          >
            <ChevronLeft className={`size-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
          <button
            className="lg:hidden inline-flex size-9 rounded-xl border border-line hover:bg-white/5 focus-ring items-center justify-center"
            onClick={() => setOpenMobile(false)}
            aria-label="Close sidebar"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map(({ label, icon: Icon }) => (
            <a
              key={label}
              className={[
                'flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5',
                'transition-colors group'
              ].join(' ')}
              href="#"
            >
              <Icon className="size-5 text-white/80" />
              {!collapsed && <span className="text-sm text-white/90">{label}</span>}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-line">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-white/5 grid place-items-center border border-line">
              <UserCircle className="size-5" />
            </div>
            {!collapsed && (
              <div>
                <div className="text-sm">Ayoub Aguezar</div>
                <div className="text-xs text-white/60">Product Lead</div>
              </div>
            )}
          </div>
        </div>
      </aside>
      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed left-4 top-4 z-50 size-10 rounded-xl border border-line bg-[#0b0b0b] hover:bg-white/5 focus-ring grid place-items-center"
        onClick={() => setOpenMobile(true)}
        aria-label="Open menu"
      >
        <MenuIcon className="size-5" />
      </button>
    </>
  )
}

function SparkIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}
function ChevronLeft({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function DashboardIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}
function ChartIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 20h18M7 16V8M12 20V4M17 20v-6" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}
function UsersIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M12 7a4 4 0 11-8 0 4 4 0 018 0zM20 8a3 3 0 11-6 0" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}
function SettingsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06A2 2 0 014 16.88l.06-.06A1.65 1.65 0 004.39 15a1.65 1.65 0 00-1.51-1H2a2 2 0 010-4h.88a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06A2 2 0 016.83 4.2l.06.06a1.65 1.65 0 001.82.33h.01A1.65 1.65 0 0010.22 3V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82c.19.63.79 1.09 1.46 1.09H22a2 2 0 010 4h-.09c-.67 0-1.27.46-1.46 1.09z" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}
function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function UserCircle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}
