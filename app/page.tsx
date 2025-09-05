import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

type Project = {
  title: string
  client: string
  href: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Handwerker Pro',
    client: 'Ebgroupp',
    href: '/work/handwerkerpro',
    image: 'https://framerusercontent.com/images/M0GJJw0aXjd0qacC0yiqrCxPxVY.jpeg?width=2048&height=1536'
  },
  {
    title: 'Fumis',
    client: 'Fumis Solutions',
    href: '/work/fumis',
    image: 'https://framerusercontent.com/images/xotIalGTDXF5xU7HvuVL3xFUTBQ.png?width=2048&height=1536'
  },
  {
    title: 'Direct2MD',
    client: 'Direct2Care',
    href: '/work/direct2md',
    image: 'https://framerusercontent.com/images/8PSw25Sl7GTnIbOBMuSyPvOHkQ.png?width=2048&height=1536'
  },
  {
    title: 'United Fitness Brands',
    client: 'United Fitness',
    href: '/work/ufb',
    image: 'https://framerusercontent.com/images/FooFBCzTAW0xipuwDV1gG6Egrcg.jpeg?width=1000&height=586'
  }
]

export default function Page() {
  return (
    <>
      <Header />
      <main className="container-page">
        <section className="py-24 md:py-36">
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl">Less friction, more feeling.</h1>
          <div className="mt-6 inline-flex items-center gap-3 text-gray-500">
            <span className="h-2 w-2 rounded-full bg-gray-400" />
            <span>Open to New Opportunities</span>
          </div>
        </section>

        <section className="pb-24 grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.href} href={p.href} className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={900}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 m-4 grid size-12 place-items-center rounded-full bg-white/20 backdrop-blur rotate-45">
                  <span className="-rotate-45">→</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">{p.client}</p>
                <h3 className="text-xl font-medium">{p.title}</h3>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

