'use client';

import HeaderNavigation from '@/components/organisms/headerNavigation';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import { heritageSites } from '@/data/heritageSites';
import { useFavorites } from '@/hooks/useFavorites';

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const favoriteSites = heritageSites.filter((site) =>
    favoriteIds.includes(site.id)
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <HeaderNavigation currentPath="/favorites" />

      {/* Favorites Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Favorite Heritage Sites
        </h2>

        {favoriteSites.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            You haven&apos;t added any favorites yet. Go back to Home and tap
            the heart icon on a site you love.
          </p>
        ) : (
          <HeritageGrid
            sites={favoriteSites}
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center text-sm py-8 mt-10">
        © 2026 Pangasinan Provincial Tourism Office. All rights reserved.
      </footer>
    </main>
  );
}