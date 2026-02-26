import { useState } from 'react'

// Contact Form - demonstrates form events
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  function handleReset() {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Form</h2>
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onFocus={() => setFocusedField('name')}
        onBlur={() => setFocusedField('')}
        className={focusedField === 'name' ? 'focused' : ''}
        placeholder="Your Name"
      />
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onFocus={() => setFocusedField('email')}
        onBlur={() => setFocusedField('')}
        className={focusedField === 'email' ? 'focused' : ''}
        placeholder="Your Email"
      />
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        onFocus={() => setFocusedField('message')}
        onBlur={() => setFocusedField('')}
        className={focusedField === 'message' ? 'focused' : ''}
        placeholder="Your Message"
        rows="4"
      />
      <div className="button-group">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
      </div>
      {submitted && <p className="success-message">✓ Form submitted successfully!</p>}
    </form>
  );
}
