import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  PenTool,
  Factory,
  Truck,
  Wrench,
  CheckCircle,
  Clock,
  Users,
  Shield
} from 'lucide-react';

const Process = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const processSteps = [
    {
      step: "01",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Consultation & Planning",
      description: "Initial consultation to understand your requirements, site assessment, and project planning.",
      duration: "1-2 weeks",
      details: [
        "Site evaluation and analysis",
        "Design requirements discussion",
        "Budget and timeline planning",
        "Permit and regulatory guidance"
      ]
    },
    {
      step: "02",
      icon: <PenTool className="h-8 w-8" />,
      title: "Design & Engineering",
      description: "Custom design development with detailed engineering drawings and specifications.",
      duration: "2-3 weeks",
      details: [
        "Architectural design creation",
        "Structural engineering analysis",
        "3D modeling and visualization",
        "Final design approval"
      ]
    },
    {
      step: "03",
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "Precision manufacturing of all components in our controlled factory environment.",
      duration: "6-8 weeks",
      details: [
        "Quality-controlled production",
        "Component testing and validation",
        "Green-certified materials",
        "Progress monitoring and updates"
      ]
    },
    {
      step: "04",
      icon: <Truck className="h-8 w-8" />,
      title: "Delivery & Logistics",
      description: "Careful transportation and delivery of all prefabricated components to your site.",
      duration: "1 week",
      details: [
        "Coordinated delivery scheduling",
        "Professional handling and transport",
        "Site preparation verification",
        "Component inventory check"
      ]
    },
    {
      step: "05",
      icon: <Wrench className="h-8 w-8" />,
      title: "Assembly & Installation",
      description: "Expert on-site assembly and installation by our certified construction team.",
      duration: "2-4 weeks",
      details: [
        "Foundation and site preparation",
        "Component assembly and installation",
        "Systems integration and testing",
        "Quality assurance inspections"
      ]
    },
    {
      step: "06",
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Completion & Handover",
      description: "Final inspections, documentation, and project handover with warranty coverage.",
      duration: "1 week",
      details: [
        "Final quality inspections",
        "Documentation and warranties",
        "Client walkthrough and training",
        "Ongoing support setup"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Faster Timeline",
      description: "Complete project delivery in 3-4 months vs 8-12 months traditional construction"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Factory-controlled manufacturing ensures consistent quality and precision"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Dedicated project managers and certified installation professionals"
    }
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
              Our Process
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              "Every great prefab home build starts with a smart plan, and that's where our
              design and consultancy come in."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
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
              From Concept to Completion
            </h2>
            <p className="text-xl text-construction-600 max-w-3xl mx-auto">
              Our streamlined 6-step process ensures your prefabricated building project
              is delivered on time, within budget, and to the highest quality standards.
            </p>
          </motion.div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
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
                    <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-construction-900">
                        {step.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary-600">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-construction-700 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-construction-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-primary-100 p-8 rounded-2xl text-center">
                    <div className="text-primary-600 mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    <div className="font-display font-bold text-6xl text-primary-600 mb-2">
                      {step.step}
                    </div>
                    <div className="text-construction-700 font-medium">
                      Step {index + 1} of 6
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-px h-16 bg-primary-200"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Our Process Works
            </h2>
            <p className="text-xl text-construction-600 max-w-3xl mx-auto">
              Our proven methodology delivers superior results through careful planning,
              quality control, and expert execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-primary-600 mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-2xl text-construction-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-construction-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
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
              Project Timeline
            </h2>
            <p className="text-xl text-construction-600 max-w-3xl mx-auto">
              Complete project delivery in just 3-4 months from initial consultation to final handover.
            </p>
          </motion.div>

          <div className="bg-primary-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    {step.step}
                  </div>
                  <div className="font-semibold text-construction-900 text-sm mb-1">
                    {step.title}
                  </div>
                  <div className="text-primary-600 text-xs font-medium">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Total Timeline: 3-4 Months</span>
              </div>
            </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Let's begin with a consultation to understand your vision and
              create a customized plan for your prefabricated building project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-construction-50 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
                Download Process Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;