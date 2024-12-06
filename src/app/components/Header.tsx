'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Github, Bell, Plus, User, Search, Globe, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white">
              <Github size={32} className={`transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
            </Link>
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search or jump to..."
                className="bg-gray-800 text-white px-3 py-1 pl-10 rounded-md w-64"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li><Link href="#" className="text-white hover:text-gray-300">Pull requests</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300">Issues</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300">Marketplace</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300">Explore</Link></li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Bell size={20} className="text-white cursor-pointer" />
            <Plus size={20} className="text-white cursor-pointer" />
            <User size={20} className="text-white cursor-pointer" />
            <div className="relative">
              <Globe size={20} className="text-white cursor-pointer" />
              <select className="absolute opacity-0 inset-0 w-full cursor-pointer">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <nav className="mb-4">
            <ul className="space-y-2">
              <li><Link href="#" className="text-white hover:text-gray-300 block">Pull requests</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 block">Issues</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 block">Marketplace</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 block">Explore</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Bell size={20} className="text-white cursor-pointer" />
            <Plus size={20} className="text-white cursor-pointer" />
            <User size={20} className="text-white cursor-pointer" />
            <div className="relative">
              <Globe size={20} className="text-white cursor-pointer" />
              <select className="absolute opacity-0 inset-0 w-full cursor-pointer">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-gray-800 text-white px-3 py-1 pl-10 rounded-md w-full"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  )
}

