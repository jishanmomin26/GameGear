import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Search,
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
  LayoutGrid,
} from 'lucide-react'
import { Container, SectionTitle, EmptyState } from '../components/ui'
import { ProductGrid } from '../components/product'
import { products, categories } from '../data/products'

// ── Sort options ──
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

// ── Sort logic ──
const sortProducts = (items, sortBy) => {
  const sorted = [...items]
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating)
    case 'newest':
      return sorted.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0))
    case 'featured':
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
}

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)

  // ── Filter + sort ──
  const filteredProducts = useMemo(() => {
    let results = [...products]

    // Category filter
    if (activeCategory !== 'all') {
      results = results.filter((p) => p.categorySlug === activeCategory)
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      )
    }

    // Sort
    return sortProducts(results, sortBy)
  }, [searchQuery, activeCategory, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setActiveCategory('all')
    setSortBy('featured')
  }

  const hasActiveFilters = searchQuery || activeCategory !== 'all' || sortBy !== 'featured'

  return (
    <section className="py-12 lg:py-16">
      <Container>
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-text-muted">
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-text-primary"
              >
                Home
              </Link>
            </li>
            <li><ChevronRight size={14} /></li>
            <li className="text-text-primary font-medium">Shop</li>
          </ol>
        </nav>

        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-[44px] font-extrabold leading-tight text-text-primary max-sm:text-[32px]">
            Shop
          </h1>
          <p className="mt-2 max-w-lg text-base text-text-muted">
            Browse our full collection of premium gaming peripherals, accessories, and equipment.
          </p>
        </motion.div>

        {/* ── Search + Sort Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full rounded-[12px] border border-graphite bg-charcoal py-3 pl-11 pr-10 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-crimson focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort Dropdown + Product Count */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-muted whitespace-nowrap">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </span>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 rounded-[12px] border border-graphite bg-charcoal px-4 py-2.5 text-sm text-text-secondary transition-colors duration-200 hover:border-crimson hover:text-text-primary cursor-pointer"
                aria-label="Sort products"
              >
                <SlidersHorizontal size={14} />
                <span className="hidden sm:inline">
                  {sortOptions.find((o) => o.value === sortBy)?.label}
                </span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown */}
              {sortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setSortOpen(false)}
                    aria-hidden="true"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-[12px] border border-graphite bg-charcoal shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value)
                          setSortOpen(false)
                        }}
                        className={`
                          flex w-full items-center px-4 py-2.5 text-sm transition-colors duration-150 cursor-pointer
                          ${sortBy === option.value
                            ? 'bg-crimson/10 text-crimson'
                            : 'text-text-secondary hover:bg-graphite hover:text-text-primary'
                          }
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Category Chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mb-10 flex flex-wrap items-center gap-2"
        >
          {/* "All" chip */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`
              rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer
              ${activeCategory === 'all'
                ? 'bg-crimson text-white shadow-[0_4px_16px_rgba(215,38,56,0.25)]'
                : 'border border-graphite bg-charcoal text-text-secondary hover:border-crimson hover:text-text-primary'
              }
            `}
          >
            <span className="flex items-center gap-1.5">
              <LayoutGrid size={14} />
              All
            </span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`
                rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer
                ${activeCategory === cat.slug
                  ? 'bg-crimson text-white shadow-[0_4px_16px_rgba(215,38,56,0.25)]'
                  : 'border border-graphite bg-charcoal text-text-secondary hover:border-crimson hover:text-text-primary'
                }
              `}
            >
              {cat.name}
            </button>
          ))}

          {/* Clear filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="ml-2 flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:text-crimson cursor-pointer"
            >
              <X size={12} />
              Clear filters
            </button>
          )}
        </motion.div>

        {/* ── Product Grid or Empty State ── */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} columns={4} />
        ) : (
          <EmptyState
            title="No products found"
            description="Try adjusting your search or filter to find what you're looking for."
            actionLabel="Clear Filters"
            onAction={clearFilters}
          />
        )}
      </Container>
    </section>
  )
}

export default Shop
