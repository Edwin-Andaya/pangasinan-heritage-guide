import Link from 'next/link';
import Typography from '@/components/atoms/Typography';

interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export default function NavigationItem({
  href,
  label,
  isActive = false,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition-colors ${
        isActive ? 'bg-blue-100' : 'hover:bg-gray-100'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      <Typography variant="body">{label}</Typography>
    </Link>
  );
}