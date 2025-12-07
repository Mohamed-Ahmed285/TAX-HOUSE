import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SignupNav from '../components/SignupNav'
import Footer from '../components/Footer'
import { MdRemoveRedEye } from "react-icons/md";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة')
      return
    }
    
    // In production, this would register with backend
    console.log('Signup attempt:', formData)
    alert('تم التسجيل بنجاح (واجهة تجريبية)')
  }

  return (
    <div className="min-h-screen bg-gray-custom" dir="rtl">
      <SignupNav />
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
              <h1 className="text-3xl font-bold text-primary mb-2">إنشاء حساب جديد</h1>
              <p className="text-gray-600">انضم إلينا اليوم</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

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
                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                  اسم الشركة <span className="text-gray-400 text-sm">(اختياري)</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="اسم الشركة"
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
                  minLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="terms" className="mr-2 text-sm text-gray-600">
                  أوافق على{' '}
                  <Link href="#" className="text-primary hover:text-secondary">
                    الشروط والأحكام
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                إنشاء الحساب
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                لديك حساب بالفعل؟{' '}
                <Link
                  href="/login"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  تسجيل الدخول
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


