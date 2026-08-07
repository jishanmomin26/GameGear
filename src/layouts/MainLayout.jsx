import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-obsidian text-text-primary">
      {/* Navbar — Milestone 3 */}
      <header id="main-header" />

      {/* Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer — Milestone 3 */}
      <footer id="main-footer" />
    </div>
  )
}

export default MainLayout
