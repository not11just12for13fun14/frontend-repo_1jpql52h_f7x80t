import { motion } from 'framer-motion'

const products = [
  {
    name: 'Strawberry Crunch Bar',
    price: '$8',
    image: 'https://images.unsplash.com/photo-1654248568722-4cca7884204a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJhd2JlcnJ5JTIwQ3J1bmNoJTIwQmFyfGVufDB8MHx8fDE3NjM0NDgyNzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'bestseller'
  },
  {
    name: 'Hazelnut Praline Truffles',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1715663760578-f3081f3c7105?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXplbG51dCUyMFByYWxpbmUlMjBUcnVmZmxlc3xlbnwwfDB8fHwxNzYzNDQ4Mjc2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'new'
  },
  {
    name: 'Dark Cocoa Nibs Bar',
    price: '$9',
    image: 'https://images.unsplash.com/photo-1619615174792-a5edcfeafdfe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXJrJTIwQ29jb2ElMjBOaWJzJTIwQmFyfGVufDB8MHx8fDE3NjM0NDgyNzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Velvet Drinking Chocolate',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1671059954529-3c90fb11e19d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWx2ZXQlMjBEcmlua2luZyUyMENob2NvbGF0ZXxlbnwwfDB8fHwxNzYzNDQ4Mjc3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Products() {
  return (
    <section id="shop" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Shop chocolates</h2>
            <p className="mt-2 text-slate-600">Crafted in small batches, shipped fresh.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-rose-600 hover:text-rose-700">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {p.tag && (
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-white/90 border border-white/50 text-slate-900">{p.tag}</span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-slate-900 font-bold">{p.price}</span>
                </div>
                <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
