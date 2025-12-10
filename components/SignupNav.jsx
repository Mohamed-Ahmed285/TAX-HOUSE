import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MdRemoveRedEye } from "react-icons/md";
import Image from "next/image"
export default function SignupNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'عن الشركة' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#clients', label: 'عملائنا' },
    { href: '#contact', label: 'تواصل معنا' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image 
                src="/logo.png"   
                alt="IAC Logo"
                width={200}
                height={200}
                className="object-cover"
              />
          </div>
    <span className="mr-3 text-xl font-bold text-primary">
      IAC
    </span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className=" md:flex items-center space-x-8 space-x-reverse">
          <Link
              href="/login"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}


