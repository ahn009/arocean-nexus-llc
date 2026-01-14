// Button component for Arocean Nexus LLC
'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

interface ButtonProps extends Omit<BaseButtonProps, 'children'>, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button';
  children: ReactNode;
}

interface LinkProps extends Omit<BaseButtonProps, 'children'>, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  as: 'link';
  href: string;
  children: ReactNode;
}

type Props = ButtonProps | LinkProps;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className,
  leftIcon,
  rightIcon,
  fullWidth = false,
  ...props
}: Props) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Variants
      'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl':
        variant === 'primary',
      'bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400 focus:ring-gray-500':
        variant === 'secondary',
      'bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500':
        variant === 'outline',
      'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500':
        variant === 'ghost',
    },
    {
      // Sizes
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
      'px-8 py-4 text-xl': size === 'xl',
    },
    {
      'w-full': fullWidth,
    },
    className
  );

  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
      {loading && (
        <div className="ml-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
    </>
  );

  if (props.as === 'link') {
    const { as, href, ...linkProps } = props;
    return (
      <Link
        href={href}
        className={baseClasses}
        {...(linkProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  const { as, ...buttonProps } = props;
  return (
    <button
      className={baseClasses}
      disabled={disabled || loading}
      {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

// Floating action button
export function FloatingButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Icon button
export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'ghost' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const variantClasses = {
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Back to top button
export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FloatingButton
      onClick={scrollToTop}
      aria-label="Back to top"
      className="opacity-0 invisible data-[visible=true]:opacity-100 data-[visible=true]:visible transition-all duration-300"
      data-visible={typeof window !== 'undefined' && window.scrollY > 300}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </FloatingButton>
  );
}