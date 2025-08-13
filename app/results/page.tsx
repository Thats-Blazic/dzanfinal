"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, BarChart3, Target, Award, Users, DollarSign, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ResultsPage() {
  const caseStudies = [
    {
      title: "YouTube Thumbnail Success",
      image: "/results/1.jpg",
      description: "Our thumbnail designs helped increase CTR by 300% and views by 450% for a major YouTube channel.",
      metrics: [
        { label: "Click-Through Rate", value: "+300%", icon: <Target className="h-5 w-5" /> },
        { label: "Video Views", value: "+450%", icon: <Users className="h-5 w-5" /> },
        { label: "Channel Growth", value: "+200%", icon: <TrendingUp className="h-5 w-5" /> }
      ]
    },
    {
      title: "Website Performance Boost",
      image: "/results/2.jpg",
      description: "Modern website redesign that revolutionized user experience and drove significant business growth.",
      metrics: [
        { label: "Conversion Rate", value: "+180%", icon: <TrendingUp className="h-5 w-5" /> },
        { label: "Page Load Speed", value: "-60%", icon: <Zap className="h-5 w-5" /> },
        { label: "Sales Increase", value: "+320%", icon: <DollarSign className="h-5 w-5" /> }
      ]
    },
    {
      title: "Brand Identity Transformation",
      image: "/results/3.jpg",
      description: "Complete visual identity redesign that transformed brand perception and market position.",
      metrics: [
        { label: "Brand Recognition", value: "+400%", icon: <Target className="h-5 w-5" /> },
        { label: "Customer Engagement", value: "+500%", icon: <Users className="h-5 w-5" /> },
        { label: "Market Share", value: "+250%", icon: <Award className="h-5 w-5" /> }
      ]
    },
    {
      title: "Social Media Campaign",
      image: "/results/4.jpg",
      description: "Comprehensive social media campaign that exceeded all expectations and drove real results.",
      metrics: [
        { label: "Lead Generation", value: "+600%", icon: <Users className="h-5 w-5" /> },
        { label: "ROI", value: "+450%", icon: <BarChart3 className="h-5 w-5" /> },
        { label: "Brand Awareness", value: "+300%", icon: <Target className="h-5 w-5" /> }
      ]
    }
  ]

  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and performance reporting with actionable insights."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Performance Tracking",
      description: "Real-time monitoring of key performance indicators and conversion metrics."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Strategy",
      description: "Data-driven strategies for sustainable business growth and market expansion."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Results Optimization",
      description: "Continuous optimization to maximize ROI and achieve exceptional performance."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image 
                src="/Logo 1.3.png" 
                alt="DZAN DESIGNS Logo" 
                width={180} 
                height={60} 
                className="h-16 w-auto"
              />
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2 border-white/20 text-black hover:bg-white hover:text-black">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <TrendingUp className="h-12 w-12 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8">
              Results & Performance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We don't just create beautiful designs and websites - we deliver measurable results that drive real business growth and success. See the numbers that prove our impact.
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-white">{service.icon}</div>
                  <span className="font-semibold text-white">{service.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Real Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the actual results we've delivered for our clients. These numbers don't lie.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`relative overflow-hidden rounded-3xl shadow-2xl ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-6">{study.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">{study.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        className="text-center p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: metricIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                          {metric.icon}
                        </div>
                        <div className="text-3xl font-black text-white mb-2">{metric.value}</div>
                        <div className="text-sm text-gray-300 font-medium">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-black to-white/5 backdrop-blur-md border border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Our Impact</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Numbers don't lie. Here's what we've achieved for our clients over the years.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Projects Completed", icon: <Award className="h-8 w-8" /> },
              { number: "98%", label: "Client Satisfaction", icon: <Users className="h-8 w-8" /> },
              { number: "300%", label: "Average ROI", icon: <TrendingUp className="h-8 w-8" /> },
              { number: "24/7", label: "Support Available", icon: <Zap className="h-8 w-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-4 text-white">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Ready to See Results?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Let's work together to achieve extraordinary results and transform your business with data-driven strategies.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="https://www.instagram.com/dzandesigns/">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Back to Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 