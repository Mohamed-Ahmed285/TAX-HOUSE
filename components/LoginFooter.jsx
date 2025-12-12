import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaFacebook,FaInstagram } from 'react-icons/fa'
import { MdRemoveRedEye } from "react-icons/md";
import Image from "next/image"


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/#about', label: 'عن الشركة' },
    { href: '/#services', label: 'خدماتنا' },
    { href: '/#clients', label: 'عملائنا' },
    { href: '/#contact', label: 'تواصل معنا' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/share/17VmMfqfFY/' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/iac.accounting.tax/' },
  ]

  return (
    <footer className="bg-primary text-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">
       <div className="flex items-center">
    <div className="w-10 h-10 rounded-lg overflow-hidden my-[2.5px]">
      <Image 
        src="/logo-white.png"      
        alt="IAC Logo"
        width={40}
        height={40}
        className="object-cover"
      />
    </div>
  </div>
                </span>
              </div>
              <span className="mr-3 text-xl font-bold">IAC</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              شركة متخصصة في المحاسبة، الضرائب، والمراجعة. نساعد الشركات على
              النمو والامتثال واتخاذ القرار المالي الصحيح.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">معلومات التواصل</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>البريد الإلكتروني: mido@taxeshouse.com</li>
              <li>الهاتف: +010 XX XXX XXXX</li>
              <li>العنوان: شارع فلان الفلاني</li>
            </ul>
            <div className="flex space-x-4 space-x-reverse mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200 text-white"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>© {currentYear}  IAC. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}