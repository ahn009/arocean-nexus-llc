// Portfolio page for Arocean Nexus LLC

import { Metadata } from 'next';
import { PORTFOLIO_ITEMS, SITE_METADATA } from '@/lib/constants';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { CTA } from '@/components/sections/CTA';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Explore our portfolio of successful digital transformation projects across publishing, marketing, software development, and IT solutions.',
  openGraph: {
    title: 'Our Portfolio - Arocean Nexus LLC',
    description: 'See our proven track record of delivering exceptional digital solutions.',
    images: [SITE_METADATA.image],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Explore our latest projects and success stories"
        breadcrumb="Portfolio"
      />

      {/* Portfolio Grid */}
      <PortfolioGrid items={PORTFOLIO_ITEMS} />

      {/* CTA */}
      <CTA />
    </>
  );
}