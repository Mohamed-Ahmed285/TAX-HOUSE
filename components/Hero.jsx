import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

   const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom bezier for premium feel
    }
  }

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#F8FAFC]" dir="rtl">
      
      {/* --- Dynamic Background --- */}
      {/* 1. The Slanted Blue Background */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-primary transform -skew-x-12 translate-x-20 origin-top z-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        {/* Subtle Pattern inside the blue */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* --- Text Content (Right) --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-right lg:max-w-[600px]"
          >
            {/* Modern Pill Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-accent font-bold text-sm tracking-wide">متاحون لاستقبال عملاء جدد</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              حلول محاسبية <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent to-white">
                تصنع الفرق
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-600 lg:text-blue-100 mb-10 leading-relaxed font-light">
              نجمع بين الخبرة المحاسبية التقليدية وأحدث التقنيات لنمنحك دقة تامة ورؤية استراتيجية واضحة لنمو أعمالك.
            </motion.p>

           <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 text-center"
              >
                ابدا استشارتك
              </Link>
              <Link
                href="#services"
                className="group px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>استكشف خدماتنا</span>
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
             <motion.div 
              variants={itemVariants}
              className="mt-12 pt-8 pb-8 border-t border-white/10 grid grid-cols-3 gap-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-white">22+</h3>
                <p className="text-sm text-gray-400">سنة خبرة</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-sm text-gray-400">عميل سعيد</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-sm text-gray-400">نسبة نجاح</p>
              </div>
            </motion.div>
          </motion.div>

          {/* --- Image/Visual (Left) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-xl"
          >
            {/* Decorative blob behind */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl z-0"></div> */}

            {/* Main Card Container */}
            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 transform transition-transform hover:scale-[1.01] duration-500">
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/pexels-karola-g-4386373.jpg" 
                  alt="Modern Accounting"
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating "Glass" Stats Card */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50 max-w-[240px]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+24%</span>
                </div>
                <p className="text-gray-500 text-xs mb-1">صافي الأرباح</p>
                <p className="text-2xl font-bold text-gray-900">245,000</p>
              </motion.div>

              {/* Decorative Circle Tag */}
              <div className="absolute top-6 right-6 bg-accent text-primary font-bold text-xs px-3 py-1 rounded-full shadow-lg">
                خبرة 22 عاماً
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}