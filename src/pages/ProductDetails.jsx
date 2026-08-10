import { useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight,
  ShoppingCart,
  Heart,
  Check,
  Minus,
  Plus,
  Package,
  Shield,
  Truck,
  ArrowLeft,
  SearchX,
} from 'lucide-react'
import { Container, SectionTitle, Badge, EmptyState, Button } from '../components/ui'
import {
  ProductPrice,
  ProductRating,
  ProductBadge,
  ProductGrid,
} from '../components/product'
import { products, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

// ── Spec key → readable label map ──
const specLabels = {
  processor: 'Processor',
  gpu: 'Graphics',
  ram: 'Memory',
  storage: 'Storage',
  display: 'Display',
  switches: 'Switches',
  layout: 'Layout',
  connectivity: 'Connectivity',
  lighting: 'Lighting',
  battery: 'Battery',
  features: 'Features',
  sensor: 'Sensor',
  dpi: 'Max DPI',
  weight: 'Weight',
  microphone: 'Microphone',
  panel: 'Panel Type',
  size: 'Screen Size',
  resolution: 'Resolution',
  refreshRate: 'Refresh Rate',
  responseTime: 'Response Time',
  driver: 'Driver',
  frequency: 'Frequency Response',
  compatibility: 'Compatibility',
}

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  // Find product by id
  const product = useMemo(() => products.find((p) => p.id === id), [id])
  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product.id, 4) : []),
    [product]
  )

  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [cartAdded, setCartAdded] = useState(false)

  const wishlistAdded = product ? isInWishlist(product.id) : false

  // Build gallery images (main + variations from the same Unsplash source)
  const galleryImages = useMemo(() => {
    if (!product) return []
    const base = product.image
    // Create visual variations via Unsplash crop params
    return [
      base,
      base.replace('w=500&h=500', 'w=600&h=400'),
      base.replace('w=500&h=500', 'w=500&h=600'),
    ]
  }, [product])

  // ── Handlers ──
  const handleAddToCart = () => {
    if (!product) return
    addToCart(product, quantity)
    setCartAdded(true)
    setTimeout(() => setCartAdded(false), 2000)
  }

  const handleAddToWishlist = () => {
    if (!product) return
    toggleWishlist(product)
  }

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1))
  const increaseQty = () => setQuantity((q) => q + 1)

  // ── Invalid product ──
  if (!product) {
    return (
      <section className="py-20">
        <Container>
          <EmptyState
            icon={SearchX}
            title="Product Not Found"
            description="The product you're looking for doesn't exist or may have been removed."
            actionLabel="Back to Shop"
            onAction={() => navigate('/shop')}
          />
        </Container>
      </section>
    )
  }

  const isOutOfStock = product.inStock === false
  const hasDiscount =
    product.originalPrice !== null && product.originalPrice > product.price

  return (
    <section className="py-10 lg:py-16">
      <Container>
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-crimson">
                Home
              </Link>
            </li>
            <li><ChevronRight size={12} /></li>
            <li>
              <Link to="/shop" className="transition-colors hover:text-crimson">
                Shop
              </Link>
            </li>
            <li><ChevronRight size={12} /></li>
            <li className="font-semibold text-text-primary truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* ── Product Layout (2-col desktop / 1-col mobile) ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ── LEFT: Gallery ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[18px] border border-graphite bg-charcoal">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={galleryImages[activeImageIndex]}
                  alt={`${product.name} - View ${activeImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="aspect-square w-full object-cover"
                />
              </AnimatePresence>

              {/* Badge overlay */}
              <ProductBadge
                badge={product.badge}
                discountPercent={
                  hasDiscount
                    ? Math.round(
                        (1 - product.price / product.originalPrice) * 100
                      )
                    : 0
                }
                className="absolute top-4 left-4"
              />

              {/* Out of stock overlay */}
              {isOutOfStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-obsidian/60">
                  <span className="rounded-full bg-charcoal px-6 py-2 text-sm font-semibold uppercase tracking-wider text-text-muted border border-graphite">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`
                    relative w-20 h-20 overflow-hidden rounded-[12px] border-2 transition-all duration-200 cursor-pointer
                    ${activeImageIndex === i
                      ? 'border-crimson shadow-[0_0_12px_rgba(215,38,56,0.3)]'
                      : 'border-graphite hover:border-text-muted'
                    }
                  `}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Product Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Category */}
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="mt-2 text-[36px] font-extrabold leading-tight text-text-primary max-sm:text-[28px]">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-3">
              <ProductRating
                rating={product.rating}
                reviews={product.reviews}
                size="large"
              />
            </div>

            {/* Price */}
            <div className="mt-5">
              <ProductPrice
                price={product.price}
                originalPrice={product.originalPrice}
                size="large"
              />
            </div>

            {/* Description */}
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="mt-5 flex items-center gap-2">
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  isOutOfStock ? 'bg-red-500' : 'bg-emerald-500'
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isOutOfStock ? 'text-red-400' : 'text-emerald-400'
                }`}
              >
                {isOutOfStock ? 'Out of Stock' : 'In Stock'}
              </span>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-graphite" />

            {/* Quantity + Actions */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Quantity Selector */}
              <div className="flex items-center">
                <span className="mr-3 text-sm font-medium text-text-secondary">
                  Qty
                </span>
                <div className="flex items-center rounded-[12px] border border-graphite bg-charcoal overflow-hidden">
                  <button
                    onClick={decreaseQty}
                    disabled={isOutOfStock || quantity <= 1}
                    aria-label="Decrease quantity"
                    className="flex h-10 w-10 items-center justify-center text-text-secondary transition-colors hover:bg-graphite hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex h-10 w-12 items-center justify-center text-sm font-semibold text-text-primary border-x border-graphite">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQty}
                    disabled={isOutOfStock}
                    aria-label="Increase quantity"
                    className="flex h-10 w-10 items-center justify-center text-text-secondary transition-colors hover:bg-graphite hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-1 items-center gap-3">
                <Button
                  size="medium"
                  icon={cartAdded ? Check : ShoppingCart}
                  disabled={isOutOfStock}
                  onClick={handleAddToCart}
                  className="flex-1 sm:flex-none"
                >
                  {cartAdded ? 'Added!' : 'Add to Cart'}
                </Button>
                <button
                  onClick={handleAddToWishlist}
                  disabled={isOutOfStock}
                  aria-label={`${wishlistAdded ? 'Remove from' : 'Add to'} wishlist`}
                  className={`
                    flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border transition-all duration-200 cursor-pointer
                    disabled:opacity-40 disabled:cursor-not-allowed
                    ${wishlistAdded
                      ? 'border-crimson bg-crimson/10 text-crimson'
                      : 'border-graphite bg-charcoal text-text-muted hover:border-crimson hover:text-crimson'
                    }
                  `}
                >
                  <Heart
                    size={20}
                    className={wishlistAdded ? 'fill-crimson' : ''}
                  />
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: Shield, label: '2-Year Warranty' },
                { icon: Package, label: 'Easy Returns' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-xs text-text-muted"
                >
                  <Icon size={14} className="text-crimson" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Specifications ── */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Specifications
            </h2>
            <div className="overflow-hidden rounded-[18px] border border-graphite bg-charcoal">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div
                  key={key}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i !== Object.keys(product.specs).length - 1
                      ? 'border-b border-graphite'
                      : ''
                  }`}
                >
                  <span className="text-sm font-medium text-text-muted">
                    {specLabels[key] || key}
                  </span>
                  <span className="text-sm font-semibold text-text-primary text-right max-w-[60%]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <SectionTitle
              title="Related Products"
              subtitle="More gear you might like"
              align="left"
            />
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}

        {/* Back to Shop */}
        <div className="mt-12 text-center">
          <Link to="/shop">
            <Button variant="ghost" size="small" icon={ArrowLeft}>
              Back to Shop
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetails
