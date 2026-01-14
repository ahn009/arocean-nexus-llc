// Process steps component for Arocean Nexus LLC

'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery 
            and exceptional results every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-secondary-200 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  'relative flex items-center',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
              >
                {/* Step Number */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary-600 text-white rounded-full items-center justify-center font-bold text-xl z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 relative">
                    {/* Mobile Step Number */}
                    <div className="lg:hidden w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
                      {step.number}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                      <a
                        href={step.href}
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className={cn(
                    'w-8 h-8 bg-white border-2 border-primary-200 rounded-full flex items-center justify-center',
                    index % 2 === 0 ? 'ml-8' : 'mr-8'
                  )}>
                    <ArrowRight className={cn(
                      'w-4 h-4 text-primary-600',
                      index % 2 === 0 ? '' : 'rotate-180'
                    )} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl shadow-lg p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project and create a custom solution that meets your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <span>View Portfolio</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}