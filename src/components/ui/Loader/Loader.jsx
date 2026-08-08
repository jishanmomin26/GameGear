const sizes = {
  small: 'h-6 w-6 border-2',
  medium: 'h-10 w-10 border-[3px]',
  large: 'h-16 w-16 border-4',
}

const Loader = ({
  size = 'medium',
  fullScreen = false,
  className = '',
}) => {
  const spinner = (
    <div
      className={`
        animate-spin rounded-full
        border-crimson border-t-transparent
        ${sizes[size]}
        ${className}
      `}
    />
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 backdrop-blur-sm">
        {spinner}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-12">
      {spinner}
    </div>
  )
}

export default Loader
