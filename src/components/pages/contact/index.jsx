import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000)
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' })
        showNotification('Message sent successfully. I will be in touch soon.')
      } else {
        const error = await response.json()
        showNotification(error.message || 'Could not send your message. Please try again.', 'error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      showNotification('Could not send your message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = 'w-full border border-[#20241e]/15 bg-[#f8f8f3] px-4 py-3 text-[#20241e] outline-none transition placeholder:text-[#92968b] focus:border-[#789631] focus:ring-2 focus:ring-[#789631]/15'

  return (
    <main className="portfolio-canvas text-[#20241e]">
      {notification && (
        <div role="status" className={`fixed right-4 top-20 z-50 max-w-sm border px-5 py-4 text-sm font-medium shadow-lg ${notification.type === 'success' ? 'border-[#789631]/30 bg-[#eef4d8] text-[#35451c]' : 'border-[#d16a4c]/30 bg-[#fae8e2] text-[#7a3020]'}`}>
          {notification.message}
        </div>
      )}

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">Contact</p>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">Have a good idea? <span className="text-[#789631]">Let&apos;s talk.</span></h1>
          <p className="max-w-md text-lg leading-8 text-[#62685e] lg:justify-self-end">Tell me what you&apos;re working on, where you&apos;re stuck, or what you&apos;d like to make. I&apos;ll get back to you as soon as I can.</p>
        </div>
      </section>

      <section className="border-y border-[#20241e]/10 bg-[#e9eae1]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <aside className="flex flex-col justify-between gap-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">Direct line</p>
              <h2 className="mb-7 font-display text-2xl font-semibold">A good conversation is a good start.</h2>
              <a href="mailto:hasnatsherzad56@gmail.com" className="break-all border-b border-[#789631] pb-1 text-lg font-medium text-[#41473d] transition hover:text-[#789631]">hasnatsherzad56@gmail.com</a>
              <div className="mt-5">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#858a7e]">Phone</p>
                <a href="tel:03555210724" className="text-lg font-medium text-[#41473d] transition hover:text-[#789631]">03555210724</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-[#20241e]/15 pt-5">
              <div><p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#858a7e]">Location</p><p className="m-0 font-medium">Gilgit, Pakistan</p></div>
              <div><p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#858a7e]">Availability</p><p className="m-0 font-medium">Open to projects</p></div>
            </div>
          </aside>

          <div className="border border-[#20241e]/10 bg-[#f8f8f3] p-5 sm:p-8">
            <div className="mb-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#789631]">Send a note</p>
              <h2 className="m-0 font-display text-2xl font-semibold">What are you thinking about?</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-[#41473d]">Your name</label>
                  <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-[#41473d]">Email address</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className={inputClass} placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-[#41473d]">Subject</label>
                <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="A little about the project" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-[#41473d]">Your message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-y`} placeholder="Tell me what you have in mind..." />
              </div>
              <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#20241e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#41493a] disabled:cursor-wait disabled:bg-[#73786e]">
                {isSubmitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact