import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Container, Button } from '../../components/ui'
import heroVideo from '../../assets/videos/gaming-setup.mp4'

const Hero = () => {
  return (
    <section className="hero-section relative min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Full-screen Animated Video Background */}
      <div className="pointer-events-none absolute inset-0">
        <video
          className="hero-background-video h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-obsidian/60" />

        {/* Stronger left-side overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-obsidian/0" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />

        {/* Top subtle fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-obsidian/50 to-transparent" />

        {/* GameGear red ambient glow */}
        <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-crimson/15 blur-[140px]" />

        {/* Warm secondary glow */}
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-gold/8 blur-[120px]" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-72px)] items-center lg:grid-cols-12 lg:gap-12">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8 flex flex-col justify-center py-16 lg:py-20"
          >
            {/* Badge */}
            <div>
              <span className="inline-block rounded-full border border-crimson/40 bg-crimson/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-crimson backdrop-blur-sm">
                Premium Gaming Gear
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-[850px] text-5xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-[72px]">
              Elevate Your{' '}
              <span className="bg-gradient-to-r from-crimson via-red-500 to-gold bg-clip-text text-transparent">
                Gaming Setup
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-base leading-relaxed text-text-muted sm:text-lg lg:text-xl">
              Discover premium peripherals, ultra-responsive gear, and top-tier
              accessories engineered for competitive gamers and enthusiasts.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link to="/shop" className="w-full sm:w-auto">
                <Button
                  size="large"
                  icon={ShoppingBag}
                  className="w-full justify-center px-8 shadow-[0_10px_35px_rgba(215,38,56,0.25)] sm:w-auto"
                >
                  Shop Now
                </Button>
              </Link>

              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="large"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full justify-center px-8 backdrop-blur-md sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-7">
              {[
                { value: '500+', label: 'Products' },
                { value: '50K+', label: 'Gamers' },
                { value: '4.9★', label: 'Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.4,
                  }}
                >
                  <p className="text-2xl font-extrabold text-text-primary sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero