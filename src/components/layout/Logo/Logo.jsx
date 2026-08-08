import { Link } from 'react-router-dom'
import { Gamepad2 } from 'lucide-react'

const Logo = ({ className = '' }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-text-primary transition-colors duration-200 hover:text-crimson ${className}`}
    >
      <Gamepad2 size={28} className="text-crimson" />
      <span>
        Game<span className="text-crimson">Gear</span>
      </span>
    </Link>
  )
}

export default Logo
