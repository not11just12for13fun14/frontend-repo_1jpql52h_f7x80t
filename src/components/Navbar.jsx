import { useState } from 'react'
import { Menu, X, Chocolate, ShoppingBag } from 'lucide-react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 via-pink-400 to-rose-500 shadow-lg shadow-rose-500/30"></div>
        <div className="absolute inset-[2px] rounded-[10px] bg-slate-900"></div>
        <div className="absolute inset-0 grid place-items-center text-amber-300">
          <Chocolate className="w-5 h-5" />
        </div>
      </div>
      <span className="font-semibold tracking-tight text-white text-lg">Cocoa Bliss</span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl px-4 py-3 shadow-lg shadow-slate-900/40">
          <div className="flex items-center justify-between">
            <Logo />

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#shop" className="text-slate-200 hover:text-white transition">Shop</a>
              <a href="#about" className="text-slate-200 hover:text-white transition">About</a>
              <a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-xl border border-white/10 transition">
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
              </button>
            </div>

            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg bg-white/10">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden mt-3 border-t border-white/10 pt-3 space-y-2">
              <a href="#shop" onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">Shop</a>
              <a href="#about" onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">Contact</a>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-xl border border-white/10 transition">
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
