import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingCart, Menu } from 'lucide-react'
import { Container } from '../../ui'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import { useCart } from '../../../context/CartContext'
import { useWishlist } from '../../../context/WishlistContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  const { totalItems: cartCount } = useCart()
  const { totalItems: wishlistCount } = useWishlist()

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
            <Logo />

            {/* Desktop Navigation Links */}
            <NavLinks />

            {/* Desktop Action Icons */}
            <div className="hidden items-center gap-1 lg:flex">
              <button
                onClick={() => navigate('/shop')}
                aria-label="Search products"
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary cursor-pointer"
              >
                <Search size={20} />
              </button>
              <Link
                to="/wishlist"
                aria-label={`Wishlist containing ${wishlistCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-crimson text-[9px] font-bold text-white ring-2 ring-obsidian">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                aria-label={`Cart containing ${cartCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-crimson text-[9px] font-bold text-white ring-2 ring-obsidian">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile: Action Icons + Hamburger */}
            <div className="flex items-center gap-1 lg:hidden">
              <Link
                to="/wishlist"
                aria-label={`Wishlist containing ${wishlistCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-crimson text-[9px] font-bold text-white ring-2 ring-obsidian">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                aria-label={`Cart containing ${cartCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-all duration-200 hover:bg-charcoal hover:text-text-primary"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-crimson text-[9px] font-bold text-white ring-2 ring-obsidian">
                    {cartCount}
                  </span>
                )}
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
            navLinks={NavLinks.links}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
