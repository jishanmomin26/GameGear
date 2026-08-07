import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-crimson text-white shadow-[0_4px_16px_rgba(215,38,56,0.25)] hover:bg-gradient-to-r hover:from-crimson hover:to-gold',
  secondary:
    'bg-transparent border border-crimson text-white hover:bg-white/5 hover:backdrop-blur-sm',
  ghost:
    'bg-transparent text-white hover:bg-charcoal',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  onClick,
  ...rest
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      transition={{ duration: 0.2 }}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-[12px] font-semibold
        transition-all duration-300 ease-out
        cursor-pointer
        focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...rest}
    >
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
        </>
      )}
    </motion.button>
  )
}

export default Button
