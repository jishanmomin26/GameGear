import { useState } from 'react'
import { ShoppingCart, Heart, Check } from 'lucide-react'
import { Button } from '../ui'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

const ProductActions = ({
  product,
  productName, // fallback
  showWishlist = true,
  showCart = true,
  layout = 'card',
  className = '',
}) => {
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [added, setAdded] = useState(false)

  const activeProduct = product || { name: productName, id: '', price: 0 }
  const isWishlisted = isInWishlist(activeProduct.id)

  const handleAddToCart = (e) => {
    // Prevent card click navigation if wrapped in Link
    e.preventDefault()
    e.stopPropagation()
    addToCart(activeProduct, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleToggleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(activeProduct)
  }

  if (layout === 'card') {
    return (
      <div className={`flex shrink-0 items-center gap-2 ${className}`}>
        {showCart && (
          <Button
            size="small"
            className={`px-3 transition-colors duration-300 ${added ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}
            icon={added ? Check : ShoppingCart}
            aria-label={`Add ${activeProduct.name} to cart`}
            onClick={handleAddToCart}
          >
            <span className="sr-only">Add to Cart</span>
          </Button>
        )}
      </div>
    )
  }

  // layout === 'detail'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showCart && (
        <Button
          size="medium"
          icon={added ? Check : ShoppingCart}
          aria-label={`Add ${activeProduct.name} to cart`}
          onClick={handleAddToCart}
          className={added ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
        >
          {added ? 'Added!' : 'Add to Cart'}
        </Button>
      )}
      {showWishlist && (
        <Button
          variant="secondary"
          size="medium"
          icon={Heart}
          aria-label={`${isWishlisted ? 'Remove from' : 'Add to'} wishlist`}
          onClick={handleToggleWishlist}
          className={isWishlisted ? 'text-crimson border-crimson' : ''}
        >
          {isWishlisted ? 'Wishlisted' : 'Wishlist'}
        </Button>
      )}
    </div>
  )
}

export default ProductActions

