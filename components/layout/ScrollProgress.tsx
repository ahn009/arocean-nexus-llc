// Scroll progress indicator component

'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-[1000] origin-left"
      style={{ width: `${progress}%` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.1 }}
    />
  );
}