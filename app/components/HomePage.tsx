"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
  // Color Palettes
  const colorSchemes = {
    mipa: {
      primary: '#3498DB',
      secondary: '#48D1CC',
      accent: '#2C3E50',
      background: '#FFFFFF'
    },
    budayaPendidikan: {
      primary: '#8E44AD',
      secondary: '#F5D6BA',
      accent: '#7F8C8D',
      background: '#F5F5F5'
    }
  };

  const [activeSection, setActiveSection] = useState<'lkpd' | 'budaya'>('lkpd');

  const sections: Sections = {
    lkpd: {
      title: 'Lembar Kerja Peserta Didik (LKPD)',
      content: [
        'Panduan praktis untuk kegiatan belajar mandiri',
        'Membantu siswa mengembangkan keterampilan praktis',
        'Dirancang sesuai kurikulum pendidikan terkini',
        'Tersedia dalam berbagai mata pelajaran'
      ],
      icon: <FileText className="w-16 h-16" style={{color: colorSchemes.mipa.primary}} />
    },
    budaya: {
      title: 'Penjelasan Budaya',
      content: [
        'Eksplorasi mendalam tentang warisan budaya Indonesia',
        'Materi interaktif dan mendalam',
        'Memahami keragaman dan kearifan lokal',
        'Pengalaman belajar yang menginspirasi'
      ],
      icon: <Globe className="w-16 h-16" style={{color: colorSchemes.budayaPendidikan.primary}} />
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ backgroundColor: colorSchemes.mipa.background }}
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Kids Academy</h1>
          <p className="text-xl mb-6">Platform Belajar Interaktif untuk Anak-anak</p>
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