import Link from 'next/link';
import NavigationItem from '@/components/molecules/NavigationItem';

interface HeaderNavigationProps {
  currentPath: string;
}

export default function HeaderNavigation({
  currentPath,
}: HeaderNavigationProps) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/favorites', label: 'Favorites' },
  ];

  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-xl">
            🏝️
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight">
              Pangasinan
            </p>
            <p className="text-teal-100 text-xs tracking-wide uppercase">
              Heritage Guide
            </p>
          </div>
        </Link>
        <nav className="flex gap-1">
          {navLinks.map((link) => (
            <NavigationItem
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={currentPath === link.href}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}