type Props = {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: Props) {
  return (
    <header className="sticky top-0 z-30 bg-base/80 backdrop-blur border-b border-line">
      <div className="h-18 px-4 md:px-6 lg:px-8 flex items-center gap-4">
        <button
          className="lg:hidden inline-flex size-10 rounded-xl border border-line hover:bg-white/5 focus-ring items-center justify-center"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <MenuIcon className="size-5" />
        </button>
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#0b0b0b] border border-line rounded-xl py-2.5 pl-10 pr-4 text-sm placeholder-white/40 focus-ring"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/60" />
        </div>
        <button className="size-10 rounded-xl border border-line hover:bg-white/5 focus-ring grid place-items-center">
          <BellIcon className="size-5" />
        </button>
        <div className="relative">
          <details className="group">
            <summary className="list-none size-10 rounded-xl border border-line hover:bg-white/5 focus-ring grid place-items-center cursor-pointer">
              <UserCircle className="size-5" />
            </summary>
            <div className="absolute right-0 mt-2 w-48 surface p-2 animate-fade-in">
              <a className="block px-3 py-2 rounded-lg hover:bg-white/5" href="#">Profile</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-white/5" href="#">Settings</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-white/5" href="#">Logout</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}

function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function BellIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14v-3a6 6 0 10-12 0v3c0 .53-.21 1.04-.59 1.41L4 17h5M9 20a3 3 0 006 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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
