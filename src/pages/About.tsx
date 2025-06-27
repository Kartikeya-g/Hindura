import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge prefabrication technology and sustainable building methods."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Uncompromising commitment to excellence in every aspect of our construction and delivery process."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sustainability",
      description: "Environmental responsibility drives our choice of materials and construction methodologies."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnership",
      description: "Building lasting relationships with clients through transparency, reliability, and exceptional service."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "3-4", label: "Months Delivery" },
    { number: "40%", label: "Carbon Reduction" },
    { number: "99%", label: "Client Satisfaction" }
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
              About Hindura Construction
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of construction with innovative prefabricated solutions 
              that deliver speed, quality, and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-construction-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-construction-700 leading-relaxed">
                We deliver fully completed, turnkey farmhouses within the time span of 3–4 months. 
                We aim to help property owners start generating rental income faster, combining speed, 
                sustainability, and profitability in every project.
              </p>
              <p className="text-lg text-construction-700 leading-relaxed">
                Our commitment extends beyond construction – we're building a sustainable future 
                where efficiency meets environmental responsibility, creating homes that are not 
                just built to last, but built to deliver exceptional value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-construction-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-construction-700 leading-relaxed">
                We aim to revolutionize farmhouse construction through speed, precision, and sustainability. 
                By leveraging advanced prefabrication methods and integrating readymade wall panels, 
                EPS Paneling, all made from green-certified materials.
              </p>
              <p className="text-lg text-construction-700 leading-relaxed">
                We envision a world where construction is no longer constrained by traditional timelines 
                and environmental concerns, but instead accelerated by innovation and guided by 
                sustainable practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-construction-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-construction-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-construction-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl text-construction-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-construction-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction team working"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-construction-900">
                Building More Than Structures
              </h2>
              <p className="text-lg text-construction-700 leading-relaxed">
                "Every great prefab home build starts with a smart plan, and that's where our 
                design and consultancy come in." We believe that exceptional construction begins 
                with exceptional planning and continues through every phase of delivery.
              </p>
              <p className="text-lg text-construction-700 leading-relaxed">
                Our approach combines traditional craftsmanship values with modern technology, 
                ensuring that each project not only meets but exceeds expectations. We're not 
                just building homes – we're crafting modular solutions that match your aesthetics 
                and quality assurance standards.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-600">
                <p className="text-construction-800 font-medium italic">
                  "Homes are not just to build, they are built to deliver exceptional value, 
                  comfort, and sustainability for generations to come."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
