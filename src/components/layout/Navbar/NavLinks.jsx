import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {links.map((link) => (
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
  )
}

// Export the links array so MobileMenu can reuse it
NavLinks.links = links

export default NavLinks
