import AppImage from '@/components/atoms/Image';
import Icon from '@/components/atoms/Icon';
import { categoryColorMap } from '@/components/atoms/colorToken';
import { HeritageSite } from '@/types/heritage';

interface HeritageCardProps {
  site: HeritageSite;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function HeritageCard({
  site,
  isFavorite = false,
  onToggleFavorite,
}: HeritageCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative">
        <AppImage src={site.image} alt={site.name} />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full text-white shadow"
          style={{ backgroundColor: categoryColorMap[site.category] }}
        >
          {site.category}
        </span>
        <button
          onClick={() => onToggleFavorite?.(site.id)}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2 hover:bg-white transition-colors"
          aria-label={
            isFavorite ? 'Remove from favorites' : 'Add to favorites'
          }
        >
          <Icon
            name="heart"
            className={isFavorite ? 'text-red-500' : 'text-gray-400'}
          />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
          {site.name}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1 mb-3">
          <Icon name="location" size={14} />
          <span>{site.location}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {site.description.slice(0, 90)}...
        </p>
      </div>
    </div>
  );
}