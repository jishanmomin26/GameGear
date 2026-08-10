import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Container, Button } from '../../components/ui'

const PromoBanner = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[1040px] relative overflow-hidden rounded-[24px] border border-graphite bg-gradient-to-br from-charcoal via-charcoal to-obsidian"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-crimson/10 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-gold/8 blur-[80px]" />

          <div className="relative flex flex-col items-center px-8 py-16 text-center sm:px-16 sm:py-20">
            {/* Icon badge */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-crimson/15 border border-crimson/30">
              <Zap size={24} className="text-crimson" />
            </div>

            <h2 className="text-[32px] font-extrabold leading-tight text-text-primary sm:text-[40px]">
              Level Up Your
              <span className="bg-gradient-to-r from-crimson to-gold bg-clip-text text-transparent">
                {' '}Game
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-base text-text-muted">
              Explore our full collection of premium gaming peripherals.
              From mechanical keyboards to ultra-responsive mice — find the
              gear that matches your playstyle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/shop">
                <Button size="large" icon={ArrowRight} iconPosition="right">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default PromoBanner
