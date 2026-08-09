import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Card } from '../ui'
import ProductImage from './ProductImage'
import ProductBadge from './ProductBadge'
import ProductRating from './ProductRating'
import ProductPrice from './ProductPrice'
import ProductActions from './ProductActions'
import { useWishlist } from '../../context/WishlistContext'

const ProductCard = ({ product, className = '' }) => {
  const { toggleWishlist, isInWishlist } = useWishlist()
  
  const hasDiscount = product.originalPrice !== null && product.originalPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  const productUrl = `/product/${product.id}`
  const isWishlisted = isInWishlist(product.id)

  const handleWishlistClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(product)
  }

  return (
    <Card className={`group relative flex flex-col ${className}`}>
      {/* Image Container */}
      <div className="relative">
        <Link to={productUrl} aria-label={`View ${product.name}`}>
          <ProductImage
            src={product.image}
            alt={product.name}
            aspect="square"
          />
        </Link>

        {/* Badge */}
        <ProductBadge
          badge={product.badge}
          discountPercent={discountPercent}
          className="absolute top-3 left-3 pointer-events-none"
        />

        {/* Out of stock overlay */}
        {product.inStock === false && (
          <div className="absolute inset-0 flex items-center justify-center bg-obsidian/60 pointer-events-none">
            <span className="rounded-full bg-charcoal px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted border border-graphite">
              Out of Stock
            </span>
          </div>
        )}

        {/* Wishlist button */}
        <button
          aria-label={`${isWishlisted ? 'Remove from' : 'Add to'} wishlist`}
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer z-10
            ${isWishlisted 
              ? 'bg-crimson text-white opacity-100 shadow-[0_0_12px_rgba(224,0,76,0.4)]' 
              : 'bg-obsidian/60 text-text-muted opacity-0 group-hover:opacity-100 hover:bg-crimson hover:text-white'
            }
          `}
        >
          <Heart size={16} className={isWishlisted ? 'fill-white text-white' : ''} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
          {product.category}
        </p>

        <Link to={productUrl} className="mt-1.5 block">
          <h3 className="text-base font-semibold leading-snug text-text-primary line-clamp-2 transition-colors duration-200 hover:text-crimson">
            {product.name}
          </h3>
        </Link>

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
            <ProductActions product={product} />
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
