'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
          subject: `Nouveau message de ${formData.name} — Kleston`,
          from_name: 'Kleston Contact Form',
          ...formData,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
        <CheckCircle size={56} className="text-[#FF5C00]" />
        <h3 className="font-condensed font-black text-3xl uppercase tracking-tight text-[#1A1A1A]">
          {t('success_title')}
        </h3>
        <p className="font-body text-[#4A4A4A] max-w-sm">{t('success_text')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#1A1A1A]">
          {t('field_nom')} *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="border border-[#B0B2B5] bg-[#F5F1EA] px-5 py-4 font-body text-sm text-[#1A1A1A] placeholder-[#767676] focus:border-[#FF5C00] focus:outline-none transition-colors"
          placeholder={t('field_nom')}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#1A1A1A]">
          {t('field_email')} *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border border-[#B0B2B5] bg-[#F5F1EA] px-5 py-4 font-body text-sm text-[#1A1A1A] placeholder-[#767676] focus:border-[#FF5C00] focus:outline-none transition-colors"
          placeholder={t('field_email')}
        />
      </div>

      {/* Company */}
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#1A1A1A]">
          {t('field_org')}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="border border-[#B0B2B5] bg-[#F5F1EA] px-5 py-4 font-body text-sm text-[#1A1A1A] placeholder-[#767676] focus:border-[#FF5C00] focus:outline-none transition-colors"
          placeholder={t('field_org')}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#1A1A1A]">
          {t('field_tel')}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="border border-[#B0B2B5] bg-[#F5F1EA] px-5 py-4 font-body text-sm text-[#1A1A1A] placeholder-[#767676] focus:border-[#FF5C00] focus:outline-none transition-colors"
          placeholder={t('field_tel')}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#1A1A1A]">
          {t('field_message')} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="border border-[#B0B2B5] bg-[#F5F1EA] px-5 py-4 font-body text-sm text-[#1A1A1A] placeholder-[#767676] focus:border-[#FF5C00] focus:outline-none transition-colors resize-none"
          placeholder={t('field_message_placeholder')}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="md:col-span-2 flex items-center gap-2 text-red-600 font-body text-sm">
          <AlertCircle size={16} />
          {t('error')}
        </div>
      )}

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group inline-flex items-center gap-2 bg-[#FF5C00] hover:bg-[#E05200] disabled:opacity-50 text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-colors duration-200"
        >
          {status === 'loading' ? t('sending') : t('submit')}
          <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </form>
  )
}
