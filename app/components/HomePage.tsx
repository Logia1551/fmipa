"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Globe, Play, Book, Trophy } from 'lucide-react';
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
};

// Define a type for sections
type Sections = {
  [key in 'lkpd' | 'budaya']: SectionContent;
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
      />
    },
    budaya: {
      title: 'Penjelasan Budaya',
      content: [
        'Eksplorasi mendalam tentang warisan budaya Indonesia',
        'Materi interaktif dan mendalam',
        'Memahami keragaman dan kearifan lokal',
        'Pengalaman belajar yang menginspirasi'
      ],
      icon: <Globe 
        className="w-24 h-24 drop-shadow-lg hover:rotate-6 transition-transform" 
        style={{
          color: colorSchemes.budayaPendidikan.primary,
          background: `radial-gradient(circle, ${colorSchemes.budayaPendidikan.secondary}40, transparent 70%)`,
          borderRadius: '50%',
          padding: '20px'
        }} 
      />
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        type: 'tween' 
      }}
      className="min-h-screen"
      style={{ 
        backgroundColor: colorSchemes.mipa.background,
        backgroundImage: `radial-gradient(circle at top left, ${colorSchemes.mipa.secondary}20, transparent 50%)` 
      }}
    >
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
                src="/api/placeholder/500/400" 
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
                  ? `bg-${colorSchemes.mipa.primary} text-white` 
                  : 'bg-white text-gray-700'
              }`}
            >
              LKPD
            </button>
            <button 
              onClick={() => setActiveSection('budaya')}
              className={`px-6 py-3 transition ${
                activeSection === 'budaya' 
                  ? `bg-${colorSchemes.budayaPendidikan.primary} text-white` 
                  : 'bg-white text-gray-700'
              }`}
            >
              Budaya
            </button>
          </div>
        </div>

        {/* Content Display */}
        <motion.div 
          key={activeSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="flex justify-center">
            {sections[activeSection].icon}
          </div>
          <div>
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: activeSection === 'lkpd' 
                ? colorSchemes.mipa.accent 
                : colorSchemes.budayaPendidikan.accent }}
            >
              {sections[activeSection].title}
            </h2>
            <ul className="space-y-3">
              {sections[activeSection].content.map((item: string, index: number) => (
                <li 
                  key={index} 
                  className="flex items-center"
                  style={{ color: activeSection === 'lkpd' 
                    ? colorSchemes.mipa.accent 
                    : colorSchemes.budayaPendidikan.accent }}
                >
                  <ChevronRight 
                    className="mr-2" 
                    style={{ color: activeSection === 'lkpd' 
                      ? colorSchemes.mipa.primary 
                      : colorSchemes.budayaPendidikan.primary }} 
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
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

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ 
          background: `linear-gradient(to right, ${colorSchemes.mipa.primary}, ${colorSchemes.budayaPendidikan.primary})`,
          color: 'white'
        }}
        className="py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Mulai Perjalanan Belajar Anda Hari Ini!</h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/daftar" 
              className="px-8 py-4 rounded-full text-lg font-semibold transition inline-flex items-center"
              style={{
                backgroundColor: colorSchemes.mipa.background,
                color: colorSchemes.mipa.primary
              }}
            >
              Daftar Sekarang <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
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