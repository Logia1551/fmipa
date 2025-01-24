"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Menu, Home, Book, Calculator, Microscope, 
  Globe, Trophy, Settings, HelpCircle, 
  ChevronRight, ChevronLeft 
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { icon: Home, label: 'Beranda', href: '/' },
    { icon: Book, label: 'Pelajaran', href: '/pelajaran' },
    { icon: Calculator, label: 'Matematika', href: '/matematika' },
    { icon: Microscope, label: 'Sains', href: '/sains' },
    { icon: Globe, label: 'Bahasa', href: '/bahasa' },
    { icon: Trophy, label: 'Pencapaian', href: '/pencapaian' },
    { icon: Settings, label: 'Pengaturan', href: '/pengaturan' },
    { icon: HelpCircle, label: 'Bantuan', href: '/bantuan' }
  ]

  return (
    <motion.div 
      initial={{ width: 80 }}
      animate={{ width: isOpen ? 250 : 80 }}
      className="bg-blue-600 text-white h-screen flex flex-col shadow-xl relative"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 z-50"
      >
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>

      <div className="flex items-center p-4 mb-4">
        <Menu size={32} className="mr-3" />
        <AnimatePresence>
          {isOpen && (
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl font-bold"
            >
              Kids Academy
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="flex items-center p-4 hover:bg-blue-700 transition"
          >
            <item.icon size={24} className="mr-4" />
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}

export default Sidebar;