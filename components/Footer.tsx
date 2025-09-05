import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container-page py-20 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-gray-100">Contact</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">Let&apos;s start creating together</h2>
          <Link href="mailto:hello@example.com" className="mt-6 inline-flex items-center rounded-pill bg-white text-black px-5 py-2">Let&apos;s talk</Link>
        </div>
        <div className="flex md:justify-end">
          <ul className="space-y-3">
            <li><Link href="/" className="text-white/90">Home</Link></li>
            <li><Link href="/work" className="text-white/90">Work</Link></li>
            <li><Link href="/about" className="text-white/90">About</Link></li>
            <li><Link href="mailto:hello@example.com" className="text-white/90">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 text-sm text-white/70">© {new Date().getFullYear()} All rights reserved</div>
      </div>
    </footer>
  )
}

