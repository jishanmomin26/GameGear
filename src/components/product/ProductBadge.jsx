import { Badge } from '../ui'

const ProductBadge = ({
  badge,
  discountPercent = 0,
  className = '',
}) => {
  if (!badge) return null

  const labels = {
    sale: discountPercent > 0 ? `-${discountPercent}%` : 'Sale',
    new: 'New',
    trending: 'Trending',
    featured: 'Featured',
  }

  return (
    <div className={className}>
      <Badge variant={badge}>
        {labels[badge] || badge}
      </Badge>
    </div>
  )
}

export default ProductBadge
