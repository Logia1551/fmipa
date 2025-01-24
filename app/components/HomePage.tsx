"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Play, Book, Trophy } from 'lucide-react';

const HomePage = () => {
  const categories = [
    {
      id: 1,
      title: 'Matematika',
      icon: '➕',
      color: 'bg-blue-500', // Tetap biru modern
      courses: 12
    },
    {
      id: 2,
      title: 'Sains',
      icon: '🔬',
      color: 'bg-teal-500', // Ubah ke teal modern
      courses: 8
    },
    {
      id: 3,
      title: 'Bahasa',
      icon: '🗣️',
      color: 'bg-purple-500', // Ungu lembut
      courses: 15
    },
    {
      id: 4,
      title: 'Budaya',
      icon: '🏺',
      color: 'bg-orange-500', // Tetap oranye
      courses: 10
    }
  ];

  const features = [
    {
      icon: <Play className="w-12 h-12 text-blue-600" />,
      title: 'Video Interaktif',
      description: 'Pelajaran menarik dengan video animasi'
    },
    {
      icon: <Book className="w-12 h-12 text-teal-600" />, // Ubah warna ikon
      title: 'Modul Belajar',
      description: 'Materi lengkap dan terstruktur'
    },
    {
      icon: <Trophy className="w-12 h-12 text-purple-600" />, // Ubah warna ikon
      title: 'Tantangan Belajar',
      description: 'Kuis dan permainan edukatif'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
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
                <Link href="/daftar" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
                  Daftar Sekarang
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/coba-gratis" className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
                  Coba Gratis
                </Link>
              </motion.div>
            </div>
          </motion.div>
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
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 py-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12"
        >
          Kategori Pelajaran
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className={`${category.color} text-white p-6 rounded-xl text-center transform transition`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p>{category.courses} Kursus</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-white py-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12"
        >
          Mengapa Pilih Kami?
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          className="container mx-auto px-4 grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Mulai Perjalanan Belajar Anda Hari Ini!</h2>
          <p className="text-xl mb-8">Bergabunglah dengan ribuan siswa yang sudah memulai</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/daftar" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition inline-flex items-center"
            >
              Daftar Sekarang <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kids Academy. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomePage;