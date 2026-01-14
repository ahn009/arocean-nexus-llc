// Terms of Service page for Arocean Nexus LLC

import { Metadata } from 'next';
import { COMPANY_INFO, SITE_METADATA } from '@/lib/constants';
import HeroSection from '@/components/HeroSection';


export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Arocean Nexus LLC - Please read these terms carefully before using our services.',
  openGraph: {
    title: 'Terms of Service - Arocean Nexus LLC',
    description: 'Legal terms and conditions for using our services.',
    images: [SITE_METADATA.image],
  },
};

const termsSections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      `By accessing and using ${SITE_METADATA.url} and the services provided by ${COMPANY_INFO.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
      'We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of our services after any changes constitutes your acceptance of the new terms.',
    ],
  },
  {
    id: 'services',
    title: '2. Description of Services',
    content: [
      `${COMPANY_INFO.name} provides digital services including but not limited to:`,
      '• E-Books and Publishing Solutions',
      '• Digital Marketing Services',
      '• Software Development',
      '• IT Solutions and Support',
      '• Consulting and Advisory Services',
      'We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.',
    ],
  },
  {
    id: 'registration',
    title: '3. Registration and Accounts',
    content: [
      'To access certain features of our services, you may be required to create an account. You agree to:',
      '• Provide accurate, current, and complete information during registration',
      '• Maintain and promptly update your account information',
      '• Maintain the security of your account credentials',
      '• Notify us immediately of any unauthorized use of your account',
      'You are responsible for all activities that occur under your account.',
    ],
  },
  {
    id: 'payment',
    title: '4. Payment and Billing',
    content: [
      'Payment terms for our services are as follows:',
      '• All fees are quoted in U.S. Dollars unless otherwise specified',
      '• Payment is due according to the terms specified in your service agreement',
      '• Late payments may result in suspension of services',
      '• All sales are final unless otherwise specified in writing',
      '• We reserve the right to change our pricing at any time',
    ],
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    content: [
      'All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by or licensed to us and are protected by copyright, trademark, and other intellectual property laws.',
      'You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.',
      'Client work products are owned by the client upon full payment, unless otherwise specified in the service agreement.',
    ],
  },
  {
    id: 'confidentiality',
    title: '6. Confidentiality',
    content: [
      'We understand that in the course of providing services, we may have access to confidential information. We agree to:',
      '• Keep all client information strictly confidential',
      '• Not disclose confidential information to third parties without written consent',
      '• Use confidential information only for the purpose of providing services',
      '• Take reasonable measures to protect confidential information',
    ],
  },
  {
    id: 'limitations',
    title: '7. Limitation of Liability',
    content: [
      'To the fullest extent permitted by law, we shall not be liable for:',
      '• Any indirect, incidental, special, or consequential damages',
      '• Loss of profits, revenue, data, or use',
      '• Any damages exceeding the amount paid for our services',
      '• Third-party claims arising from your use of our services',
      'This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory.',
    ],
  },
  {
    id: 'warranty',
    title: '8. Warranty and Disclaimer',
    content: [
      'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:',
      '• Our services will be uninterrupted, secure, or error-free',
      '• The results obtained from using our services will be accurate or reliable',
      '• The quality of our services will meet your expectations',
      'Any material downloaded or otherwise obtained through our services is done at your own risk.',
    ],
  },
  {
    id: 'termination',
    title: '9. Termination',
    content: [
      'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.',
      'Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.',
    ],
  },
  {
    id: 'governing-law',
    title: '10. Governing Law',
    content: [
      `These Terms shall be governed and construed in accordance with the laws of the State of ${COMPANY_INFO.address.state}, United States, without regard to its conflict of law provisions.`,
      'You agree to submit to the personal and exclusive jurisdiction of the courts located within the county of the State of Texas.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to Terms',
    content: [
      'We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.',
      'What constitutes a material change will be determined at our sole discretion.',
      'By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact Information',
    content: [
      'If you have any questions about these Terms of Service, please contact us:',
      `• Email: ${COMPANY_INFO.email}`,
      `• Phone: ${COMPANY_INFO.phone}`,
      `• Address: ${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.zip}`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <HeroSection
        title="Terms of Service"
        subtitle="Our terms and conditions"
        breadcrumb="Terms"
      />

      {/* Terms of Service Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <nav className="space-y-3">
                {termsSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-primary-600 hover:text-primary-700 transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Terms of Service Sections */}
            <div className="space-y-12">
              {termsSections.map((section, index) => (
                <div>
                  <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Acceptance */}
            <div>
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-white/90 mb-6">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold transition-colors hover:bg-gray-100"
                  >
                    <span>Contact Us</span>
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center space-x-2 border-2 border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors hover:bg-white/10"
                  >
                    <span>Return Home</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}