"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, Play, TrendingUp, Target, Users, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function GraphicDesignPage() {
  const thumbnailProjects = [
    {
      title: "TRKE SA MISOM NA NIRBURGINGU",
      category: "YouTube Thumbnails",
      image: "/THUMB/DzanDizajn_Vlog_A.jpg",
      description: "Modern vlog branding with dynamic visual elements and engaging typography.",
      features: ["Thumbnail Design", "Social Media", "Typography", "Brand Guidelines"]
    },
    {
      title: "POV VOZNJA I NOVI PROJEKAT",
      category: "YouTube Thumbnails",
      image: "/THUMB/DzanDizajn_Vlog_B.png",
      description: "Alternative vlog design with different visual approach and styling.",
      features: ["Digital Design", "Social Media", "Typography", "Visual Identity"]
    },
    {
      title: "KAKO SAM ZARADIO PRVIH 1000$ OD VLOGA",
      category: "YouTube Thumbnails",
      image: "/THUMB/VLOG-STY.jpg",
      description: "Stylish vlog thumbnail design with modern aesthetics and clean layout.",
      features: ["Thumbnail Design", "Modern Layout", "Typography", "Visual Appeal"]
    },
    {
      title: "LEARN PREMIER PRO IN 27 MINUTES!",
      category: "YouTube Thumbnails",
      image: "/THUMB/fix23.png",
      description: "Clean and professional brand identity with modern design principles.",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    {
      title: "THE CRAZIEST CIRCUS PERFORMANCE",
      category: "YouTube Thumbnails",
      image: "/THUMB/circus.png",
      description: "Playful and creative design with vibrant colors and dynamic elements.",
      features: ["Illustration", "Color Design", "Creative Layout", "Visual Identity"]
    },
    {
      title: "KRALJEVSKI TRETMAN",
      category: "YouTube Thumbnails",
      image: "/THUMB/gastro dzan2.png",
      description: "Warm and inviting restaurant branding with custom illustrations and typography.",
      features: ["Logo Design", "Menu Design", "Illustrations", "Brand Identity"]
    },
    {
      title: "NOVOGODIŠNJI SPECIJAL",
      category: "YouTube Thumbnails",
      image: "/THUMB/redesign.png",
      description: "Complete brand redesign with modern aesthetics and improved visual hierarchy.",
      features: ["Brand Redesign", "Logo Design", "Typography", "Visual Identity"]
    },
    {
      title: "Best Sushi in Town 🍣",
      category: "YouTube Thumbnails",
      image: "/THUMB/sushi232.png",
      description: "Elegant sushi restaurant branding with sophisticated design elements.",
      features: ["Logo Design", "Packaging", "Menu Design", "Brand Identity"]
    },
    {
      title: "Sitdown intervju sa posebnom pričom",
      category: "YouTube Thumbnails",
      image: "/THUMB/DzanDizajn_Sitdown_A.png",
      description: "Professional sitdown branding with clean and modern design elements.",
      features: ["Logo Design", "Brand Identity", "Typography", "Visual Design"]
    },
    {
      title: "Clipzy Club – How I Made $200,000",
      category: "YouTube Thumbnails",
      image: "/THUMB/clipzy copy.png",
      description: "Creative and innovative design with unique visual elements and styling.",
      features: ["Creative Design", "Illustration", "Typography", "Visual Identity"]
    },
    {
      title: "Helicopter View – Insane Shots 🚁",
      category: "YouTube Thumbnails",
      image: "/THUMB/from helicopter.png",
      description: "Aerial photography design with stunning visual composition and layout.",
      features: ["Photography", "Layout Design", "Visual Composition", "Creative Design"]
    },
    {
      title: "Portfolio Design That Wins Clients",
      category: "YouTube Thumbnails",
      image: "/THUMB/za portf2.png",
      description: "Professional portfolio design showcasing creative work and projects.",
      features: ["Portfolio Design", "Layout", "Typography", "Visual Presentation"]
    },
    {
      title: "KUPIO SAM NOVI STAN",
      category: "YouTube Thumbnails",
      image: "/THUMB/redesign .png",
      description: "Alternative redesign approach with different visual direction and styling.",
      features: ["Brand Redesign", "Visual Identity", "Typography", "Creative Design"]
    },
    {
      title: "WC20 Championship – Pokémon Adventure 🐢",
      category: "YouTube Thumbnails",
      image: "/THUMB/WC20_250325_ehtishamdesigns.jpg",
      description: "Championship event design with dynamic sports elements and branding.",
      features: ["Event Design", "Sports Branding", "Typography", "Visual Identity"]
    },
    {
      title: "How I Won $610,000 – Whop Rewards ",
      category: "YouTube Thumbnails",
      image: "/THUMB/njegova verzija.png",
      description: "Creative design version with unique artistic approach and styling.",
      features: ["Creative Design", "Artistic Direction", "Typography", "Visual Identity"]
    },
    {
      title: "RECENZIJA YAMAHA XT 660",
      category: "YouTube Thumbnails",
      image: "/THUMB/0fecb0130571039.jpg",
      description: "Creative thumbnail design with modern aesthetics and engaging visuals.",
      features: ["Thumbnail Design", "Creative Layout", "Typography", "Visual Appeal"]
    },
    {
      title: "NAJBRZI GOLF 2",
      category: "YouTube Thumbnails",
      image: "/THUMB/062715130571039.jpg",
      description: "Another creative thumbnail design with unique visual elements.",
      features: ["Thumbnail Design", "Visual Elements", "Typography", "Creative Layout"]
    },
    {
      title: "Gaming live stream setup 2025",
      category: "YouTube Thumbnails",
      image: "/THUMB/6175df130571039.jpg",
      description: "Modern thumbnail design with contemporary styling and layout.",
      features: ["Thumbnail Design", "Modern Styling", "Layout", "Visual Identity"]
    },
    {
      title: "NISSAN GTR VS BMW M4",
      category: "YouTube Thumbnails",
      image: "/THUMB/76687c130571039.jpg",
      description: "Creative thumbnail with innovative design approach and elements.",
      features: ["Thumbnail Design", "Innovation", "Creative Elements", "Visual Appeal"]
    },
    {
      title: "Dobre i Loše Strane UX/UI",
      category: "YouTube Thumbnails",
      image: "/THUMB/ux-ui.jpg",
      description: "Music-themed thumbnail design with dynamic visual elements and engaging typography.",
      features: ["Thumbnail Design", "Music Branding", "Typography", "Visual Identity"]
    },
    {
      title: "ZARADI 300K ZA 3 MESECA",
      category: "YouTube Thumbnails",
      image: "/THUMB/3.png",
      description: "Creative design with unique visual elements and modern aesthetics.",
      features: ["Creative Design", "Visual Elements", "Modern Aesthetics", "Brand Identity"]
    }
  ]

  const brandingProjects = [
    {
      title: "DZAN DESIGNS Logo Collection",
      category: "Brand Identity",
      image: "/DzanDesigns brending/Logo 1.7.png",
      description: "Complete logo collection showcasing various iterations and brand evolution.",
      features: ["Logo Design", "Brand Identity", "Typography", "Visual Identity"]
    },
    {
      title: "Web Icon Design",
      category: "Digital Assets",
      image: "/DzanDesigns brending/ikonica za web.png",
      description: "Modern web icon design with clean aesthetics and professional appearance.",
      features: ["Icon Design", "Digital Assets", "Web Design", "Visual Identity"]
    },
    {
      title: "Website Banner Design",
      category: "Marketing Materials",
      image: "/DzanDesigns brending/banner za sajta.png",
      description: "Professional website banner with modern design elements and brand consistency.",
      features: ["Banner Design", "Marketing", "Web Design", "Brand Guidelines"]
    },
    {
      title: "Black Logo Variant",
      category: "Brand Identity",
      image: "/DzanDesigns brending/crn logo.png",
      description: "Minimalist black logo variant for dark backgrounds and specific applications.",
      features: ["Logo Design", "Minimalist", "Brand Identity", "Typography"]
    },
    {
      title: "DZAN with Logo",
      category: "Brand Identity",
      image: "/DzanDesigns brending/dzan sa logom.png",
      description: "Personal branding with integrated logo design and typography.",
      features: ["Personal Branding", "Logo Design", "Typography", "Visual Identity"]
    },
    {
      title: "Logo Evolution Series",
      category: "Brand Identity",
      image: "/DzanDesigns brending/Logo 1.8.png",
      description: "Series showcasing the evolution and refinement of brand identity over time.",
      features: ["Logo Evolution", "Brand Identity", "Design Process", "Visual Identity"]
    }
  ]

  const helsinkiProjects = [
    {
      title: "Helsinki Esports - Main Visual",
      category: "Esports Branding",
      image: "/helsinki esports/28d126219824437.67b84e6e805d1.jpg",
      description: "Dynamic esports branding with modern gaming aesthetics and competitive energy.",
      features: ["Esports Branding", "Gaming Design", "Visual Identity", "Brand Guidelines"]
    },
    {
      title: "Helsinki Esports - Alternative",
      category: "Esports Branding",
      image: "/helsinki esports/pet.jpg",
      description: "Alternative esports design approach with different visual direction.",
      features: ["Esports Branding", "Alternative Design", "Visual Identity", "Brand Guidelines"]
    },
    {
      title: "Helsinki Esports - Variant 3",
      category: "Esports Branding",
      image: "/helsinki esports/cetiri.jpg",
      description: "Third variant showcasing different esports branding approach.",
      features: ["Esports Branding", "Brand Variants", "Visual Identity", "Design Options"]
    },
    {
      title: "Helsinki Esports - Variant 4",
      category: "Esports Branding",
      image: "/helsinki esports/tri.jpg",
      description: "Fourth variant with unique esports branding elements.",
      features: ["Esports Branding", "Unique Elements", "Visual Identity", "Brand Design"]
    },
    {
      title: "Helsinki Esports - Variant 5",
      category: "Esports Branding",
      image: "/helsinki esports/dva.jpg",
      description: "Fifth variant showcasing esports branding diversity.",
      features: ["Esports Branding", "Design Diversity", "Visual Identity", "Brand Options"]
    },
    {
      title: "Helsinki Esports - Variant 6",
      category: "Esports Branding",
      image: "/helsinki esports/jedan.jpg",
      description: "Sixth variant with distinctive esports branding approach.",
      features: ["Esports Branding", "Distinctive Design", "Visual Identity", "Brand Identity"]
    }
  ]

  const coverArtProjects = [
    {
      title: "Lil Baby - Music Cover Art",
      category: "Music Design",
      image: "/coverarts/s66.jpg",
      description: "Creative music cover art with artistic elements and visual storytelling.",
      features: ["Cover Art", "Music Design", "Artistic Elements", "Visual Storytelling"]
    },
    {
      title: "De La Rue - Music Cover Art",
      category: "Music Design",
      image: "/coverarts/de-la-rue copy.jpg",
      description: "Sophisticated music cover art with elegant design and typography.",
      features: ["Cover Art", "Music Design", "Elegant Design", "Typography"]
    },
    {
      title: "Rusic - Music Cover Art",
      category: "Music Design",
      image: "/coverarts/resi.jpg",
      description: "Modern music cover art with contemporary design aesthetics.",
      features: ["Cover Art", "Music Design", "Modern Design", "Contemporary Aesthetics"]
    },
    {
      title: "Golubovic - Music Cover Art",
      category: "Music Design",
      image: "/coverarts/gol.jpg",
      description: "Dynamic music cover art with energetic visual elements and composition.",
      features: ["Cover Art", "Music Design", "Dynamic Elements", "Visual Composition"]
    }
  ]

  const reliantStudioProjects = [
    {
      title: "Reliant Studio - Main Cover",
      category: "Brand Identity",
      image: "/reliant studio/cover.png",
      description: "Main brand cover design showcasing Reliant Studio's visual identity and aesthetic.",
      features: ["Brand Identity", "Cover Design", "Visual Identity", "Brand Aesthetics"]
    },
    {
      title: "Reliant Studio - Brand Visual",
      category: "Brand Identity",
      image: "/reliant studio/relii.jpg",
      description: "Brand visual design with modern aesthetics and professional appearance.",
      features: ["Brand Identity", "Visual Design", "Modern Aesthetics", "Professional Design"]
    },
    {
      title: "Reliant Studio - Alternative Design",
      category: "Brand Identity",
      image: "/reliant studio/reliant35.jpg",
      description: "Alternative brand design approach with different visual direction.",
      features: ["Brand Identity", "Alternative Design", "Visual Direction", "Brand Variation"]
    },
    {
      title: "Reliant Studio - Premium Design",
      category: "Brand Identity",
      image: "/reliant studio/reliantt66.jpg",
      description: "Premium brand design with sophisticated elements and high-end aesthetics.",
      features: ["Premium Design", "Brand Identity", "Sophisticated Elements", "High-End Aesthetics"]
    },
    {
      title: "Reliant Studio - Brand Variant",
      category: "Brand Identity",
      image: "/reliant studio/reliantt.jpg",
      description: "Brand variant showcasing different design approach and styling.",
      features: ["Brand Variant", "Design Approach", "Visual Styling", "Brand Identity"]
    },
    {
      title: "Reliant Studio - Classic Design",
      category: "Brand Identity",
      image: "/reliant studio/reliant.jpg",
      description: "Classic brand design with timeless aesthetics and traditional elements.",
      features: ["Classic Design", "Timeless Aesthetics", "Traditional Elements", "Brand Identity"]
    },
    {
      title: "Limited Edition - Reliant Snus",
      category: "Product Design",
      image: "/reliant studio/123.jpg",
      description: "Limited edition product design with exclusive branding and premium feel.",
      features: ["Limited Edition", "Product Design", "Exclusive Branding", "Premium Feel"]
    },
    {
      title: "Novi Ukus - K#rwa🍇",
      category: "Product Design",
      image: "/reliant studio/333.jpg",
      description: "New flavor product design with vibrant colors and engaging visual elements.",
      features: ["Product Design", "New Flavor", "Vibrant Colors", "Engaging Visuals"]
    },
    {
      title: "Feders - Ice Cool & Maradona",
      category: "Product Design",
      image: "/reliant studio/444.jpg",
      description: "Product design featuring ice cool and Maradona themes with dynamic visuals.",
      features: ["Product Design", "Ice Cool Theme", "Maradona Theme", "Dynamic Visuals"]
    }
  ]

  const services = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Thumbnail Design",
      description: "Eye-catching YouTube thumbnails that boost click-through rates."
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Video Branding",
      description: "Consistent visual identity across all video content."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Data-driven design strategies for maximum engagement."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Brand Recognition",
      description: "Memorable designs that build lasting brand identity."
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
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/skica.png"
            alt="Background Design Elements"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Play className="h-12 w-12 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8">
              Graphic Design & Branding
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Comprehensive graphic design solutions including YouTube thumbnails, brand identity, logo design, esports branding, and music cover art. Creative solutions that make your brand unforgettable.
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
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/10"
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

 

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Why YouTube Thumbnails Matter</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              They're the first thing viewers see and can significantly impact their decision to click.
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
              { 
                title: "Make a First Impression", 
                description: "They're the first thing viewers see and can significantly impact their decision to click.",
                icon: <Eye className="h-8 w-8" />
              },
              { 
                title: "Boost Click-Through Rates", 
                description: "Compelling thumbnails increase the likelihood of viewers clicking on your video.",
                icon: <TrendingUp className="h-8 w-8" />
              },
              { 
                title: "Stand Out from Competition", 
                description: "Unique and eye-catching thumbnails help your video distinguish itself among others.",
                icon: <Target className="h-8 w-8" />
              },
              { 
                title: "Enhance Branding", 
                description: "Consistent and recognizable thumbnails help build your brand identity.",
                icon: <Award className="h-8 w-8" />
              }
            ].map((benefit, index) => (
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
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Our Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest thumbnail designs and creative projects that drive engagement and boost performance.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {thumbnailProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => window.open(project.image, '_blank')}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div 
                        className="aspect-[16/9]"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-block px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Branding Projects Section */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Brand Identity & Logo Design</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional branding solutions that create lasting impressions and build strong brand recognition.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {brandingProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => window.open(project.image, '_blank')}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div 
                        className="aspect-square"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-block px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Helsinki Esports Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Helsinki Esports Branding</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dynamic esports branding that captures the energy and competitive spirit of gaming culture.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {helsinkiProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => window.open(project.image, '_blank')}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div 
                        className="aspect-[4/3]"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-block px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cover Arts Section */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Music Cover Art Design</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creative cover art that captures the essence of music and creates visual impact for artists and albums.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {coverArtProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => window.open(project.image, '_blank')}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div 
                        className="aspect-square"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-block px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reliant Studio Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">Reliant Studio Branding</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional branding and product design solutions for Reliant Studio, showcasing modern aesthetics and premium quality.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {reliantStudioProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => window.open(project.image, '_blank')}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div 
                        className="aspect-[4/3]"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                          {project.category}
                        </span>
                        </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-block px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-8">Ready to Boost Your CTR?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Let's create thumbnails that capture attention and drive real engagement for your YouTube channel.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="https://www.instagram.com/dzandesigns/">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full"
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