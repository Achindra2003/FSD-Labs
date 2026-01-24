import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduTech
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50">
              Courses
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50">
              About
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <button className="text-gray-700 hover:text-indigo-600 px-4 py-2 font-medium transition-colors">
                Login
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-1">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all">
                Home
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all">
                Courses
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all">
                Dashboard
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all">
                About
              </Link>
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
                <button className="w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all">
                  Login
                </button>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}