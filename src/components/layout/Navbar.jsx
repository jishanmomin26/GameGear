import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingCart, Menu, X, Gamepad2 } from 'lucide-react'
import { Container } from '../ui'
import MobileMenu from './MobileMenu'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Detect scroll for glass background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'bg-obsidian/80 backdrop-blur-md border-b border-graphite shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
          }
        `}
      >
        <Container>
          <nav
            className="flex h-[72px] items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-text-primary transition-colors duration-200 hover:text-crimson"
            >
              <Gamepad2 size={28} className="text-crimson" />
              <span>
                Game<span className="text-crimson">Gear</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `
                      relative px-4 py-2 text-sm font-medium rounded-[12px]
                      transition-all duration-200
                      ${isActive
                        ? 'text-crimson'
                        : 'text-text-secondary hover:text-text-primary hover:bg-charcoal'
                      }
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-crimson"
                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Action Icons */}
            <div className="hidden items-center gap-1 lg:flex">
              <button
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary cursor-pointer"
              >
                <Search size={20} />
              </button>
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <Heart size={20} />
              </Link>
              <Link
                to="/cart"
                aria-label="Cart"
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <ShoppingCart size={20} />
              </Link>
            </div>

            {/* Mobile: Action Icons + Hamburger */}
            <div className="flex items-center gap-1 lg:hidden">
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <Heart size={20} />
              </Link>
              <Link
                to="/cart"
                aria-label="Cart"
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <ShoppingCart size={20} />
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary cursor-pointer"
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            navLinks={navLinks}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
