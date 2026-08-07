import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-crimson">404</h1>
        <p className="mt-4 text-2xl font-semibold text-text-primary">
          Page Not Found
        </p>
        <p className="mt-2 text-text-muted">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-[12px] bg-crimson px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-[0_4px_16px_rgba(215,38,56,0.25)] hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
