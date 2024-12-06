import Link from 'next/link'
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">GitHub Clone</h3>
            <p className="text-sm mb-4">A GitHub-like website built with Next.js</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Product</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="#" className="hover:text-gray-300">Features</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Security</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Team</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Platform</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="#" className="hover:text-gray-300">Developer API</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Partners</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Atom</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Electron</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@githubclone.com" className="hover:text-gray-300">contact@githubclone.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          © 2023 GitHub Clone. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

