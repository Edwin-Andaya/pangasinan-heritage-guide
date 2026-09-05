import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: React.ReactNode;
}

export default function Typography({
  variant = 'body',
  children,
}: TypographyProps) {
  const styles = {
    h1: 'text-3xl font-bold text-gray-900',
    h2: 'text-2xl font-bold text-gray-900',
    h3: 'text-xl font-semibold text-gray-800',
    body: 'text-base text-gray-700',
    caption: 'text-sm text-gray-500',
  };

  const Tag = variant === 'body' || variant === 'caption' ? 'p' : variant;

  return <Tag className={styles[variant]}>{children}</Tag>;
}