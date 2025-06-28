import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Leaf, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WeBuildToDeliver from "../components/WeBuildToDeliver.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "3-4 Month Delivery",
      description: "Turnkey farmhouses delivered in record time, helping you generate rental income faster."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Superior Strength",
      description: "Advanced prefabrication methods ensure structural integrity that exceeds traditional construction."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Green Certified",
      description: "All materials are environmentally sustainable, reducing carbon footprint by 40%."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Efficient",
      description: "EPS paneling and smart design deliver exceptional thermal performance."
    }
  ];

  const products = [
    {
      name: 'Cottages',
      image: 'https://i.pinimg.com/736x/b4/9b/d5/b49bd54f0807a9f6e8b71a1a385b08ae.jpg'
    },
    {
      name: 'Resorts',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Commercial',
      image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Residential',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const benefits = [
    "Faster construction timeline",
    "Cost-effective solutions",
    "Quality assurance guaranteed",
    "Sustainable materials",
    "Professional design consultation",
    "Complete turnkey delivery"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-construction-900 via-construction-800 to-primary-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://www.yankodesign.com/images/design_news/2025/03/gelephu-international-airport/gelephu_international_airport_yanko_design_02.jpg")'
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              HINDURA
              <span className="block text-primary-400">Construction</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Faster, stronger, greener, and more efficient prefabricated buildings. Revolutionizing construction with turnkey solutions delivered in 3-4 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-construction-900 transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-construction-900 mb-6">
              Why Choose Hindura?
            </h2>
            <p className="text-xl text-construction-600 max-w-3xl mx-auto">
              We deliver exceptional prefabricated buildings that combine speed, sustainability, and superior quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-construction-50 hover:bg-primary-50 transition-all duration-300 group shadow-sm"
              >
                <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl text-construction-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-construction-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Build To Deliver Section */}
      <section className="py-24 bg-construction-100">
        <div className="max-w-7xl mx-auto px-6">
          <WeBuildToDeliver />
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="">
        {/* <div className="max-w-7xl mx-auto px-6"> */}
        {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-construction-900">Our Products</h2>
            <p className="text-construction-600 text-lg mt-2">Cottages, Resorts, Commercial & Residential Units</p>
          </motion.div> */}

        <section className="w-full h-screen">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2000, // ⏱️ 2 seconds
              disableOnInteraction: false,
            }}
            className="w-full h-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-screen group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-center items-center text-white px-6 text-center">
                    <h3 className="text-5xl md:text-6xl font-bold mb-4">
                      {product.name}
                    </h3>
                    <p className="text-lg max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Discover our premium {product.name.toLowerCase()} construction solutions — stylish, durable, and delivered fast.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </section>

        {/* </div> */}
      </section>



      {/* Mission & Vision Section */}
      <section className="py-24 bg-construction-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-construction-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-construction-700 leading-relaxed">
                We aim to revolutionize farmhouse construction through speed, precision, and sustainability. By leveraging advanced prefabrication methods and integrating readymade wall panels, EPS Paneling, all made from green-certified materials.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-construction-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-construction-700 leading-relaxed">
                We deliver fully completed, turnkey farmhouses within 3–4 months. We aim to help property owners start generating rental income faster, combining speed, sustainability, and profitability in every project.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  <span className="text-construction-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modern prefabricated construction"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="font-bold text-3xl">3-4</div>
                <div className="text-sm">Months Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Join the construction revolution. Get your turnkey prefabricated building delivered in just 3-4 months with our proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-construction-50 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/process"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Learn Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
