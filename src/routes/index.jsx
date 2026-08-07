import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import ComponentShowcase from '../pages/dev/ComponentShowcase'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  // Development only — component showcase
  {
    path: '/dev/components',
    element: <ComponentShowcase />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
