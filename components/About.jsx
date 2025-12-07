import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
            عن الشركة
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-accent mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with Parallax */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-xl overflow-visible"
            >
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/images/pexels-mikhail-nilov-6963857.jpg"
                  alt="شركة رائدة في مجال المحاسبة والضرائب"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-xl font-bold"
                  >
                    شركة رائدة في مجال المحاسبة والضرائب
                  </motion.p>
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-accent text-primary px-6 py-3 rounded-full shadow-xl font-bold text-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                22+
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-8 shadow-lg relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="text-5xl font-bold mb-2"
                >
                  22+
                </motion.div>
                <div className="text-xl font-semibold">سنة من الخبرة</div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-700 leading-relaxed"
            >
              <motion.p
                variants={itemVariants}
                className="text-lg"
              >
                بيت الضرائب هي شركة متخصصة في تقديم خدمات المحاسبة، الضرائب،
                والمراجعة للشركات والمؤسسات.
              </motion.p>
              <motion.p variants={itemVariants}>
               

تأسس مكتب الضرائب عام 2015 بخبرة أكثر من 22 عاماً. يقدم مكتبنا جميع الاستشارات 
المالية والمحاسبية وخدمات المراجعة والضرائب وانشاء وإعادة هيكلة الشركات المصرية والأجنبية.
              
              </motion.p>
              <motion.p variants={itemVariants}>
                نحن نؤمن بأن الشفافية والدقة في المعاملات المالية هي أساس نجاح
                أي عمل تجاري، ونسعى دائماً لتقديم أفضل الخدمات الاستشارية
                والمالية لعملائنا.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-custom rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  500+
                </motion.div>
                <div className="text-gray-600">عميل راضٍ</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-custom rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  50+
                </motion.div>
                <div className="text-gray-600">خبير محترف</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


