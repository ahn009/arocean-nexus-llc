// Footer component for Arocean Nexus LLC
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, NAV_ITEMS, SERVICES } from '@/lib/constants';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ExternalLink
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo/logo.png"
                alt="Arocean Nexus LLC Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
                priority={true}
                unoptimized={false}
              />
             
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            
            {/* Social + Email Icons */}
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* ✅ Email Icon Added */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary-400 group-hover:text-primary-300" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary-400 group-hover:text-primary-300" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span>
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <span>Get in Touch</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
