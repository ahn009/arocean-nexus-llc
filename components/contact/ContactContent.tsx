'use client';

import { motion } from 'framer-motion';
import { COMPANY_INFO, FAQ_ITEMS } from '@/lib/constants';
import { ContactForm } from '@/components/contact/ContactForm';
import { FAQ } from '@/components/contact/FAQ';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactContent() {
  return (
    <>
      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-lg p-12 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Phone */}
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Phone</h3>
                </div>
                <p className="text-white/90 mb-4">
                  Call us directly or text us if you prefer
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-block text-lg font-semibold hover:text-white/80 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <p className="text-white/90 mb-4">
                  We'll respond within 24 hours
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-block text-lg font-semibold hover:text-white/80 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Address */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Visit Us</h3>
                </div>
                <p className="text-white/90">
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-white/80 mt-4 text-sm">
                  Emergency support available 24/7 for existing clients
                </p>
              </div>

              {/* Support Tiers */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Standard: 24-48 hours</li>
                      <li>• Priority: 2-4 hours</li>
                      <li>• Emergency: 1 hour (24/7)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}
