import { motion } from 'framer-motion'
import { PackageOpen } from 'lucide-react'
import Button from '../Button'

const EmptyState = ({
  icon: Icon = PackageOpen,
  title = 'Nothing here yet',
  description = 'There are no items to display at the moment.',
  actionLabel,
  onAction,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col items-center justify-center py-20 text-center ${className}`}
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-charcoal border border-graphite">
        <Icon size={36} className="text-text-muted" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-sm text-text-muted">
        {description}
      </p>
      {actionLabel && onAction && (
        <div className="mt-6">
          <Button variant="secondary" size="small" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </motion.div>
  )
}

export default EmptyState
