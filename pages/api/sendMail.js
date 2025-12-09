import nodemailer from 'nodemailer'

// Reuse transporter between invocations in dev to avoid reconnect overhead.
let cachedTransporter

const getTransporter = () => {
  if (cachedTransporter) return cachedTransporter

  cachedTransporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_PASSWORD
    }
  })

  return cachedTransporter
}

const validatePayload = ({ name, email, message }) => {
  if (!name || !email || !message) {
    throw new Error('الاسم والبريد الإلكتروني والرسالة مطلوبة')
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error('صيغة البريد الإلكتروني غير صحيحة')
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, companyName, message } = req.body || {}
    validatePayload({ name, email, message })

    const transporter = getTransporter()
    const toAddress = process.env.OUTLOOK_EMAIL

    if (!toAddress) {
      throw new Error('لم يتم ضبط بريد Outlook في المتغيرات البيئية')
    }

    // Build email content with optional fields
    let textContent = `الاسم: ${name}\nالبريد: ${email}\n`
    let htmlContent = `<p><strong>الاسم:</strong> ${name}</p><p><strong>البريد:</strong> ${email}</p>`
    
    if (phone) {
      textContent += `رقم الهاتف: ${phone}\n`
      htmlContent += `<p><strong>رقم الهاتف:</strong> ${phone}</p>`
    }
    
    if (companyName) {
      textContent += `اسم الشركة: ${companyName}\n`
      htmlContent += `<p><strong>اسم الشركة:</strong> ${companyName}</p>`
    }
    
    textContent += `\n${message}`
    htmlContent += `<p><strong>الرسالة:</strong><br/>${message}</p>`

    await transporter.sendMail({
      from: `"${name}" <${toAddress}>`,
      replyTo: email,
      to: toAddress,
      subject: `رسالة جديدة من ${name}${companyName ? ` - ${companyName}` : ''}`,
      text: textContent,
      html: htmlContent
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('sendMail error:', error)
    return res.status(400).json({ success: false, error: error.message || 'حدث خطأ أثناء الإرسال' })
  }
}

