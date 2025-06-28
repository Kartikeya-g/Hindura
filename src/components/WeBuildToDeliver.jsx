import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Clock, Play, Pause, Volume2, VolumeX, X, } from 'lucide-react';
import ConstructionVideo from './ConstructionVideo';

const WeBuildToDeliver = () => {

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-construction-900 mb-6">
                WE BUILD
                <span className="block text-primary-600">TO DELIVER</span>
              </h2>
              <p className="text-xl text-construction-700 leading-relaxed mb-8">
                Crafting modular homes matching up your aesthetics and quality assurance.
                Now homes are not just to build, they are built to deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Shield className="h-5 w-5 text-white" />,
                  title: "Quality Assurance",
                  desc: "Every structure meets the highest standards of craftsmanship"
                },
                {
                  icon: <Star className="h-5 w-5 text-white" />,
                  title: "Aesthetic Excellence",
                  desc: "Beautiful designs that match your vision and style"
                },
                {
                  icon: <Clock className="h-5 w-5 text-white" />,
                  title: "Timely Delivery",
                  desc: "On-time completion with guaranteed satisfaction"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-construction-50 rounded-xl">
                  <div className="bg-primary-600 p-2 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-construction-900 mb-1">{item.title}</h3>
                    <p className="text-construction-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}          >
            <ConstructionVideo />
            {/* <img
              src="https://i.pinimg.com/736x/94/9b/6b/949b6bf9921ee07d4b0a27be207d442d.jpg"
              alt="Modular construction process"
              className="rounded-3xl shadow-2xl w-full h-[22rem] object-cover"
            /> */}

            {/* Commented video section for future use */}
            {/*
            <div className="relative bg-construction-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-construction-800 to-primary-900 flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 inline-flex hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="h-16 w-16 text-white ml-2" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                      See How We Build to Deliver
                    </h3>
                    <p className="text-white/80 text-lg">Watch our construction process in action</p>
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* Decorative Circles */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-construction-200 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeBuildToDeliver;
