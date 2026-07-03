import React, { useState } from 'react';
import { send } from '@emailjs/browser';
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { motion } from 'framer-motion';
import logo from "../../assets/logo.png";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Contact service is not configured. Please check environment variables.');
      return;
    }

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`.trim(),
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      subject: formData.subject,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_name: 'Veerji Suthar',
      to_email: 'veeramdas530@gmail.com',
    };

    try {
      await send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', phone: '', subject: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitError('Failed to send message. Please try again later.');
    }
  };
  return (
    <section id="contact" className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold mb-10 mt-0 md:col-span-2"
        >
          Contact <span className="accent">Me</span>
        </motion.h2>

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-32 mb-6"
          />

          <p className="text-muted leading-relaxed mb-6">
           I love connecting with new people! Whether you have a project in mind, need a website, or just want to say hello, feel free to reach out.  
I aim to respond to all messages within 24 hours.  

I enjoy collaborating with clients to bring their ideas to life and create meaningful digital experiences.  
No project is too big or small from personal portfolios to business websites, I’m here to help.  
Your ideas matter, and I take pride in turning them into a polished, functional, and visually appealing reality.  
Let’s work together to build something amazing that makes an impact.

          </p>

          {/* CLICKABLE ICONS */}
          <div className="flex items-center space-x-6 text-xl text-muted">

            {/* Phone */}
            <a
              href="tel:+923403542395"
              className="hover:text-cyan-400 transition"
            >
              <FiPhoneCall />
            </a>

            {/* Email */}
            <a
              href="mailto:veerjisuthar430@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FiMail />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/veerji-suthar-0b943032a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedinIn />
            </a>

            {/* Map Location */}
            <a
              href="https://www.google.com/maps/place/Naval+Colony,+Karachi,+Pakistan/@24.9466332,66.9334176,16z/data=!3m1!4b1!4m6!3m5!1s0x3eb36b3d57aeb849:0xf6cdaeb8344f76b1!8m2!3d24.9453192!4d66.9377434!16s%2Fm%2F04jq3vh?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FiMapPin />
            </a>

            

          </div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit} 
          className="space-y-4 site-panel p-8 rounded-xl shadow-lg border border-subtle"
        >
          {isSubmitted && (
            <div className="p-3 bg-green-500/20 border border-green-500 text-green-500 rounded-md text-center">
              Message sent successfully!
            </div>
          )}
          {submitError && (
            <div className="p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-md text-center">
              {submitError}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className={`bg-transparent border ${errors.firstName ? 'border-red-500' : 'border-subtle'} p-3 rounded-md w-full focus:outline-none focus:border-accent`}
              />
              {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-transparent border border-subtle p-3 rounded-md w-full focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="bg-transparent border border-subtle p-3 rounded-md w-full focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-transparent border border-subtle p-3 rounded-md w-full focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className={`bg-transparent border ${errors.email ? 'border-red-500' : 'border-subtle'} p-3 rounded-md w-full focus:outline-none focus:border-accent`}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              rows="5"
              className={`bg-transparent border ${errors.message ? 'border-red-500' : 'border-subtle'} p-3 rounded-md w-full focus:outline-none focus:border-accent`}
            />
            {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="w-full btn-accent py-3 rounded-md hover:scale-[1.02] transition font-semibold"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
