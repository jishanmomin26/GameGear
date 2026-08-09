import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Compass } from 'lucide-react'
import { Container, Button } from '../components/ui'

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20 bg-obsidian text-text-primary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md text-center flex flex-col items-center"
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-charcoal border border-graphite text-crimson shadow-[0_0_24px_rgba(215,38,56,0.2)]">
            <Compass size={40} className="animate-pulse" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-crimson">
            Error 404
          </span>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-text-muted">
            The page or gear specification you are looking for has been moved, renamed, or does not exist.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button size="large" icon={Home}>
                Back to Home
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="secondary" size="large">
                Explore Shop
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </main>
  )
}

export default NotFound

