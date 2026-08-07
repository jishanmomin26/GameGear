import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import routes from './routes'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routes,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
