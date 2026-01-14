// Contact page for Arocean Nexus LLC

import { Metadata } from 'next';
import { SITE_METADATA } from '@/lib/constants';
import { ContactContent } from '@/components/contact/ContactContent';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Arocean Nexus LLC for your digital transformation needs. Free consultation available.',
  openGraph: {
    title: 'Contact Us - Arocean Nexus LLC',
    description: 'Ready to start your project? Contact us today for a free consultation.',
    images: [SITE_METADATA.image],
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team"
        breadcrumb="Contact"
      />
      <ContactContent />
    </>
  );
}
