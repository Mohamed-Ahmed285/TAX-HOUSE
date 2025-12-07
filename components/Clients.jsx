import { motion } from 'framer-motion'
import Image from 'next/image'

// Placeholder client logos - in production, these would be actual images
const clients = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: `عميل ${i + 1}`,
  logo: '/images/client.png',
}))

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230A2240' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            عملاؤنا
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mb-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            نفتخر بثقة عملائنا من الشركات والمؤسسات الكبرى
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -8,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gray-custom rounded-xl p-6 flex items-center justify-center min-h-[180px] hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative z-10 text-center w-full">
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-full h-full bg-white rounded-xl p-3 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  className="text-gray-700 text-sm font-medium group-hover:text-primary transition-colors duration-300"
                >
                  {client.name}
                </motion.p>
              </div>

              {/* Decorative Corner */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


