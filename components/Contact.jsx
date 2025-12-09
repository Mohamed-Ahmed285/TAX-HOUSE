import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear messages when user types
    if (error) setError('')
    if (success) setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'حدث خطأ أثناء إرسال الرسالة')
      }

      setSuccess('شكراً لتواصلك معنا! سنرد عليك قريباً.')
      setFormData({ name: '', email: '', phone: '', companyName: '', message: '' })
    } catch (err) {
      setError(err.message || 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-custom to-white relative overflow-hidden" dir="rtl">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
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
            تواصل معنا
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
            نحن هنا لمساعدتك. تواصل معنا اليوم للحصول على استشارة مجانية
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              
              <div className="space-y-6 relative z-10">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                  >
                    {error}
                  </motion.div>
                )}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm"
                  >
                    {success}
                  </motion.div>
                )}
                {[
                  { id: 'name', label: 'الاسم الكامل', type: 'text', placeholder: 'أدخل اسمك الكامل' },
                  { id: 'email', label: 'البريد الإلكتروني', type: 'email', placeholder: 'example@email.com' },
                  { id: 'phone', label: 'رقم الهاتف', type: 'tel', placeholder: '+010 XX XXX XXXX' },
                  { id: 'companyName', label: 'اسم الشركة', type: 'text', placeholder: 'اسم الشركة (اختياري)' },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <label htmlFor={field.id} className="block text-gray-700 font-medium mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required={field.id !== 'phone' && field.id !== 'companyName'}
                      disabled={loading}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    الرسالة
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    disabled={loading}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="اكتب رسالتك هنا..."
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.span
                    className="relative z-10"
                    initial={{ opacity: 1 }}
                    whileHover={{ x: loading ? 0 : -5 }}
                  >
                    {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </motion.span>
                  {!loading && (
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              className="bg-white rounded-xl p-8 shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-24 h-24 bg-accent/10 rounded-br-full"></div>
              <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">معلومات التواصل</h3>
              
              <div className="space-y-6 relative z-10">
                {[
                  { icon: 'email', title: 'البريد الإلكتروني', content: 'mido@taxeshouse.com' },
                  { icon: 'phone', title: 'رقم الهاتف', content: '+010 XX XXX XXXX' },
                  { icon: 'location', title: 'العنوان', content: 'شارع فلان الفلاني' },
                ].map((item, index) => (
                  <motion.div
                    key={item.icon}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="flex items-start space-x-4 space-x-reverse group cursor-pointer"
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon === 'email' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        )}
                        {item.icon === 'phone' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        )}
                        {item.icon === 'location' && (
                          <>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </>
                        )}
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-green-500 text-white rounded-xl p-6 shadow-lg hover:bg-green-600 transition-all duration-200 text-center font-bold text-lg relative overflow-hidden"
            >
              <motion.div
                className="flex items-center justify-center space-x-2 space-x-reverse relative z-10"
                whileHover={{ x: -5 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  💬
                </motion.span>
                <span>تواصل معنا عبر واتساب</span>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-green-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Map Placeholder */}
            <motion.div
              className="bg-gray-custom rounded-xl p-8 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg p-12 flex items-center justify-center min-h-[200px]">
                <motion.div
                  className="text-center text-gray-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">خريطة الموقع</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


