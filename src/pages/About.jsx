import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield,
  Target,
  Zap,
  CheckCircle2,
  Award,
  Users,
  Star,
  Package,
  ShoppingBag,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import { Container, Button, Card, SectionTitle } from '../components/ui'
import heroImg from '../assets/images/hero/hero-setup.png'

const stats = [
  { value: '500+', label: 'Premium Products', icon: Package },
  { value: '50K+', label: 'Active Gamers', icon: Users },
  { value: '4.9', label: 'Average Rating', icon: Star },
  { value: '99.8%', label: 'Satisfaction Rate', icon: Award },
]

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description:
      'Engineered with aerospace-grade aluminum, high-grade PBT keycaps, and military-grade internal components built to withstand intense gaming sessions.',
  },
  {
    icon: Target,
    title: 'Gamer Focused',
    description:
      'Co-designed and field-tested alongside competitive esports professionals to deliver flawless ergonomics, weight balance, and natural hand positioning.',
  },
  {
    icon: Zap,
    title: 'Extreme Performance',
    description:
      'Featuring sub-millisecond wireless technology, up to 8,000Hz polling rates, and custom optical switches for unmatched reaction speeds.',
  },
  {
    icon: CheckCircle2,
    title: 'Curated Gear',
    description:
      'Every product in our catalog undergoes exhaustive benchmark testing and strict quality assurance before it reaches your battle station.',
  },
]

const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-obsidian text-text-primary">
      {/* ── 1. About Hero ── */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        {/* Background Gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-crimson/8 via-transparent to-gold/5" />
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-crimson/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />

        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
            <Link to="/" className="transition-colors hover:text-crimson">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-text-primary font-semibold">About Us</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="inline-block rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-crimson">
                About GameGear
              </span>

              <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-text-primary sm:text-5xl lg:text-[52px]">
                Built by Gamers,
                <br />
                <span className="bg-gradient-to-r from-crimson to-gold bg-clip-text text-transparent">
                  Engineered for Perfection
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-muted">
                GameGear was founded on a single core belief: competitive gamers deserve zero-compromise hardware. From ultra-responsive keyboards to pixel-precise optical sensors, we craft gear designed to elevate your performance.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/shop">
                  <Button size="large" icon={ShoppingBag}>
                    Explore Shop
                  </Button>
                </Link>
                <a href="#story">
                  <Button
                    variant="secondary"
                    size="large"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Our Story
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-graphite bg-charcoal shadow-[0_8px_40px_rgba(215,38,56,0.15)]">
                <img
                  src={heroImg}
                  alt="GameGear battle station with custom peripherals and RGB illumination"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 2. GameGear Story ── */}
      <section id="story" className="py-16 border-t border-graphite/60 bg-charcoal/30">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              subtitle="THE JOURNEY"
              title="The GameGear Story"
              align="center"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary"
            >
              Established in 2022 by a team of former esports competitors and hardware engineers, GameGear emerged out of frustration with generic, mass-market gaming peripherals that failed under competitive pressure.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-base sm:text-lg leading-relaxed text-text-muted"
            >
              We set out to bridge the gap between industrial design and esports science. Every keyboard switch, sensor calibration, headset driver, and mouse shape in our lineup is relentlessly optimized so that your hardware never bottlenecks your true potential.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── 3. Mission ── */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[24px] border border-crimson/30 bg-gradient-to-r from-charcoal via-obsidian to-charcoal p-8 sm:p-12 text-center shadow-[0_4px_30px_rgba(215,38,56,0.1)]"
          >
            <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-crimson/15 blur-[60px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gold/15 blur-[60px]" />

            <span className="inline-block text-xs font-bold uppercase tracking-widest text-crimson">
              OUR MISSION STATEMENT
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-text-primary sm:text-3xl lg:text-4xl max-w-3xl mx-auto leading-snug">
              &ldquo;To empower gamers worldwide with elite-tier peripherals that push the boundaries of performance, precision, and immersion.&rdquo;
            </h2>
            <p className="mt-4 text-sm text-text-muted max-w-xl mx-auto">
              We engineer tools for victory — crafted for players who refuse to settle for second best.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── 4. Why GameGear ── */}
      <section className="py-16 bg-charcoal/30 border-t border-b border-graphite/60">
        <Container>
          <SectionTitle
            subtitle="WHY CHOOSE US"
            title="Engineered Without Compromise"
            description="Discover what sets GameGear peripherals apart from standard gaming gear."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => {
              const IconComp = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="h-full p-6 transition-all duration-300 hover:border-crimson/50 hover:shadow-[0_4px_24px_rgba(215,38,56,0.12)]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-crimson/30 bg-crimson/10 text-crimson">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── 5. Statistics ── */}
      <section className="py-16">
        <Container>
          <SectionTitle
            subtitle="BY THE NUMBERS"
            title="Trusted by Gamers Worldwide"
            align="center"
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <Card className="flex flex-col items-center p-6 text-center border-graphite bg-charcoal/80 hover:border-gold/30">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/20">
                      <IconComp size={20} />
                    </div>
                    <span className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                      {stat.label}
                    </span>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── 6. CTA Section ── */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center rounded-[24px] border border-graphite bg-charcoal p-8 sm:p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
              Ready to Dominate Your Next Match?
            </h2>
            <p className="mt-3 max-w-xl text-base text-text-muted">
              Explore our full collection of gaming laptops, mechanical keyboards, lightweight mice, and high-refresh monitors.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/shop">
                <Button size="large" icon={ShoppingBag}>
                  Shop All Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="large">
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}

export default About
