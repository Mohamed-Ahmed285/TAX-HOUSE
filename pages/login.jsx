import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LoginNav from '../components/LoginNav'
import Footer from '../components/Footer'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would authenticate with backend
    console.log('Login attempt:', formData)
    alert('تسجيل الدخول (واجهة تجريبية)')
  }

  return (
    <div className="min-h-screen bg-gray-custom" dir="rtl">
      <LoginNav />
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">ض</span>
              </div>
              <h1 className="text-3xl font-bold text-primary mb-2">دخول الحساب</h1>
              <p className="text-gray-600">مرحباً بك مرة أخرى</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="mr-2 text-sm text-gray-600">تذكرني</span>
                </label>
                <Link
                  href="#"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                تسجيل الدخول
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                ليس لديك حساب؟{' '}
                <Link
                  href="/signup"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  سجل الآن
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}


