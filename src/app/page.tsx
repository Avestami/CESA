import Link from 'next/link'
import RepositoryCard from './components/RepositoryCard'
import CTASection from './components/CTASection'

const repositories = [
  {
    name: 'next.js',
    description: 'The React Framework for the Web',
    language: 'TypeScript',
    stars: 98765,
    forks: 23456
  },
  {
    name: 'react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    language: 'JavaScript',
    stars: 198765,
    forks: 43210
  },
  {
    name: 'tailwindcss',
    description: 'A utility-first CSS framework for rapid UI development.',
    language: 'CSS',
    stars: 65432,
    forks: 3210
  }
]

export default function Home() {
  return (
    <div className="pt-16">
      <section className="mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome to GitHub Clone</h1>
        <p className="text-lg md:text-xl mb-8">Discover, collaborate, and build amazing software projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="#" className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Repositories</h2>
            <p>Explore millions of open-source projects</p>
          </Link>
          <Link href="#" className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Teams</h2>
            <p>Collaborate with your team members</p>
          </Link>
          <Link href="#" className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Organizations</h2>
            <p>Manage multiple projects and teams</p>
          </Link>
        </div>
      </section>

      <section className="mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Repositories</h2>
        <div className="grid gap-4">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.name} {...repo} />
          ))}
        </div>
      </section>

      <CTASection />

      <section className="mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Get GitHub Clone</h2>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Download for macOS
          </a>
          <a href="#" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Download for Windows
          </a>
          <a href="#" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Download for Linux
          </a>
        </div>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Available on the App Store
          </a>
        </div>
      </section>
    </div>
  )
}

