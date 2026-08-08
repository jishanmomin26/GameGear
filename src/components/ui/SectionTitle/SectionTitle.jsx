import { motion } from 'framer-motion'

const alignments = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`mb-12 ${alignments[align]} ${className}`}
    >
      <h2 className="text-[36px] font-bold leading-tight text-text-primary max-sm:text-[28px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-muted max-w-xl mx-auto max-sm:text-sm">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
