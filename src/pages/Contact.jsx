import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  Headphones,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react'
import { Container, Button, Card } from '../components/ui'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'support@gamegear.gg',
    description: 'We aim to respond to all inquiries within 2 hours.',
    action: 'mailto:support@gamegear.gg',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (800) 555-GEAR',
    description: 'Toll-free customer & technical support line.',
    action: 'tel:+18005554327',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    value: '100 Cyberpunk Way',
    description: 'Silicon Valley, CA 94025, United States',
    action: null,
  },
  {
    icon: Clock,
    title: 'Support Hours',
    value: 'Mon - Fri: 9am - 8pm EST',
    description: 'Weekend ticket response within 24 hours.',
    action: null,
  },
]

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedSuccess, setSubmittedSuccess] = useState(false)

  const validateField = (name, value) => {
    let error = ''
    const trimmed = value.trim()

    if (!trimmed) {
      if (name === 'name') error = 'Full name is required.'
      if (name === 'email') error = 'Email address is required.'
      if (name === 'subject') error = 'Subject is required.'
      if (name === 'message') error = 'Message is required.'
    } else {
      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(trimmed)) {
          error = 'Please enter a valid email address.'
        }
      }
      if (name === 'message' && trimmed.length < 10) {
        error = 'Message must be at least 10 characters long.'
      }
    }
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error dynamically if valid
    if (errors[name]) {
      const fieldErr = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: fieldErr }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const fieldErr = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: fieldErr }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key])
      if (err) newErrors[key] = err
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simulate submission delay
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmittedSuccess(true)
      setFormData(initialFormData)
      setErrors({})
    }, 600)
  }

  return (
    <section className="py-10 lg:py-16 text-text-primary">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-crimson">
                Home
              </Link>
            </li>
            <li><ChevronRight size={12} /></li>
            <li className="text-text-primary font-semibold">Contact Support</li>
          </ol>
        </nav>

        {/* ── 1. Contact Hero ── */}
        <div className="mb-12 border-b border-graphite pb-8">
          <span className="inline-block rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-crimson">
            Get In Touch
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-text-primary">
            We&apos;re Here to Help
          </h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-text-muted">
            Have questions about gear specifications, warranty claims, order status, or need expert equipment advice? Our dedicated team of gaming specialists is ready to assist.
          </p>
        </div>

        {/* ── Main Layout: Info + Form ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column — Contact Info & Visual Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-text-primary">
                Contact Information
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                Reach out to our team directly through any channel below.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info) => {
                const IconComp = info.icon
                return (
                  <Card
                    key={info.title}
                    className="flex items-start gap-4 p-5 transition-colors hover:border-crimson/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-graphite bg-obsidian text-crimson">
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                        {info.title}
                      </h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="mt-0.5 block text-base font-semibold text-text-primary transition-colors hover:text-crimson"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-base font-semibold text-text-primary">
                          {info.value}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-text-muted">
                        {info.description}
                      </p>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Visual Panel / Support Guarantee */}
            <Card className="relative overflow-hidden p-6 border-crimson/20 bg-gradient-to-br from-charcoal to-obsidian">
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-crimson/10 blur-[40px]" />
              <div className="flex items-center gap-3">
                <Headphones className="text-crimson" size={24} />
                <h3 className="text-base font-bold text-text-primary">
                  GameGear Support Guarantee
                </h3>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5 text-xs text-text-muted">
                <li className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span>24/7 Ticketing & Technical Hardware Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-gold shrink-0" />
                  <span>Average initial response time under 2 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-crimson shrink-0" />
                  <span>Direct contact with experienced hardware specialists</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 border-graphite bg-charcoal">
              <h2 className="text-2xl font-extrabold text-text-primary">
                Send Us a Message
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                Fill out the form below and we will get back to you shortly.
              </p>

              {/* Success Notification */}
              <AnimatePresence>
                {submittedSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 flex items-start gap-3 rounded-[12px] border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400"
                    role="status"
                  >
                    <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold">
                        Message Sent Successfully!
                      </p>
                      <p className="mt-0.5 text-xs text-emerald-300/80">
                        Thank you for reaching out. A GameGear specialist has received your message and will respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmittedSuccess(false)}
                        className="mt-3 text-xs font-semibold text-emerald-400 underline underline-offset-2 hover:text-white cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-text-secondary"
                    >
                      Full Name <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Alex Mercer"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`mt-2 w-full rounded-[12px] border bg-obsidian px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 ${
                        errors.name
                          ? 'border-crimson focus:border-crimson focus:ring-crimson'
                          : 'border-graphite focus:border-crimson focus:ring-crimson'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-crimson" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-text-secondary"
                    >
                      Email Address <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. alex@example.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`mt-2 w-full rounded-[12px] border bg-obsidian px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-crimson focus:border-crimson focus:ring-crimson'
                          : 'border-graphite focus:border-crimson focus:ring-crimson'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-crimson" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-text-secondary"
                  >
                    Subject <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Gear Advice / Order Inquiry"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={`mt-2 w-full rounded-[12px] border bg-obsidian px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 ${
                      errors.subject
                        ? 'border-crimson focus:border-crimson focus:ring-crimson'
                        : 'border-graphite focus:border-crimson focus:ring-crimson'
                    }`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-crimson" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-text-secondary"
                  >
                    Message <span className="text-crimson">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="How can our support team assist you today?"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`mt-2 w-full rounded-[12px] border bg-obsidian px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 resize-none ${
                      errors.message
                        ? 'border-crimson focus:border-crimson focus:ring-crimson'
                        : 'border-graphite focus:border-crimson focus:ring-crimson'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-crimson" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mt-2">
                  <Button
                    type="submit"
                    size="large"
                    icon={Send}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto justify-center cursor-pointer"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
