const Container = ({ children, className = '', as: Component = 'div' }) => {
  return (
    <Component
      className={`mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  )
}

export default Container

