import { motion } from 'framer-motion'
import { Sparkles, CupSoda, CandyCane, IceCream2 } from 'lucide-react'

const features = [
  {
    icon: CupSoda,
    title: 'Silky Drinking Chocolate',
    desc: 'Rich, melt-in-your-mouth blends that whisk into a velvet cup.'
  },
  {
    icon: IceCream2,
    title: 'Playful Truffle Boxes',
    desc: 'Colorful assortments inspired by desserts and cafe classics.'
  },
  {
    icon: CandyCane,
    title: 'Limited Flavor Drops',
    desc: 'Seasonal collabs with fruity swirls, crunchy pearls and surprise textures.'
  },
  {
    icon: Sparkles,
    title: 'Ethically Sourced Cacao',
    desc: 'We partner directly with farms to ensure quality and fair practices.'
  },
]

export default function Features() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-20 w-40 h-40 bg-rose-200/60 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-20 w-56 h-56 bg-amber-200/60 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What makes our chocolate special</h2>
          <p className="mt-3 text-slate-600">Thoughtfully crafted treats, bright design, and joyful vibes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-amber-300 text-white shadow-lg">
                {<f.icon className="w-6 h-6" />}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
