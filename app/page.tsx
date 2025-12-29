'use client'

import { motion } from 'framer-motion'
import Hero3D from '@/components/Hero3D'
import InteractiveCard from '@/components/InteractiveCard'
import AnimatedText from '@/components/AnimatedText'
import ParallaxSection from '@/components/ParallaxSection'

export default function Home() {
  const services = [
    {
      title: 'Brand Strategy',
      description: 'We craft compelling brand narratives that resonate with your audience and drive meaningful connections.',
      icon: '🎯',
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven campaigns that amplify your reach and maximize ROI across all digital channels.',
      icon: '📱',
    },
    {
      title: 'Creative Design',
      description: 'Stunning visuals and immersive experiences that captivate and convert your target audience.',
      icon: '🎨',
    },
    {
      title: 'Web Development',
      description: 'Cutting-edge websites and applications built with modern technology and best practices.',
      icon: '💻',
    },
    {
      title: 'Content Creation',
      description: 'Engaging content that tells your story and builds lasting relationships with your customers.',
      icon: '✍️',
    },
    {
      title: 'Analytics & Insights',
      description: 'Deep analytics and actionable insights to optimize your marketing performance continuously.',
      icon: '📊',
    },
  ]

  const portfolioItems = [
    {
      title: 'Luxury Fashion Brand',
      category: 'Branding & Web',
      image: 'bg-gradient-to-br from-primary/30 to-dark',
    },
    {
      title: 'Tech Startup Launch',
      category: 'Digital Strategy',
      image: 'bg-gradient-to-br from-secondary/20 to-primary/20',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-dark to-primary/30',
    },
    {
      title: 'SaaS Product',
      category: 'Marketing Campaign',
      image: 'bg-gradient-to-br from-primary/20 to-secondary/10',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Hero3D />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <AnimatedText
              text="Elevating Brands Through"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            />
            <AnimatedText
              text="Immersive Digital Experiences"
              className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-8"
              delay={0.2}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl text-secondary/80 mb-12 max-w-3xl mx-auto"
            >
              We transform ideas into extraordinary digital experiences that captivate audiences and drive results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                className="px-8 py-4 bg-primary text-dark font-bold rounded-full text-lg hover:bg-primary/90 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Your Project</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                className="px-8 py-4 glass text-secondary font-bold rounded-full text-lg border-2 border-primary/50 hover:border-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
              Comprehensive marketing solutions tailored to elevate your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <InteractiveCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Featured Work</span>
            </h2>
            <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
              Showcasing our expertise through innovative projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <ParallaxSection key={item.title}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl h-96"
                >
                  <div className={`absolute inset-0 ${item.image} transition-transform duration-500 group-hover:scale-110`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="text-primary text-sm font-semibold mb-2 block">{item.category}</span>
                    <h3 className="text-3xl font-bold text-secondary mb-2">{item.title}</h3>
                    <motion.div
                      className="w-12 h-1 bg-primary mt-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  </div>
                  <motion.div
                    className="absolute top-8 right-8 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </motion.div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">About Us</span>
              </h2>
              <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
                TONG DIGITALS is a premium marketing agency specializing in creating immersive digital experiences that push the boundaries of creativity and innovation.
              </p>
              <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
                We combine cutting-edge technology with strategic thinking to deliver campaigns that not only look stunning but drive measurable results for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-secondary/70">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-secondary/70">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                <motion.div
                  className="text-9xl font-bold gradient-text opacity-20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  TD
                </motion.div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-2xl font-bold text-secondary">Innovation Driven</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Let&apos;s Work Together</span>
            </h2>
            <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
              Ready to elevate your brand? Get in touch and let&apos;s create something extraordinary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass rounded-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-secondary mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark/50 border border-secondary/20 rounded-lg text-secondary focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-dark/50 border border-secondary/20 rounded-lg text-secondary focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-secondary mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark/50 border border-secondary/20 rounded-lg text-secondary focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-dark/50 border border-secondary/20 rounded-lg text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-dark font-bold rounded-full text-lg hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-secondary/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">
              TONG DIGITALS
            </div>
            <div className="text-secondary/70 text-center md:text-right">
              <p>&copy; 2024 TONG DIGITALS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

