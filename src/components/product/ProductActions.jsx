import { ShoppingCart, Heart } from 'lucide-react'
import { Button } from '../ui'

const ProductActions = ({
  productName,
  showWishlist = true,
  showCart = true,
  layout = 'card',
  className = '',
}) => {
  if (layout === 'card') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {showCart && (
          <Button
            size="small"
            className="px-3"
            icon={ShoppingCart}
            aria-label={`Add ${productName} to cart`}
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
          size="large"
          icon={ShoppingCart}
          aria-label={`Add ${productName} to cart`}
        >
          Add to Cart
        </Button>
      )}
      {showWishlist && (
        <Button
          variant="secondary"
          size="large"
          icon={Heart}
          aria-label={`Add ${productName} to wishlist`}
        >
          Wishlist
        </Button>
      )}
    </div>
  )
}

export default ProductActions
