interface IconProps {
  name: 'location' | 'search' | 'heart' | 'phone';
  size?: number;
  className?: string;
}
    
export default function Icon({
  name,
  size = 20,
  className = '',
}: IconProps) {
  const icons: Record<string, string> = {
    location:
      'M12 21c-4.418 0-8-4.03-8-9a8 8 0 1116 0c0 4.97-3.582 9-8 9z',
    search:
      'M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z',
    heart:
      'M12 21s-6.5-4.35-9-8.28C1.4 9.5 2.8 6 6 6c1.9 0 3.3 1 4 2.3C10.7 7 12.1 6 14 6c3.2 0 4.6 3.5 3 6.72C18.5 16.65 12 21 12 21z',
    phone:
      'M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.99.36 1.96.68 2.89a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.19-1.25a2 2 0 012.11-.45c.93.32 1.9.55 2.89.68A2 2 0 0122 16.92z',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path
        d={icons[name]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}