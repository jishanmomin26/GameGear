import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { Container, Button } from '../../components/ui'

const Newsletter = () => {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[24px] border border-graphite bg-charcoal px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/6 blur-[100px]" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-graphite bg-obsidian">
              <Mail size={24} className="text-crimson" />
            </div>

            <h2 className="text-[32px] font-extrabold text-text-primary sm:text-[36px]">
              Stay in the Game
            </h2>

            <p className="mx-auto mt-3 max-w-md text-base text-text-muted">
              Subscribe to our newsletter for exclusive deals, new product
              drops, and gaming tips straight to your inbox.
            </p>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter subscription"
                className="flex-1 rounded-[12px] border border-graphite bg-obsidian px-5 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-crimson focus:outline-none"
              />
              <Button icon={ArrowRight}>
                Subscribe
              </Button>
            </form>

            <p className="mt-4 text-xs text-text-muted">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Newsletter
