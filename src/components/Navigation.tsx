'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Portfolio', href: '/portfolio' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Custom Kitchens', href: '/services/custom-kitchens' },
      { name: 'Bespoke Cabinetry', href: '/services/bespoke-cabinetry' },
      { name: 'Architectural Millwork', href: '/services/architectural-millwork' },
      { name: 'Paneling', href: '/services/paneling' },
      { name: 'Wine Rooms', href: '/services/wine-rooms' },
      { name: 'Vanities', href: '/services/vanities' },
      { name: 'Libraries, Closets & Offices', href: '/services/libraries-closets-offices' },
    ]
  },
  { name: 'Process', href: '/process' },
  { name: 'Materials', href: '/materials' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
  { name: 'Showroom', href: '/showroom' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl text-deep-green font-bold">
              PineWood Cabinets
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm tracking-wide transition-all duration-200 hover:text-deep-green ${
                    scrolled 
                      ? `font-medium ${pathname === item.href ? 'text-deep-green' : 'text-charcoal'}`
                      : `font-bold ${pathname === item.href ? 'text-ivory' : 'text-ivory'}`
                  }`}
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 w-3 h-3" />}
                  </span>
                </Link>
                
                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-ivory border border-french-gray/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-french-gray/10 hover:text-deep-green transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-charcoal hover:text-deep-green transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-ivory border-t border-french-gray/20">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block text-base font-medium transition-colors duration-200 hover:text-deep-green ${
                    pathname === item.href ? 'text-deep-green' : 'text-charcoal'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-charcoal/80 hover:text-deep-green transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm inline-block"
              onClick={() => setIsOpen(false)}
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
