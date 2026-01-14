import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function HeroSection({ title, subtitle, breadcrumb }: HeroSectionProps) {
  return (
    <section className="w-full bg-blue-900 text-white py-20" style={{ paddingTop: 'var(--header-height)' }}>
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
        <div className="text-sm md:text-base">
          <Link href="/" className="text-blue-300 hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
