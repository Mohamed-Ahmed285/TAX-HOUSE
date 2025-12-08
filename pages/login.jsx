import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LoginNav from '../components/LoginNav'
import Footer from '../components/Footer'
import { MdRemoveRedEye } from "react-icons/md"
import { loginUser } from '../lib/auth'

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user types
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await loginUser({ email: formData.email, password: formData.password })
      // Redirect to home page after successful login
      router.push('/')
    } catch (err) {
      // Handle Firebase auth errors with user-friendly Arabic messages
      let errorMessage = 'حدث خطأ أثناء تسجيل الدخول'
      
      if (err.code === 'auth/user-not-found') {
        errorMessage = 'البريد الإلكتروني غير مسجل'
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = 'كلمة المرور غير صحيحة'
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'صيغة البريد الإلكتروني غير صحيحة'
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'تم تجاوز عدد المحاولات المسموح بها. يرجى المحاولة لاحقاً'
      } else if (err.message) {
        errorMessage = err.message
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
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
                <span className="text-white font-bold text-2xl"><MdRemoveRedEye /></span>
              </div>
              <h1 className="text-3xl font-bold text-primary mb-2">دخول الحساب</h1>
              <p className="text-gray-600">مرحباً بك مرة أخرى</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                >
                  {error}
                </motion.div>
              )}

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
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                disabled={loading}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
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


