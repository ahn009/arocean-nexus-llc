// Statistics section for Arocean Nexus LLC

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { STATS } from '@/lib/constants';

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [currentValue, setCurrentValue] = useState('0');

  useEffect(() => {
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[\d,]/g, '');
    
    let start = 0;
    const end = numericValue;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentValue(value);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.floor(start).toLocaleString() + suffix);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{currentValue}</span>;
}

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our track record of success and innovation has helped businesses 
            grow exponentially across diverse sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  <AnimatedCounter value={stat.value} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-white/80 leading-relaxed max-w-sm mx-auto">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-white/30 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Founded in 2023</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Based in Tomball, TX, we've been helping businesses transform their digital presence 
              and achieve remarkable growth through innovative technology solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}