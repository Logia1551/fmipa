"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  // Variabel untuk animasi hover pada link navigasi
  const linkHoverAnimation = {
    scale: 1.1,
    color: '#1D4ED8', // Warna biru saat hover
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50"
    >
      {/* Logo dan Teks */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <Image
              src="/logo.png" // Ganti dengan path logo Anda
              alt="Kids Academy"
              width={50}
              height={50}
              className="h-auto"
            />
            <span className="text-xl font-bold text-gray-800">Kids Academy</span>
          </a>
        </Link>
      </div>

      {/* Navigasi */}
      <nav className="flex items-center space-x-8">
        {['Beranda', 'LKPD', 'Budaya', 'About Us'].map((item, index) => (
          <Link href={`/${item.toLowerCase().replace(' ', '')}`} key={index}>
            <a>
              <motion.span
                whileHover={linkHoverAnimation}
                className="font-medium text-gray-800 transition-colors"
              >
                {item}
              </motion.span>
            </a>
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
