import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update form data as the user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Create the mailto link when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mugahboniface@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-pink-50 py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-orange-500 text-center font-didact">Get In Touch</h2>
      
      {/* Contact Form */}
      <form className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-didact">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-didact">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 font-didact">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-blue-950 transition font-didact">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
