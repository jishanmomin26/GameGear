import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components/layout'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-obsidian text-text-primary">
      {/* Navigation */}
      <Navbar />

      {/* Spacer for fixed navbar (72px height) */}
      <div className="h-[72px]" />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
