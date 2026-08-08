const variantStyles = {
  new: 'bg-crimson/15 text-crimson border-crimson/30',
  sale: 'bg-gold/15 text-gold border-gold/30',
  trending: 'bg-info/15 text-info border-info/30',
  featured: 'bg-success/15 text-success border-success/30',
}

const Badge = ({
  children,
  variant = 'new',
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full border
        px-3 py-1
        text-xs font-semibold uppercase tracking-wider
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

export default Badge
