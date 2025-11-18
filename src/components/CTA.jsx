import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 left-1/3 w-72 h-72 bg-rose-200/60 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-amber-200/60 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <h3 className="text-3xl font-bold">Join the Cocoa Club</h3>
              <p className="mt-3 text-white/80">Get early access to flavor drops, behind-the-scenes, and sweet perks.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400" />
                <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-rose-50 transition">Subscribe</button>
              </form>
              <p className="mt-2 text-xs text-white/50">We care about your privacy. Unsubscribe anytime.</p>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1613376023730-0af1e23147dc?q=80&w=1200&auto=format&fit=crop"
                alt="Chocolate assortment"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
