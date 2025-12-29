'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

interface InteractiveCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  delay?: number
}

export default function InteractiveCard({ title, description, icon, delay = 0 }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="glass rounded-2xl p-8 h-full cursor-pointer relative overflow-hidden"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {icon && (
            <motion.div
              className="text-4xl mb-4 text-primary"
              animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          )}
          <h3 className="text-2xl font-bold mb-3 text-secondary">{title}</h3>
          <p className="text-secondary/70 leading-relaxed">{description}</p>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            boxShadow: '0 0 40px rgba(219, 105, 35, 0.5)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

