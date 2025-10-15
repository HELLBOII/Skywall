import { Menu, X, Facebook, Instagram, Linkedin, User, Wrench, Building2, Users, Clock, Home } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { cn } from '../lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: User },
  { name: 'Our Services', href: '/services', icon: Wrench },
  { name: 'Projects', href: '/projects', icon: Building2 },
  { name: 'Our Clients', href: '/clients', icon: Users },
  { name: 'Contact Us', href: '/contact', icon: Clock },
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100085893777747', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/winner_holistic/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/winnerholisticconsultants/', icon: Linkedin },
]

export function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md shadow-2xl border-b border-white/10 animate-slide-down">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-bl from-secondary-500/20 to-primary-500/20 rounded-full blur-xl animate-pulse animation-delay-400"></div>
      </div>

      <nav className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo - Left */}
            <Link to="/" className="flex-shrink-0 z-10 group">
              <div className="relative">
                <img
                  src="/images/skywall-logo.png"
                  alt="Sky Wall Contracting LLC"
                  className="h-8 sm:h-10 lg:h-12 w-auto transition-transform duration-300 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex flex-1 justify-center">
                <div className="flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 border border-white/10">
                  {navigation.map((item) => {
                    const isActive =
                      item.href === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(item.href)

                    return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            'relative flex items-center space-x-1 lg:space-x-2 px-1 lg:px-1.5 py-1 lg:py-1.5 rounded-full font-medium transition-all duration-300 overflow-hidden group',
                            'text-white/90 hover:text-white text-xs lg:text-sm'
                          )}
                        >
                          {/* Background (active OR hover) */}
                          <div
                            className={cn(
                              'absolute inset-0 rounded-full transition-all duration-500',
                              isActive
                                ? 'bg-primary-500' // Active state background
                                : 'bg-secondary-500 scale-x-0 group-hover:scale-x-100 origin-left'
                            )}
                          />

                          {/* Optional glow effect */}
                          {!isActive && (
                            <div className="absolute inset-0 bg-secondary-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                          )}

                          {/* Content always on top */}
                          <item.icon className="h-3 w-3 lg:h-4 lg:w-4 relative z-10" />
                          <span className="relative z-10 hidden lg:inline">{item.name}</span>
                        </Link>

                    )
                  })}
                </div>
              </div>


            {/* Social Links - Right */}
            <div className="hidden md:flex items-center justify-end space-x-2 lg:space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-secondary-500 hover:to-secondary-600 p-2 lg:p-3 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-secondary-500/25 group relative overflow-hidden"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="h-3 w-3 lg:h-4 lg:w-4 relative z-10" />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-primary-400 transition-colors duration-200 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>


        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-slate-800 to-slate-900 border-t border-white/10 shadow-2xl backdrop-blur-md animate-mobile-menu">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => {
                const isActive = item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 text-white/90 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 font-medium relative group overflow-hidden text-sm sm:text-base',
                      isActive && 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    )}
                  >
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                    <span className="relative z-10">{item.name}</span>
                    {!isActive && (
                      <>
                        {/* Progressive fill indicator */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                        {/* Optional: Add a subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      </>
                    )}
                  </Link>
                )
              })}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 pt-4 border-t border-white/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-secondary-500 hover:to-secondary-600 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 group relative overflow-hidden"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <social.icon className="h-3 w-3 sm:h-4 sm:w-4 relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
