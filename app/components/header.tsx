"use client";

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50"
    >
      <nav className="flex items-center space-x-8">
        <Link href="/" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
          Beranda
        </Link>
        <Link href="/lkpd" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
          LKPD
        </Link>
        <Link href="/budaya" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
          Budaya
        </Link>
        <Link href="/about" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
          About Us
        </Link>
      </nav>
    </motion.header>
  )
}

export default Header