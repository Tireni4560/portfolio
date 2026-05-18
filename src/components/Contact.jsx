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
            title="Let’s build something meaningful together."
            description="Send a quick message, share your idea, or request a frontend product discussion."
            small="Contact"
          />
          <div className="contact-quicklinks">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">X / Twitter</a>
            <a href="mailto:hello@danieladeleye.com">hello@danieladeleye.com</a>
          </div>
        </div>

        <div className="contact-form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell me about your project."></textarea>
            </label>
            <button type="submit" className="button button-primary" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p className={`form-status ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
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
