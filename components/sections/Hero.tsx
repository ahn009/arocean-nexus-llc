// Hero section for Arocean Nexus LLC

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BookOpen, TrendingUp, Code, ArrowRight, Briefcase } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 text-white overflow-hidden" style={{ paddingTop: 'var(--header-height)', minHeight: 'calc(100vh + var(--header-height))' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float animation-delay-1000" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container-custom flex items-center" style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient-shift">
                  Digital Excellence
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                {COMPANY_INFO.name} turns strategy and content into immersive digital products — 
                from publishing pipelines to high-performing software, marketing, and IT.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Start Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                rightIcon={<Briefcase className="w-5 h-5" />}
                className="bg-transparent text-white border-white/40 hover:border-white/60"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10"
            >
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  label: 'E-Books & Publishing',
                  href: '/services#publishing',
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  label: 'Digital Marketing',
                  href: '/services#marketing',
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  label: 'Software Development',
                  href: '/services#software',
                },
              ].map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center animate-float">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Digital Innovation</h3>
                    <p className="text-gray-400">Transforming ideas into reality</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}