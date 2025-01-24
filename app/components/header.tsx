"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { Bell, User, Search, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New lesson available' },
    { id: 2, message: 'Assignment due soon' }
  ])

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement actual search logic
      console.log('Searching:', searchQuery)
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50"
    >
      <form onSubmit={handleSearch} className="flex items-center space-x-4 flex-1 relative">
        <Search size={24} className="text-gray-500" />
        <input 
          type="search" 
          placeholder="Cari pelajaran..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-2 py-1 border rounded pr-10"
          aria-label="Search lessons"
        />
        {searchQuery && (
          <button 
            type="button" 
            onClick={clearSearch} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Clear search"
          >
            <X size={20} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </form>

      <div className="flex items-center space-x-4 ml-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
          aria-label="Notifications"
        >
          <Bell size={24} className="text-gray-600" />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs">
              {notifications.length}
            </span>
          )}
        </motion.button>

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
      </div>
    </motion.header>
  )
}

export default Header