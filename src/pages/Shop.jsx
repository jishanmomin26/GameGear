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

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

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
      return sorted.sort(
        (a, b) =>
          (b.badge === 'new' ? 1 : 0) -
          (a.badge === 'new' ? 1 : 0)
      )

    case 'featured':
    default:
      return sorted.sort(
        (a, b) =>
          (b.featured ? 1 : 0) -
          (a.featured ? 1 : 0)
      )
  }
}

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let results = [...products]

    if (activeCategory !== 'all') {
      results = results.filter(
        (p) => p.categorySlug === activeCategory
      )
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()

      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description &&
            p.description.toLowerCase().includes(q))
      )
    }

    return sortProducts(results, sortBy)
  }, [searchQuery, activeCategory, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setActiveCategory('all')
    setSortBy('featured')
  }

  const hasActiveFilters =
    searchQuery ||
    activeCategory !== 'all' ||
    sortBy !== 'featured'

  return (
    <section className="py-10 lg:py-16">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-crimson"
              >
                Home
              </Link>
            </li>

            <li>
              <ChevronRight size={12} />
            </li>

            <li className="font-semibold text-text-primary">
              Shop
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl uppercase">
            Shop
          </h1>

          <p className="mt-2 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Browse our full collection of premium gaming peripherals,
            accessories, and equipment.
          </p>
        </motion.div>

        {/* Controls Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mb-6 rounded-2xl border border-graphite bg-charcoal/80 p-3 shadow-sm sm:p-4"
        >
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full rounded-xl border border-graphite bg-obsidian py-2.5 pl-14 pr-10 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-crimson focus:outline-none"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-text-muted transition-colors hover:text-text-primary"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex w-full justify-end sm:w-auto">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex w-full items-center justify-between gap-2 rounded-xl border border-graphite bg-obsidian px-4 py-2.5 text-sm text-text-secondary transition-colors duration-200 hover:border-crimson hover:text-text-primary sm:w-auto"
                aria-label="Sort products"
              >
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={14} />

                  <span>
                    {
                      sortOptions.find(
                        (o) => o.value === sortBy
                      )?.label
                    }
                  </span>
                </div>

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    sortOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

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
                    className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-graphite bg-charcoal shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value)
                          setSortOpen(false)
                        }}
                        className={`
                          flex w-full items-center px-4 py-2.5 text-sm transition-colors duration-150
                          ${
                            sortBy === option.value
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

        {/* Category Chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mb-6 flex flex-wrap items-center gap-2"
        >
          {/* All */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`
              shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
              ${
                activeCategory === 'all'
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
                shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                ${
                  activeCategory === cat.slug
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
              className="ml-2 flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:text-crimson"
            >
              <X size={12} />
              Clear filters
            </button>
          )}
        </motion.div>

        {/* Product Count */}
        <div className="mb-6 flex items-center justify-between border-b border-graphite/60 pb-3">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
            {filteredProducts.length} Product
            {filteredProducts.length !== 1 ? 's' : ''} Found
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid
  products={filteredProducts}
  columns={4}
/>
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