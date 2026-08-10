const ProductPrice = ({
  price,
  originalPrice = null,
  size = 'default',
  className = '',
}) => {
  const hasDiscount =
    originalPrice !== null && originalPrice > price

  const discountPercent = hasDiscount
    ? Math.round((1 - price / originalPrice) * 100)
    : 0

  const sizeClasses = {
    small: {
      current: 'text-base font-bold',
      original: 'text-xs',
    },
    default: {
      current: 'text-lg font-bold',
      original: 'text-sm',
    },
    large: {
      current: 'text-2xl font-extrabold',
      original: 'text-base',
    },
  }

  const styles = sizeClasses[size]

  return (
    <div
      className={`flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}
    >
      <span
        className={`${styles.current} whitespace-nowrap text-text-primary`}
      >
        ${price.toFixed(2)}
      </span>

      {hasDiscount && (
        <>
          <span
            className={`${styles.original} whitespace-nowrap text-text-muted line-through`}
          >
            ${originalPrice.toFixed(2)}
          </span>

          <span className="whitespace-nowrap text-xs font-semibold text-crimson">
            -{discountPercent}%
          </span>
        </>
      )}
    </div>
  )
}

export default ProductPrice