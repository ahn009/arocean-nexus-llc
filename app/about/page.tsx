// About page for Arocean Nexus LLC

import { Metadata } from 'next';
import { SITE_METADATA } from '@/lib/constants';
import { AboutContent } from '@/components/about/AboutContent';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Arocean Nexus LLC - our mission, values, and commitment to delivering exceptional digital solutions since 2023.',
  openGraph: {
    title: 'About Us - Arocean Nexus LLC',
    description: 'Discover our story, values, and the team behind our success.',
    images: [SITE_METADATA.image],
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Learn more about our mission and team"
        breadcrumb="About"
      />
      <AboutContent />
    </>
  );
}