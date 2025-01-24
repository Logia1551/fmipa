"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText, Globe, Play, Book, Trophy, Snowflake, Star, BookOpen, Palette } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Enhanced color gradient function for dynamic styling
const generateGradient = (color1: string, color2: string) => 
  `linear-gradient(45deg, ${color1}, ${color2})`;

// Define a type for section content
type SectionContent = {
  title: string;
  content: string[];
  icon: React.ReactElement;
  backgroundGradient: string;
  detailList: { icon: React.ReactElement; title: string; description: string }[];
};

// Define a type for sections
type Sections = {
  [key in 'lkpd' | 'budaya']: SectionContent;
};

// Enhanced Snowflake Component
const SnowflakeParticle = ({ x, y, size, delay, duration }: { 
  x: number, 
  y: number, 
  size: number, 
  delay: number, 
  duration: number 
}) => {
  return (
    <motion.div
      initial={{ 
        y: -50, 
        x: x,
        opacity: 0.7,
        scale: 0.5
      }}
      animate={{ 
        y: window.innerHeight + 50,
        x: x + (Math.random() * 100 - 50),
        opacity: [0.7, 0.4, 0],
        rotate: 360
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: 'fixed',
        zIndex: 50,
        color: 'rgba(255,255,255,0.8)',
        pointerEvents: 'none'
      }}
    >
      <Snowflake 
        size={size} 
        className="opacity-50" 
        strokeWidth={1}
      />
    </motion.div>
  );
};

// Snow Background Component
const SnowBackground = () => {
  const [snowflakes, setSnowflakes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      const snowflakeCount = 50;
      const newSnowflakes = Array.from({ length: snowflakeCount }).map((_, index) => {
        const x = Math.random() * window.innerWidth;
        const size = Math.random() * 15 + 5;
        const delay = Math.random() * 10;
        const duration = Math.random() * 15 + 10;

        return (
          <SnowflakeParticle 
            key={`snowflake-${index}`}
            x={x}
            y={0}
            size={size}
            delay={delay}
            duration={duration}
          />
        );
      });

      setSnowflakes(newSnowflakes);
    };

    generateSnowflakes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes}
    </div>
  );
};

