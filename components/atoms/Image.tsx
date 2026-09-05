import NextImage from 'next/image';

interface AppImageProps {
  src: string;
  alt: string;
  className?: string;
}

const basePath = process.env.NODE_ENV === 'production' ? '/pangasinan-heritage-guide' : '';

export default function AppImage({
  src,
  alt,
  className = '',
}: AppImageProps) {
  // Ensure we don't duplicate slashes if src already starts with a slash
  const imageSrc = src.startsWith('http') 
    ? src 
    : `${basePath}${src.startsWith('/') ? '' : '/'}${src}`;

  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-lg ${className}`}>
      <NextImage
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}
