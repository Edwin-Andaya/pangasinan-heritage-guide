import { HeritageSite } from '@/types/heritage';
import HeritageCard from '@/components/molecules/heritageCard';

interface HeritageGridProps {
  sites: HeritageSite[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

export default function HeritageGrid({
  sites,
  favoriteIds,
  onToggleFavorite,
}: HeritageGridProps) {
  if (sites.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        No heritage sites found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sites.map((site) => (
        <HeritageCard
          key={site.id}
          site={site}
          isFavorite={favoriteIds.includes(site.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}