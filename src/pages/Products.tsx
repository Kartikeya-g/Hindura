import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Layers, Zap, Shield, Leaf, Clock, CheckCircle } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const products = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Prefabricated Buildings",
      description: "Complete modular structures designed for residential and commercial use",
      features: [
        "Customizable designs",
        "Weather-resistant materials",
        "Quick assembly process",
        "Energy-efficient construction"
      ],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Precast Concrete",
      description: "High-strength concrete components manufactured in controlled environments",
      features: [
        "Superior durability",
        "Consistent quality",
        "Reduced construction time",
        "Cost-effective solution"
      ],
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Layers className="h-12 w-12" />,
      title: "EPS Paneling",
      description: "Expanded Polystyrene panels for exceptional insulation and structural integrity",
      features: [
        "Excellent thermal insulation",
        "Lightweight yet strong",
        "Moisture resistant",
        "Easy installation"
      ],
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Faster Construction",
      description: "Reduce project timelines by up to 60% compared to traditional methods"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Superior Quality",
      description: "Factory-controlled manufacturing ensures consistent, high-quality results"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and processes reduce environmental impact"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Efficient",
      description: "Advanced insulation and design optimize energy performance"
    }
  ];

  const specifications = [
    { label: "Delivery Time", value: "3-4 Months" },
    { label: "Quality Assurance", value: "ISO Certified" },
    { label: "Material Grade", value: "Green Certified" },
    { label: "Warranty", value: "10+ Years" },
    { label: "Customization", value: "Fully Customizable" },
    { label: "Installation", value: "Turnkey Solution" }
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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Innovative prefabricated solutions designed for faster, stronger,
              and more sustainable construction projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-construction-900 mb-6">
              Product Portfolio
            </h2>
            <p className="text-xl text-construction-600 max-w-3xl mx-auto">
              Comprehensive range of prefabricated building solutions tailored to meet diverse construction needs.
            </p>
          </motion.div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                      {product.icon}
                    </div>
                    <h3 className="font-display font-bold text-3xl text-construction-900">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-lg text-construction-700 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-construction-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
              Product Advantages
            </h2>
            <p className="text-xl text-construction-600 max-w-3xl mx-auto">
              Why our prefabricated solutions outperform traditional construction methods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="font-semibold text-xl text-construction-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-construction-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-construction-900">
                Technical Specifications
              </h2>
              <p className="text-lg text-construction-700 leading-relaxed">
                Our products meet the highest industry standards and are backed by comprehensive
                quality assurance processes. Every component is manufactured with precision and
                tested for durability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-construction-50 p-4 rounded-lg">
                    <div className="font-semibold text-construction-900">{spec.label}</div>
                    <div className="text-primary-600 font-medium">{spec.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction specifications"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Get a customized quote for your prefabricated building project.
              Our experts are ready to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-construction-50 transition-all duration-300 transform hover:scale-105">
                Request Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
                Download Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;