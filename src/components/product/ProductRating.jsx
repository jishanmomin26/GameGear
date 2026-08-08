import { Star } from 'lucide-react'

const ProductRating = ({
  rating,
  reviews = 0,
  showCount = true,
  size = 'default',
  className = '',
}) => {
  const sizes = {
    small: { star: 10, text: 'text-[10px]' },
    default: { star: 12, text: 'text-xs' },
    large: { star: 16, text: 'text-sm' },
  }

  const { star: starSize, text: textClass } = sizes[size]

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={starSize}
            className={
              i < Math.floor(rating)
                ? 'fill-gold text-gold'
                : i < rating
                  ? 'fill-gold/50 text-gold'
                  : 'text-graphite'
            }
          />
        ))}
      </div>
      {showCount && reviews > 0 && (
        <span className={`${textClass} text-text-muted`}>
          ({reviews.toLocaleString()})
        </span>
      )}
    </div>
  )
}

export default ProductRating
