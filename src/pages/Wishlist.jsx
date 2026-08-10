import { Link, useNavigate } from 'react-router-dom'
import { Heart, ChevronRight } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'
import { Container, EmptyState } from '../components/ui'
import { ProductGrid } from '../components/product'

const Wishlist = () => {
  const navigate = useNavigate()
  const { wishlist, totalItems } = useWishlist()

  return (
    <section className="py-10 lg:py-16 text-text-primary">
      <Container>
        {/* Breadcrumb */}
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
            <li className="text-text-primary font-semibold">Wishlist</li>
          </ol>
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
    </section>
  )
}

export default Wishlist
