import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Container, Button } from '../../components/ui'
import heroImg from '../../assets/images/hero/hero-setup.png'

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-crimson/8 via-transparent to-gold/5" />
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-crimson/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — Copy (55%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div>
              <span className="inline-block rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-crimson">
                Premium Gaming Gear
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[56px]">
              Elevate Your{' '}
              <span className="bg-gradient-to-r from-crimson via-red-500 to-gold bg-clip-text text-transparent">
                Gaming Setup
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-text-muted sm:text-lg">
              Discover premium peripherals, ultra-responsive gear, and top-tier accessories engineered for competitive gamers and enthusiasts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/shop" className="w-full sm:w-auto">
                <Button size="large" icon={ShoppingBag} className="w-full justify-center px-8">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="large"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full justify-center px-8"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-8 border-t border-graphite/60 pt-6">
              {[
                { value: '500+', label: 'Products' },
                { value: '50K+', label: 'Gamers' },
                { value: '4.9★', label: 'Rating' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <p className="text-2xl font-extrabold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Hero Image (45%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-graphite bg-charcoal shadow-[0_12px_48px_rgba(215,38,56,0.15)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-square max-h-[480px]">
              <img
                src={heroImg}
                alt="Premium gaming setup with keyboard, mouse, and monitor"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            </div>
            {/* Glow accent */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-crimson/20 blur-[60px]" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
