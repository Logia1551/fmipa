"use client";

import React from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'
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
        <Link href="/" className="font-medium text-gray-800 hover:text-blue-600">
          Beranda
        </Link>
        <Link href="/lkpd" className="font-medium text-gray-800 hover:text-blue-600">
          LKPD
        </Link>
        <Link href="/budaya" className="font-medium text-gray-800 hover:text-blue-600">
          Budaya
        </Link>
        <Link href="/about" className="font-medium text-gray-800 hover:text-blue-600">
          About Us
        </Link>
      </nav>

      <Link href="/profile">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-100 p-2 rounded-full cursor-pointer"
          aria-label="User Profile"
        >
          <User size={24} className="text-blue-600" />
        </motion.div>
      </Link>
    </motion.header>
  )
}

export default Header