'use client';

import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@/lib/constants';

export function AboutHero() {
  return (
    <section className="pb-20 bg-gradient-to-br from-gray-50 to-white" style={{ paddingTop: 'var(--header-height)' }}>
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About {COMPANY_INFO.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            {COMPANY_INFO.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
