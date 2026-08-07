import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Gamepad2,
  Globe,
  MessageCircle,
  Send,
  Tv,
  ArrowRight,
} from 'lucide-react'
import { Container, Button } from '../ui'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const shopLinks = [
  { to: '/shop', label: 'All Products' },
  { to: '/cart', label: 'Cart' },
  { to: '/wishlist', label: 'Wishlist' },
]

const socialLinks = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
  { icon: Send, label: 'Telegram', href: '#' },
  { icon: Tv, label: 'Twitch', href: '#' },
]

const Footer = () => {
  return (
    <footer className="border-t border-graphite bg-charcoal">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-xl font-extrabold text-text-primary transition-colors duration-200 hover:text-crimson"
            >
              <Gamepad2 size={26} className="text-crimson" />
              Game<span className="text-crimson">Gear</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Premium gaming gear for every gamer. Elevate your setup with
              top-tier peripherals, accessories, and equipment.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite bg-obsidian text-text-muted transition-all duration-200 hover:border-crimson hover:text-crimson"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-muted transition-colors duration-200 hover:text-crimson"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-muted transition-colors duration-200 hover:text-crimson"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-text-muted">
              Get the latest gear drops and exclusive deals.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-[12px] border border-graphite bg-obsidian px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-crimson focus:outline-none"
              />
              <Button size="sm" className="shrink-0" icon={ArrowRight}>
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="border-t border-graphite">
        <Container>
          <div className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} GameGear. All rights reserved.
            </p>
            <p className="text-xs text-text-muted">
              Designed with <span className="text-crimson">♥</span> for gamers
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
