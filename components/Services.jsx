import { motion } from 'framer-motion'

const services = [
  {
    title: 'خدمات المحاسبة',
    description: 'إدارة الحسابات والسجلات المالية بدقة عالية وفقاً للمعايير المحاسبية المعتمدة.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'خدمات المراجعة والضمان',
    description: 'مراجعة شاملة للقوائم المالية وضمان دقة المعلومات المالية المقدمة.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-green-500 to-green-600',
  },
  {
    title: 'إعادة هيكلة الأعمال والإعسار',
    description: 'مساعدة الشركات في إعادة هيكلة عملياتها المالية والتغلب على التحديات المالية.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    title: 'الخدمات الاستشارية المالية',
    description: 'استشارات مالية متخصصة لاتخاذ القرارات الاستراتيجية الصحيحة.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: 'from-yellow-500 to-yellow-600',
  },
  {
    title: 'خدمات الشركات',
    description: 'خدمات شاملة للشركات من التأسيس إلى الإدارة المالية اليومية.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-red-500 to-red-600',
  },
  {
    title: 'خدمات التدقيق الداخلي والرقابة',
    description: 'تدقيق داخلي شامل ورقابة على العمليات المالية والإدارية.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'خدمات الامتثال',
    description: 'ضمان الامتثال الكامل للأنظمة والقوانين المحلية والدولية.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    title: 'خدمات الضرائب',
    description: 'إعداد الإقرارات الضريبية والاستشارات الضريبية المتخصصة.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-orange-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-custom relative overflow-hidden" dir="rtl">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #0A2240 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, #1E4D8F 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, #C7A76C 0%, transparent 50%)`,
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
            خدماتنا
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
            نقدم مجموعة شاملة من الخدمات المالية والمحاسبية لتلبية احتياجات
            عملك
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Animated Background Gradient on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              {/* Icon Container with Animation */}
              <motion.div
                className="relative mb-4"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300">
                  <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </motion.div>

              <h3 className="text-xl font-bold text-primary mb-3 relative z-10 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                {service.description}
              </p>

              {/* Decorative Element */}
              <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 bg-accent/5 rounded-tl-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