const HomePage = () => {
  // Enhanced Color Palettes with Gradients
  const colorSchemes = {
    mipa: {
      primary: '#3498DB',
      secondary: '#48D1CC',
      accent: '#2C3E50',
      background: '#FFFFFF',
      gradient: generateGradient('#3498DB', '#48D1CC')
    },
    budayaPendidikan: {
      primary: '#8E44AD',
      secondary: '#F5D6BA',
      accent: '#7F8C8D',
      background: '#F5F5F5',
      gradient: generateGradient('#8E44AD', '#F5D6BA')
    }
  };

  const [activeSection, setActiveSection] = useState<'lkpd' | 'budaya'>('lkpd');
  const [isSnowEnabled, setIsSnowEnabled] = useState(true);

  // Scroll Animation Variants
  const scrollAnimationVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 120,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const sections: Sections = {
    lkpd: {
      title: 'Lembar Kerja Peserta Didik (LKPD)',
      content: [
        'Panduan praktis untuk kegiatan belajar mandiri',
        'Membantu siswa mengembangkan keterampilan praktis',
        'Dirancang sesuai kurikulum pendidikan terkini',
        'Tersedia dalam berbagai mata pelajaran'
      ],
      icon: <FileText 
        className="w-24 h-24 drop-shadow-lg hover:rotate-12 transition-transform" 
        style={{
          color: colorSchemes.mipa.primary,
          background: `radial-gradient(circle, ${colorSchemes.mipa.secondary}40, transparent 70%)`,
          borderRadius: '50%',
          padding: '20px'
        }} 
      />,
      backgroundGradient: generateGradient('#3498DB20', '#48D1CC20'),
      detailList: [
        {
          icon: <Star className="w-12 h-12 text-blue-500" />,
          title: 'Materi Berkualitas',
          description: 'Konten LKPD disusun oleh tim ahli pendidikan'
        },
        {
          icon: <BookOpen className="w-12 h-12 text-green-500" />,
          title: 'Interaktif',
          description: 'Desain yang memudahkan siswa belajar mandiri'
        }
      ]
    },
    budaya: {
      title: 'Tradisi Budaya Bali',
      content: [
        'Menjelajahi keunikan tradisi masyarakat Bali',
        'Memahami makna simbolik setiap upacara',
        'Menghargai kearifan lokal Nusantara',
        'Pengalaman belajar yang mendalam'
      ],
      icon: <Globe 
        className="w-24 h-24 drop-shadow-lg hover:rotate-6 transition-transform" 
        style={{
          color: colorSchemes.budayaPendidikan.primary,
          background: `radial-gradient(circle, ${colorSchemes.budayaPendidikan.secondary}40, transparent 70%)`,
          borderRadius: '50%',
          padding: '20px'
        }} 
      />,
      backgroundGradient: generateGradient('#8E44AD20', '#F5D6BA20'),
      detailList: [
        {
          icon: <Palette className="w-12 h-12 text-purple-500" />,
          title: 'Ragam Budaya',
          description: 'Menyajikan keberagaman budaya Nusantara'
        },
        {
          icon: <Globe className="w-12 h-12 text-indigo-500" />,
          title: 'Perspektif Global',
          description: 'Memahami konteks budaya dalam skala global'
        }
      ]
    }
  };

  const features = [
    {
      icon: <Play 
        className="w-16 h-16 transition-all hover:scale-110" 
        style={{
          color: colorSchemes.mipa.primary,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
        }} 
      />,
      title: 'Video Interaktif',
      description: 'Pelajaran menarik dengan video animasi'
    },
    {
      icon: <Book 
        className="w-16 h-16 transition-all hover:scale-110" 
        style={{
          color: colorSchemes.mipa.secondary,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
        }} 
      />,
      title: 'Modul Belajar',
      description: 'Materi lengkap dan terstruktur'
    },
    {
      icon: <Trophy 
        className="w-16 h-16 transition-all hover:scale-110" 
        style={{
          color: colorSchemes.budayaPendidikan.primary,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
        }} 
      />,
      title: 'Tantangan Belajar',
      description: 'Kuis dan permainan edukatif'
    }
  ];

  // Budaya Traditions Data
  const budayaTraditions = [
    {
      title: 'Meamuk-amukan',
      description: 'Tradisi dari Desa Padangbulia, Sukasada, Buleleng, dilakukan menjelang Hari Raya Nyepi. Tradisi ini melibatkan dua orang yang seolah-olah berkelahi dengan menyemburkan api dari daun kelapa kering yang diikat menyerupai sapu.',
      image: '/meamuk.jpg'
    },
    {
      title: 'Ayunan Jantra',
      description: 'Tradisi di Desa Tenganan Pegringsingan, Karangasem, dilakukan setelah Perang Pandan. Ayunan ini melibatkan remaja laki-laki dan perempuan dalam kegiatan simbolik tentang kesiapan menghadapi kehidupan yang beragam.',
      image: '/jantra.jpg'
    },
    {
      title: 'Mageret Pandan',
      description: 'Upacara perang pandan yang menggunakan daun pandan berduri sebagai simbol gada. Diadakan di Desa Tenganan pada bulan kelima kalender Bali, melibatkan berbagai generasi dari anak-anak hingga orang tua dalam pertarungan simbolik.',
      image: '/mageret.jpg'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
      style={{ 
        backgroundColor: colorSchemes.mipa.background,
        backgroundImage: `radial-gradient(circle at top left, ${colorSchemes.mipa.secondary}20, transparent 50%)` 
      }}
    >
      {/* Snow Toggle Button */}
      <motion.button
        onClick={() => setIsSnowEnabled(!isSnowEnabled)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 100,
          backgroundColor: 'rgba(255,255,255,0.2)',
          padding: '10px',
          borderRadius: '50%'
        }}
      >
        <Snowflake 
          color={isSnowEnabled ? 'white' : 'gray'} 
          fill={isSnowEnabled ? 'white' : 'transparent'}
        />
      </motion.button>

      {/* Snow Background (Conditionally Rendered) */}
      <AnimatePresence>
        {isSnowEnabled && <SnowBackground />}
      </AnimatePresence>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{ 
          background: `linear-gradient(to right, ${colorSchemes.mipa.primary}, ${colorSchemes.budayaPendidikan.primary})`,
          color: 'white' 
        }}
        className="py-16"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl font-bold mb-4">Kids Academy</h1>
            <p className="text-xl mb-6">Platform Belajar Interaktif untuk Anak-anak</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/daftar" 
                  className="px-6 py-3 rounded-full font-semibold transition"
                  style={{
                    backgroundColor: colorSchemes.mipa.background,
                    color: colorSchemes.mipa.primary,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  Daftar Sekarang
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/coba-gratis" 
                  className="border-2 px-6 py-3 rounded-full transition"
                  style={{
                    borderColor: colorSchemes.mipa.background,
                    color: colorSchemes.mipa.background
                  }}
                >
                  Coba Gratis
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/open.png" 
                alt="Kids Learning" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Section Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg overflow-hidden shadow-md">
            <button 
              onClick={() => setActiveSection('lkpd')}
              className={`px-6 py-3 transition ${
                activeSection === 'lkpd' 
                  ? `bg-blue-500 text-white` 
                  : 'bg-white text-gray-700'
              }`}
            >
              LKPD
            </button>
            <button 
              onClick={() => setActiveSection('budaya')}
              className={`px-6 py-3 transition ${
                activeSection === 'budaya' 
                  ? `bg-purple-500 text-white` 
                  : 'bg-white text-gray-700'
              }`}
            >
              Budaya
            </button>
          </div>
        </div>

        {/* Content Display */}
        {activeSection === 'lkpd' && (
          <motion.div 
            key={activeSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
            style={{ 
              background: sections[activeSection].backgroundGradient,
              borderRadius: '20px',
              padding: '30px'
            }}
          >
            <div className="flex flex-col items-center space-y-6">
              {sections[activeSection].icon}
              <div className="grid grid-cols-2 gap-4 w-full">
                {sections[activeSection].detailList.map((detail, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-xl shadow-md text-center"
                  >
                    <div className="flex justify-center mb-3">{detail.icon}</div>
                    <h4 className="font-semibold">{detail.title}</h4>
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ color: colorSchemes.mipa.accent }}
              >
                {sections[activeSection].title}
              </h2>
              <ul className="space-y-4">
                {sections[activeSection].content.map((item: string, index: number) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center p-3 rounded-lg transition-all"
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: 'rgba(52, 152, 219, 0.1)'
                    }}
                    style={{ color: colorSchemes.mipa.accent }}
                  >
                    <ChevronRight 
                      className="mr-3" 
                      style={{ color: colorSchemes.mipa.primary }} 
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Budaya Section Modifications */}
        {activeSection === 'budaya' && (
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            style={{ 
              background: sections[activeSection].backgroundGradient,
              borderRadius: '20px',
              padding: '30px'
            }}
          >
            {/* Image Gallery */}
            <div className="space-y-6">
              {budayaTraditions.map((tradition, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <Image 
                    src={tradition.image} 
                    alt={tradition.title} 
                    width={600} 
                    height={400} 
                    className="object-cover w-full h-64"
                  />
                </motion.div>
              ))}
            </div>

            {/* Tradition Descriptions */}
            <div>
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ color: colorSchemes.budayaPendidikan.accent }}
              >
                {sections[activeSection].title}
              </h2>
              
              {budayaTraditions.map((tradition, index) => (
                <motion.div 
                  key={index} 
                  className="mb-6 p-4 rounded-lg transition-all"
                  whileHover={{ 
                    backgroundColor: 'rgba(142, 68, 173, 0.1)'
                  }}
                >
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: colorSchemes.budayaPendidikan.primary }}
                  >
                    {tradition.title}
                  </h3>
                  <p 
                    className="text-base"
                    style={{ color: colorSchemes.budayaPendidikan.accent }}
                  >
                    {tradition.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ backgroundColor: colorSchemes.budayaPendidikan.background }}
        className="py-16"
      >
        <motion.h2 
          variants={scrollAnimationVariants}
          className="text-3xl font-bold text-center mb-12"
          style={{ color: colorSchemes.budayaPendidikan.accent }}
        >
          Mengapa Pilih Kami?
        </motion.h2>
        <motion.div 
          variants={scrollAnimationVariants}
          className="container mx-auto px-4 grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={scrollAnimationVariants}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: colorSchemes.budayaPendidikan.secondary,
                color: colorSchemes.budayaPendidikan.accent
              }}
              className="p-8 rounded-xl text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer 
        className="py-12"
        style={{ 
          backgroundColor: colorSchemes.mipa.accent,
          color: 'white' 
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kids Academy. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomePage;