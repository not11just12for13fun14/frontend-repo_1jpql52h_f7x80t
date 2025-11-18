import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50"></div>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-300/40 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-amber-200/50 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-pink-300/40 blur-3xl rounded-full" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 text-rose-600 bg-rose-100/80 border border-rose-200 px-3 py-1 rounded-full text-xs font-semibold">
              New season • Limited batches
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Gourmet Chocolate, crafted for moments of joy
            </h1>
            <p className="mt-5 text-slate-700 text-lg">
              Small-batch bars, truffles and drinking chocolate made with ethically sourced cacao and playful flavors.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#shop" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">
                Shop chocolates
              </a>
              <a href="#story" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition">
                Our story
              </a>
            </div>
          </motion.div>
        </div>

        {/* Spline scene */}
        <div className="lg:col-span-7 relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/30 shadow-2xl shadow-rose-300/30 bg-white/50 backdrop-blur-sm">
            <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Overlay gradient to blend */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
