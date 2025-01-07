'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { categories } from '../data/data'
import { cn } from '../../lib/utils'
import { useSidebar } from '../provider/context-provider'

export function Sidebar() {
  const { desktopOpen, setDesktopOpen } = useSidebar()

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setDesktopOpen(!desktopOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-md"
      >
        {desktopOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Toggle Button */}
      <button
        onClick={() => setDesktopOpen(!desktopOpen)}
        className="hidden lg:block fixed top-20 left-[260px] z-50 p-2 bg-gray-800 text-white rounded-md shadow-md transition-transform"
        style={{ transform: desktopOpen ? 'translateX(0)' : 'translateX(-240px)' }}
      >
        {desktopOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 z-40 h-screen bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out',
          desktopOpen
            ? 'translate-x-0 w-64'
            : 'translate-x-[-100%] lg:translate-x-0 lg:w-20'
        )}
      >
        <div className="p-5">
          {/* Sidebar Title */}
          <h2
            className={cn(
              'text-xl font-bold transition-opacity duration-300 overflow-hidden mt-14',
              desktopOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
            )}
          >
            Categories
          </h2>

          {/* Sidebar Navigation */}
          <nav className="space-y-1 mt-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={cn(
                  'block py-2 px-4 rounded-md transition-all duration-300 overflow-hidden',
                  desktopOpen ? 'hover:bg-gray-800' : 'text-center'
                )}
              >
                <span
                  className={cn(
                    'inline-block transition-opacity duration-300',
                    desktopOpen ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  {category.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}
