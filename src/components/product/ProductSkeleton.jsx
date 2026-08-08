const ProductSkeleton = ({ count = 4, className = '' }) => {
  const colClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid gap-6 ${colClasses[count] || colClasses[4]} ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-[18px] border border-graphite bg-charcoal"
        >
          {/* Image skeleton */}
          <div className="aspect-square animate-pulse bg-graphite" />

          {/* Content skeleton */}
          <div className="p-5 space-y-3">
            {/* Category */}
            <div className="h-3 w-24 animate-pulse rounded-full bg-graphite" />
            {/* Title */}
            <div className="h-5 w-3/4 animate-pulse rounded-full bg-graphite" />
            {/* Rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <div
                  key={j}
                  className="h-3 w-3 animate-pulse rounded-full bg-graphite"
                />
              ))}
              <div className="ml-1 h-3 w-8 animate-pulse rounded-full bg-graphite" />
            </div>
            {/* Price row */}
            <div className="flex items-center justify-between pt-2">
              <div className="h-6 w-20 animate-pulse rounded-full bg-graphite" />
              <div className="h-8 w-8 animate-pulse rounded-full bg-graphite" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSkeleton
