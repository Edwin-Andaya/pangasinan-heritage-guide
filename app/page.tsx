'use client';
import { useState } from 'react';
import HeaderNavigation from '@/components/organisms/headerNavigation';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import SearchForm from '@/components/molecules/SearchForm';
import { heritageSites } from '@/data/heritageSites';
import { useFavorites } from '@/hooks/useFavorites';

export default function Home() {
  const [query, setQuery] = useState('');
  const { favoriteIds, toggleFavorite } = useFavorites();

  const filteredSites = heritageSites.filter(
    (site) =>
      site.name.toLowerCase().includes(query.toLowerCase()) ||
      site.category.toLowerCase().includes(query.toLowerCase())
  );

  

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <HeaderNavigation currentPath="/" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Discover Pangasinan&apos;s Hidden Treasures
          </h1>

          <p className="text-teal-100 max-w-xl mx-auto mb-8">
            Explore natural wonders, historical landmarks, and sacred sites
            across the province.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <SearchForm onSearch={setQuery} />
          </div>
        </div>
      </section>

      {/* Heritage Sites */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {query ? `Results for "${query}"` : 'All Heritage Sites'}
          </h2>

          <span className="text-sm text-gray-500">
            {filteredSites.length} site(s)
          </span>
        </div>

        {/* Heritage Grid */}
        <HeritageGrid
          sites={filteredSites}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center text-sm py-8 mt-10">
        © 2026 Pangasinan Provincial Tourism Office. All rights reserved.
      </footer>
    </main>
  );
}