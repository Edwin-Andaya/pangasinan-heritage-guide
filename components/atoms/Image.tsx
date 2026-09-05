import NextImage from 'next/image';

interface AppImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AppImage({
  src,
  alt,
  className = '',
}: AppImageProps) {
  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-lg ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}