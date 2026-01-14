// Services page for Arocean Nexus LLC

import { Metadata } from 'next';
import { SERVICES, SITE_METADATA } from '@/lib/constants';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { CTA } from '@/components/sections/CTA';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive digital services including E-Books & Publishing, Digital Marketing, Software Development, and IT Solutions.',
  openGraph: {
    title: 'Our Services - Arocean Nexus LLC',
    description: 'Professional digital services tailored to transform your business.',
    images: [SITE_METADATA.image],
  },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your business needs"
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* CTA */}
      <CTA />
    </>
  );
}