'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { categories } from '../data/data'
import { cn } from '../../lib/utils'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-background rounded-md shadow-md"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 transform bg-gray-900 text-white transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-5">
          <h2 className="mb-6 text-xl font-bold mt-14">Categories</h2>
          <nav className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}

