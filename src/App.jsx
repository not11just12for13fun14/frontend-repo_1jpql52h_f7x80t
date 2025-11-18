import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      {/* Hero Section with Spline */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Products */}
      <Products />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Cocoa Bliss. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
