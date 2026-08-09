import { Link, useNavigate } from 'react-router-dom'
import { Heart, ChevronRight } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'
import { Container, EmptyState } from '../components/ui'
import { ProductGrid } from '../components/product'

const Wishlist = () => {
  const navigate = useNavigate()
  const { wishlist, totalItems } = useWishlist()

  return (
    <main className="min-h-screen pt-24 pb-16 bg-obsidian text-text-primary">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
          <Link to="/" className="transition-colors hover:text-crimson">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="transition-colors hover:text-crimson">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-text-primary font-semibold">Wishlist</span>
        </nav>

        {/* Heading */}
        <div className="mb-10 flex items-center justify-between border-b border-graphite pb-5">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Your Wishlist</h1>
            <p className="mt-1 text-sm text-text-muted">
              Keep eye on gears you want to add to your setup
            </p>
          </div>
          {wishlist.length > 0 && (
            <span className="rounded-full bg-charcoal border border-graphite px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {wishlist.length === 0 ? (
          <EmptyState
            icon={Heart}
            title="Wishlist is Empty"
            description="Explore our premium gaming gear catalog and save products for later."
            actionLabel="Discover Products"
            onAction={() => navigate('/shop')}
          />
        ) : (
          <ProductGrid products={wishlist} columns={4} />
        )}
      </Container>
    </main>
  )
}

export default Wishlist
