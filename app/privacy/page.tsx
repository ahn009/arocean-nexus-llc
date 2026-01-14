// Privacy Policy page for Arocean Nexus LLC

import { Metadata } from 'next';
import { COMPANY_INFO, SITE_METADATA } from '@/lib/constants';
import HeroSection from '@/components/HeroSection';


export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Arocean Nexus LLC - How we protect your personal information and respect your privacy.',
  openGraph: {
    title: 'Privacy Policy - Arocean Nexus LLC',
    description: 'Learn how we protect your privacy and personal information.',
    images: [SITE_METADATA.image],
  },
};

const privacySections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: [
      `Welcome to ${COMPANY_INFO.name}'s Privacy Policy. This policy outlines how we collect, use, disclose, and safeguard your information when you visit our website ${SITE_METADATA.url}, use our services, or otherwise interact with us.`,
      'We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.',
      'This privacy notice applies to all information collected through our Services, as well as any related services, sales, marketing, or events.',
    ],
  },
  {
    id: 'information-collection',
    title: '2. Information We Collect',
    content: [
      'We collect personal information that you provide to us, such as:',
      '• Contact Information: Name, email address, phone number, company name',
      '• Project Details: Information about your project requirements, budget, timeline',
      '• Communications: Records of your communications with us',
      '• Technical Information: IP address, browser type, device identifiers',
      '• Usage Data: How you interact with our website and services',
    ],
  },
  {
    id: 'information-use',
    title: '3. How We Use Your Information',
    content: [
      'We use the information we collect in various ways, including to:',
      '• Provide and maintain our services',
      '• Process and respond to your inquiries',
      '• Communicate with you about projects and services',
      '• Send you marketing and promotional communications',
      '• Improve our website and services',
      '• Comply with legal obligations',
      '• Protect against fraudulent or illegal activity',
    ],
  },
  {
    id: 'information-sharing',
    title: '4. Information Sharing and Disclosure',
    content: [
      'We do not sell your personal information. We may share your information in the following situations:',
      '• With service providers who help us operate our business',
      '• With your consent or at your direction',
      '• To comply with legal obligations',
      '• To protect our rights and the rights of others',
      '• In connection with a business transfer',
    ],
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    content: [
      'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.',
      'You are responsible for keeping your login credentials confidential and for maintaining the security of your accounts.',
    ],
  },
  {
    id: 'data-retention',
    title: '6. Data Retention',
    content: [
      'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.',
      'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Privacy Rights',
    content: [
      'Depending on your location, you may have certain rights regarding your personal information, including:',
      '• The right to access your personal information',
      '• The right to request correction of your personal information',
      '• The right to request deletion of your personal information',
      '• The right to object to processing of your personal information',
      '• The right to request restriction of processing',
      '• The right to data portability',
      '• The right to withdraw consent at any time',
    ],
  },
  {
    id: 'cookies',
    title: '8. Cookies and Tracking Technologies',
    content: [
      'We use cookies and similar tracking technologies to track activity on our Service and store certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.',
      'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.',
    ],
  },
  {
    id: 'third-party-links',
    title: '9. Third-Party Links',
    content: [
      'Our Service may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.',
      'You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.',
    ],
  },
  {
    id: 'children-privacy',
    title: '10. Children\'s Privacy',
    content: [
      'Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.',
      'If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to This Privacy Policy',
    content: [
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
      'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
      'Last updated: January 1, 2024',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        subtitle="How we protect your data"
        breadcrumb="Privacy"
      />

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <nav className="space-y-3">
                {privacySections.map((section) => (
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

            {/* Privacy Policy Sections */}
            <div className="space-y-12">
              {privacySections.map((section, index) => (
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

            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-white/90 mb-6">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-white mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p>{COMPANY_INFO.address.street}</p>
                      <p>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}