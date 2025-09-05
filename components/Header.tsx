import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/60 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg">admir kurtovic</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/work" className="text-sm">Work</Link>
          <Link href="/about" className="text-sm">About</Link>
          <Link href="#contact" className="text-sm inline-flex items-center rounded-pill bg-ink px-5 py-2 text-white">Contact</Link>
        </nav>
        <nav className="md:hidden">
          <Link href="#contact" className="text-sm inline-flex items-center rounded-pill bg-ink px-4 py-2 text-white">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

