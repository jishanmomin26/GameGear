import { motion } from 'framer-motion'

const Card = ({
  children,
  hover = true,
  glass = false,
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 8px 32px rgba(215, 38, 56, 0.15)' } : {}}
      transition={{ duration: 0.3 }}
      className={`
        rounded-[18px] border border-graphite
        ${glass
          ? 'bg-charcoal/60 backdrop-blur-md'
          : 'bg-charcoal'
        }
        shadow-[0_4px_24px_rgba(0,0,0,0.4)]
        overflow-hidden
        ${className}
      `}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default Card
