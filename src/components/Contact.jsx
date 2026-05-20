import { useState } from 'react';
import SectionHeader from './SectionHeader';

const initialForm = { name: '', email: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please complete all fields before sending your message.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Unable to submit message at this time.');
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent successfully — I will respond shortly.' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to send message right now. Please reach out via email directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section" data-reveal>
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeader
            title="Ready to discuss your next digital product."
            description="Send a message if you're building something worth building, or want to explore frontend and product strategy together."
            small="Contact"
          />
          <p className="contact-note">
            For immediate questions, reach out on <a href="https://x.com/danieladeleye_" target="_blank" rel="noreferrer">X</a> or <a href="https://wa.me/2349063626099" target="_blank" rel="noreferrer">WhatsApp</a>.
          </p>
        </div>

        <div className="contact-form-card">
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <label>
              Full name
              <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
            </label>
            <label>
              Project details
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="What are you building? What's your vision?" required></textarea>
            </label>
            <button type="submit" className="button button-primary" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p aria-live="polite" className={`form-status ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
