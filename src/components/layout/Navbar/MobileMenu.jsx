import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, Search } from 'lucide-react'
import Logo from '../Logo'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
  }),
}

const MobileMenu = ({ navLinks, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[60] lg:hidden"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Overlay Backdrop */}
      <motion.div
        className="absolute inset-0 bg-obsidian/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-charcoal border-l border-graphite shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-graphite">
          <Logo className="text-lg" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors duration-200 hover:bg-graphite hover:text-text-primary cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Search (UI only) */}
        <div className="px-6 pt-6 pb-2">
          <div className="flex items-center gap-3 rounded-[12px] border border-graphite bg-obsidian px-4 py-2.5">
            <Search size={18} className="text-text-muted" />
            <span className="text-sm text-text-muted">Search...</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-4" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.to}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) => `
                    flex items-center px-4 py-3 rounded-[12px]
                    text-base font-medium
                    transition-all duration-200
                    ${isActive
                      ? 'bg-crimson/10 text-crimson border-l-2 border-crimson'
                      : 'text-text-secondary hover:bg-graphite hover:text-text-primary'
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 pb-6 pt-2 border-t border-graphite">
          <p className="text-xs text-text-muted text-center">
            © {new Date().getFullYear()} GameGear
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MobileMenu
