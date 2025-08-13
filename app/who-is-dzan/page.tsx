"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, Palette, Code, TrendingUp, Award, Mail, Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function WhoIsDzanPage() {
  const skills = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Visual identity, branding, and creative design solutions"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern websites and applications that convert"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance",
      description: "Data-driven strategies for business growth"
    }
  ]

  const achievements = [
    {
      number: "500+",
      label: "Projects Completed"
    },
    {
      number: "98%",
      label: "Client Satisfaction"
    },
    {
      number: "300%",
      label: "Average ROI"
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bgg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl z-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
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
              <Eye className="h-12 w-12 text-white" />
            </motion.div>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="inline-block px-6 py-2 bg-white/10 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Based in Europe | Bosnia & Herzegovina
              </motion.span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-black text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Who is DZAN?
            </motion.h1>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span 
                className="inline-block px-6 py-2 bg-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Design / Branding / Direction
              </motion.span>
            </motion.div>

            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I am a Creative Designer focused on optimizing visual elements to meet industry standards.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-white">{skill.icon}</div>
                  <span className="font-semibold text-white">{skill.title}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link href="https://www.instagram.com/dzandesigns/">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Start a Project →
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square w-full">
                <img
                  src="/dzan.png"
                  alt="Džan - Creative Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">My Story</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  I am Džan, a creative designer and digital strategist with a passion for transforming brands through innovative design solutions. My work focuses on optimizing graphic elements in accordance with industry standards.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  I have collaborated with musicians, digital creators, and brands, helping them enhance their visual identity and audience engagement. My approach combines creativity with data-driven insights to deliver results that exceed expectations.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Some of my significant collaborations are protected by NDA agreements and showcase the trust that major brands place in my work.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Design Software I Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Adobe Photoshop", icon: "/adobe/ps.png" },
                    { name: "Adobe Illustrator", icon: "/adobe/ai.png" },
                    { name: "Adobe InDesign", icon: "/adobe/id.png" },
                    { name: "Adobe XD", icon: "/adobe/ad.png" },
                    { name: "Figma", icon: "/adobe/figma.png" },
                    { name: "Canva Pro", icon: "/adobe/ps.png" }
                  ].map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <Image 
                        src={tool.icon} 
                        alt={tool.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-white font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">My Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak for themselves and showcase the impact of my work.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl font-black text-white mb-4">{achievement.number}</div>
                <div className="text-xl text-gray-300 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Let's Create Together</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Ready to transform your brand? Let's discuss your project and create something amazing together.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="https://www.instagram.com/dzandesigns/">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg font-semibold rounded-full"
                >
                  Start Your Project →
                </Button>
              </Link>
              <Link href="mailto:dzan.dizajn@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold rounded-full"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            <div className="flex justify-center space-x-8">
              <Link
                href="https://www.instagram.com/dzandesigns/"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
                <span>Instagram</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.behance.net/dzandesign"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span>Behance</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Image 
                src="/Logo 1.3.png" 
                alt="DZAN DESIGNS Logo" 
                width={300} 
                height={100} 
                className="mx-auto h-24 w-auto"
              />
            </div>
            <p className="text-gray-400 text-lg">© {new Date().getFullYear()} Dzan Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
