import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';


import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Building2,
  MessageSquare,
  User,
  FileText
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
    };

    emailjs.send(
      'Hindura12345',       // Replace with your EmailJS service ID
      'template_ye7xce3',      // Replace with your EmailJS template ID
      templateParams,
      'i_SEdtC3DECuCM-Vx'        // Replace with your EmailJS public key
    )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email error:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98937-01528", "+91 98937-01528"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@hinduraconstruction.com", "projects@hinduraconstruction.com"],
      description: "Send us your project details"
    },
    // {
    //   icon: <MapPin className="h-6 w-6" />,
    //   title: "Address",
    //   details: ["123 Vijay Nagar", "Indore, 452010"],
    //   description: "Visit our office and showroom"
    // },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "We're here when you need us"
    }
  ];

  const projectTypes = [
    "Residential Farmhouse",
    "Commercial Building",
    "Industrial Facility",
    "Custom Project",
    "Consultation Only"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-construction-900 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your prefabricated building project? Get in touch with our
              experts for a free consultation and customized quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-construction-900 mb-4">
                  Get Your Free Quote
                </h2>
                <p className="text-lg text-construction-700">
                  Fill out the form below and we'll get back to you within 24 hours with
                  a detailed proposal for your project.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-construction-900 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-construction-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-construction-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-construction-900 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-construction-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-construction-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-construction-900 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-construction-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-construction-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-construction-900 mb-2">
                      Project Type *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-construction-400" />
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-construction-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-construction-900 mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-construction-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-construction-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-construction-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-construction-700">
                  We're here to help you bring your construction vision to life.
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-construction-50 p-6 rounded-2xl hover:bg-primary-50 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-600 text-white p-3 rounded-full flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl text-construction-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="text-construction-700 font-medium">
                              {detail}
                            </div>
                          ))}
                        </div>
                        <p className="text-construction-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              {/* <div className="bg-primary-600 text-white p-8 rounded-2xl">
                <h3 className="font-display font-bold text-2xl mb-6">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-bold text-3xl mb-1">3-4</div>
                    <div className="text-primary-100 text-sm">Months Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-3xl mb-1">500+</div>
                    <div className="text-primary-100 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-3xl mb-1">99%</div>
                    <div className="text-primary-100 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-3xl mb-1">24/7</div>
                    <div className="text-primary-100 text-sm">Support Available</div>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-construction-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-construction-900 mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-construction-700">
              See our prefabricated building samples and meet with our design team in person.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-96 rounded-2xl overflow-hidden"
          >
            <iframe
              title="Our Showroom Location - Goa"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Vijay%20Nagar%20Indore&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;