"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Play, Book, Trophy } from 'lucide-react';

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

  const categories = [
    {
      id: 1,
      title: 'Matematika',
      icon: '➕',
      color: colorSchemes.mipa.primary,
      textColor: 'white',
      courses: 12,
      scheme: colorSchemes.mipa
    },
    {
      id: 2,
      title: 'Sains',
      icon: '🔬',
      color: colorSchemes.mipa.secondary,
      textColor: 'black',
      courses: 8,
      scheme: colorSchemes.mipa
    },
    {
      id: 3,
      title: 'Bahasa',
      icon: '🗣️',
      color: colorSchemes.budayaPendidikan.primary,
      textColor: 'white',
      courses: 15,
      scheme: colorSchemes.budayaPendidikan
    },
    {
      id: 4,
      title: 'Budaya',
      icon: '🏺',
      color: colorSchemes.budayaPendidikan.secondary,
      textColor: 'black',
      courses: 10,
      scheme: colorSchemes.budayaPendidikan
    }
  ];

  const features = [
    {
      icon: <Play className="w-12 h-12" style={{color: colorSchemes.mipa.primary}} />,
      title: 'Video Interaktif',
      description: 'Pelajaran menarik dengan video animasi'
    },
    {
      icon: <Book className="w-12 h-12" style={{color: colorSchemes.mipa.secondary}} />,
      title: 'Modul Belajar',
      description: 'Materi lengkap dan terstruktur'
    },
    {
      icon: <Trophy className="w-12 h-12" style={{color: colorSchemes.budayaPendidikan.primary}} />,
      title: 'Tantangan Belajar',
      description: 'Kuis dan permainan edukatif'
    }
  ];

  // Scroll-based animation variants
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
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
          {/* Header content remains similar */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
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
          {/* Image section */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
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

      {/* Categories Section with Scroll Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h2 
          variants={scrollAnimationVariants}
          className="text-3xl font-bold text-center mb-12"
          style={{ color: colorSchemes.mipa.accent }}
        >
          Kategori Pelajaran
        </motion.h2>
        <motion.div 
          variants={scrollAnimationVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              variants={scrollAnimationVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundColor: category.color,
                color: category.textColor
              }}
              className="p-6 rounded-xl text-center transform transition shadow-lg"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p>{category.courses} Kursus</p>
            </motion.div>
          ))}
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

      {/* Call to Action Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ 
          background: `linear-gradient(to right, ${colorSchemes.mipa.primary}, ${colorSchemes.budayaPendidikan.primary})`,
          color: 'white'
        }}
        className="py-16"
      >
        <motion.div 
          variants={scrollAnimationVariants}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Mulai Perjalanan Belajar Anda Hari Ini!</h2>
          <p className="text-xl mb-8">Bergabunglah dengan ribuan siswa yang sudah memulai</p>
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