import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import routes from './routes'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routes,
  },
])

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  )
}

export default App

