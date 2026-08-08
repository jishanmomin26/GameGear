import { useState } from 'react'

const ProductImage = ({
  src,
  alt,
  className = '',
  aspect = 'square',
}) => {
  const [loaded, setLoaded] = useState(false)

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: '',
  }

  return (
    <div className={`relative overflow-hidden bg-charcoal ${aspectClasses[aspect]} ${className}`}>
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-graphite" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          h-full w-full object-cover
          transition-transform duration-500
          group-hover:scale-110
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-300 group-hover:bg-obsidian/20" />
    </div>
  )
}

export default ProductImage
