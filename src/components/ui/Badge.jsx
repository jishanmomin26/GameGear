const variants = {
  default: 'bg-charcoal text-text-secondary border-graphite',
  crimson: 'bg-crimson/15 text-crimson border-crimson/30',
  gold: 'bg-gold/15 text-gold border-gold/30',
  success: 'bg-success/15 text-success border-success/30',
  warning: 'bg-warning/15 text-warning border-warning/30',
  error: 'bg-error/15 text-error border-error/30',
  info: 'bg-info/15 text-info border-info/30',
}

const Badge = ({
  children,
  variant = 'default',
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full border
        px-3 py-1
        text-xs font-semibold uppercase tracking-wider
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

export default Badge
