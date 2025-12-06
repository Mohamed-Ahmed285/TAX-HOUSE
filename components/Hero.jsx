import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  // Staggered animation for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
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
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-20"
      dir="rtl"
    >
      {/* --- Artistic Background Pattern --- */}
      
      {/* Geometric Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(199, 167, 108, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199, 167, 108, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated Diagonal Lines Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(199, 167, 108, 0.1) 10px,
            rgba(199, 167, 108, 0.1) 20px
          )`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(30, 77, 143, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(199, 167, 108, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(10, 34, 64, 0.2) 0%, transparent 70%)
            `,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => {
        const size = [60, 80, 100, 120][i % 4]
        const positions = [
          { top: '10%', right: '15%' },
          { top: '20%', left: '10%' },
          { bottom: '15%', right: '20%' },
          { bottom: '25%', left: '15%' },
          { top: '50%', right: '5%' },
          { top: '60%', left: '5%' },
          { bottom: '40%', right: '30%' },
          { bottom: '50%', left: '25%' },
        ]
        const colors = [
          'rgba(199, 167, 108, 0.08)',
          'rgba(30, 77, 143, 0.06)',
          'rgba(199, 167, 108, 0.1)',
          'rgba(30, 77, 143, 0.08)',
        ]
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              ...positions[i],
              background: colors[i % 4],
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        )
      })}

      {/* Artistic Wave Pattern */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-10"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="none"
      >
        <motion.path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              'M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z',
              'M0,60 Q300,40 600,60 T1200,60 L1200,120 L0,120 Z',
              'M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(199, 167, 108, 0.3)" />
            <stop offset="50%" stopColor="rgba(30, 77, 143, 0.2)" />
            <stop offset="100%" stopColor="rgba(199, 167, 108, 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top Wave Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-32 opacity-10 rotate-180"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="none"
      >
        <motion.path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,0 L0,0 Z"
          fill="url(#waveGradientTop)"
          animate={{
            d: [
              'M0,60 Q300,20 600,60 T1200,60 L1200,0 L0,0 Z',
              'M0,60 Q300,40 600,60 T1200,60 L1200,0 L0,0 Z',
              'M0,60 Q300,20 600,60 T1200,60 L1200,0 L0,0 Z',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <defs>
          <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(30, 77, 143, 0.2)" />
            <stop offset="50%" stopColor="rgba(199, 167, 108, 0.3)" />
            <stop offset="100%" stopColor="rgba(30, 77, 143, 0.2)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Orbs/Blobs */}
      <motion.div 
        className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Additional Accent Orb */}
      <motion.div 
        className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[90px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-accent rounded-bl-[100px]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-secondary rounded-tr-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Right Side: Text Content --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-right"
          >
       

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              حلول محاسبية <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent to-white">
                تصنع الفرق
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
            >
              نقدم خبرة 22 عاماً في المحاسبة والضرائب لمساعدة شركتك على النمو والامتثال واتخاذ القرارات المالية الصحيحة بدقة متناهية.
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

            {/* Stats Strip */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6"
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

          {/* --- Left Side: Modern Image Composition --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Decorative Frame Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tl-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary/30 rounded-br-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            />

            {/* The Main Image Container */}
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              {/* Animated Background Glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <Image
                src="/images/pexels-karola-g-4386373.jpg"
                alt="Financial Analysis"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Artistic Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 mix-blend-overlay"></div>
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-tr-full"></div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}