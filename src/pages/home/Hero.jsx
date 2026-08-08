import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Container, Button } from '../../components/ui'
import heroImg from '../../assets/images/hero/hero-setup.png'

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-crimson/8 via-transparent to-gold/5" />
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-crimson/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="mb-4 inline-block rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-crimson">
              Premium Gaming Gear
            </span>

            <h1 className="mt-4 text-[44px] font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-[56px]">
              Elevate Your
              <br />
              <span className="bg-gradient-to-r from-crimson to-gold bg-clip-text text-transparent">
                Gaming Setup
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
              Discover premium peripherals, ultra-responsive gear, and
              top-tier accessories crafted for competitive gamers and
              enthusiasts.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/shop">
                <Button size="large" icon={ShoppingBag}>
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="secondary"
                  size="large"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 border-t border-graphite pt-8">
              {[
                { value: '500+', label: 'Products' },
                { value: '50K+', label: 'Gamers' },
                { value: '4.9', label: 'Rating' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <p className="text-2xl font-bold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-graphite shadow-[0_8px_40px_rgba(215,38,56,0.12)]">
              <img
                src={heroImg}
                alt="Premium gaming setup with keyboard, mouse, and monitor"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
            </div>
            {/* Glow accent */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-crimson/15 blur-[60px]" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
