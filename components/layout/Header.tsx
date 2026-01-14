'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';

import { cn } from '@/lib/utils';
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* --------------------------------------------
   * Measure header height (CRITICAL FIX)
   * ------------------------------------------ */
  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const updateHeaderHeight = () => {
      const height = headerRef.current!.offsetHeight;
      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`
      );
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  /* --------------------------------------------
   * Scroll state (visual only)
   * ------------------------------------------ */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* --------------------------------------------
   * Close mobile menu on route change
   * ------------------------------------------ */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  /* --------------------------------------------
   * Lock body scroll when mobile menu is open
   * ------------------------------------------ */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      data-header
      className={cn(
        'fixed top-0 inset-x-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      {/* Main Bar */}
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo/logo.png"
              alt="Arocean Nexus LLC Logo"
              width={150}
              height={50}
              className="h-12 w-auto object-contain"
              priority={true}
              unoptimized={false}
            />
           
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary-600" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={cn(
                'flex items-center space-x-2 text-sm font-medium transition-colors',
                'text-gray-700 hover:text-primary-600'
              )}
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <Button
              href="/contact"
              size="sm"
              className={cn(
                'bg-primary-600 hover:bg-primary-700 text-white'
              )}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              'text-gray-700 hover:bg-gray-100'
            )}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{ top: 'var(--header-height)' }}
        className={cn(
          'lg:hidden fixed inset-x-0 bottom-0 z-[90] bg-white transition-transform duration-300',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container-custom py-8 space-y-8">
          <nav className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-lg font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t space-y-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
            >
              <Phone className="w-5 h-5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-600"
            >
              <Mail className="w-5 h-5" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <Button
              href="/contact"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
