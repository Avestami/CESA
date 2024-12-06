import Link from 'next/link'
import { Star, GitFork } from 'lucide-react'

interface RepositoryCardProps {
  name: string
  description: string
  language: string
  stars: number
  forks: number
}

export default function RepositoryCard({ name, description, language, stars, forks }: RepositoryCardProps) {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/repo/${name}`} className="text-blue-600 hover:underline">
          {name}
        </Link>
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <span>{language}</span>
        <span className="flex items-center">
          <Star size={16} className="mr-1" />
          {stars}
        </span>
        <span className="flex items-center">
          <GitFork size={16} className="mr-1" />
          {forks}
        </span>
      </div>
    </div>
  )
}

