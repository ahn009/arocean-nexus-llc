// Homepage for Arocean Nexus LLC

import { Hero } from '@/components/sections/Hero';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { Stats } from '@/components/sections/Stats';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Stats />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTA />
    </>
  );
}