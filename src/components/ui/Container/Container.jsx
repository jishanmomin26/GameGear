const Container = ({ children, className = '', as: Component = 'div' }) => {
  return (
    <Component
      className={`
        mx-auto w-full max-w-[1280px]
        px-[32px]
        max-lg:px-[24px]
        max-sm:px-[16px]
        ${className}
      `}
    >
      {children}
    </Component>
  )
}

export default Container
