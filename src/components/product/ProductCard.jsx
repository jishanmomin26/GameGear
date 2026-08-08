import { Heart } from 'lucide-react'
import { Card } from '../ui'
import ProductImage from './ProductImage'
import ProductBadge from './ProductBadge'
import ProductRating from './ProductRating'
import ProductPrice from './ProductPrice'
import ProductActions from './ProductActions'

const ProductCard = ({ product, className = '' }) => {
  const hasDiscount = product.originalPrice !== null && product.originalPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <Card className={`group relative flex flex-col ${className}`}>
      {/* Image Container */}
      <div className="relative">
        <ProductImage
          src={product.image}
          alt={product.name}
          aspect="square"
        />

        {/* Badge */}
        <ProductBadge
          badge={product.badge}
          discountPercent={discountPercent}
          className="absolute top-3 left-3"
        />

        {/* Out of stock overlay */}
        {product.inStock === false && (
          <div className="absolute inset-0 flex items-center justify-center bg-obsidian/60">
            <span className="rounded-full bg-charcoal px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted border border-graphite">
              Out of Stock
            </span>
          </div>
        )}

        {/* Wishlist button */}
        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-obsidian/60 text-text-muted backdrop-blur-sm transition-all duration-200 hover:bg-crimson hover:text-white opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <Heart size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
          {product.category}
        </p>

        <h3 className="mt-1.5 text-base font-semibold leading-snug text-text-primary line-clamp-2">
          {product.name}
        </h3>

        <ProductRating
          rating={product.rating}
          reviews={product.reviews}
          className="mt-2"
        />

        {/* Price + Action */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <ProductPrice
            price={product.price}
            originalPrice={product.originalPrice}
          />
          {product.inStock !== false && (
            <ProductActions productName={product.name} />
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
