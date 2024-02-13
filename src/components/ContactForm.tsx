import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., sending data to a server

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="bg-primary w-3/4 mx-auto py-12 px-12 rounded-3xl ">
      <div className="container space-y-6 flex flex-col justify-center items-center">
        <h2 className="section-title text-background text-4xl font-bold ">Get In Touch With Me</h2>
        <form className="contact-form space-y-10" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Fullname'
              value={formData.name}
              onChange={handleChange}
              required
              className='border-none w-full'
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder='E-mail'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder='Type your message here'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
