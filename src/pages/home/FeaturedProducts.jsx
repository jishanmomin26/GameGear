import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { Container, SectionTitle, Card, Badge, Button } from '../../components/ui'
import { featuredProducts } from '../../data/products'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const ProductCard = ({ product }) => {
  const hasDiscount = product.originalPrice !== null
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <Card className="group relative flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-300 group-hover:bg-obsidian/20" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={product.badge}>
              {product.badge === 'sale' ? `-${discountPercent}%` : product.badge}
            </Badge>
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
        <h3 className="mt-1.5 text-base font-semibold text-text-primary leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-graphite'}
              />
            ))}
          </div>
          <span className="text-xs text-text-muted">
            ({product.reviews})
          </span>
        </div>

        {/* Price + Action */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <span className="text-lg font-bold text-text-primary">
              ${product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="ml-2 text-sm text-text-muted line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            size="small"
            className="px-3"
            icon={ShoppingCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="sr-only">Add to Cart</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <SectionTitle
            title="Featured Products"
            subtitle="Hand-picked gear for the ultimate gaming experience."
            align="left"
            className="mb-0"
          />
          <Link to="/shop">
            <Button variant="ghost" size="small">
              View All
            </Button>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default FeaturedProducts
