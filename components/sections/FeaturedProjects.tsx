// Featured projects section for Arocean Nexus LLC

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function FeaturedProjects() {
  const featuredProjects = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful digital transformations across 
            publishing, marketing, software development, and IT solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={project.href}
                className="block bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex space-x-4">
                      {project.metrics.map((metric: { value: string; label: string }, idx: number) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-primary-600">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}