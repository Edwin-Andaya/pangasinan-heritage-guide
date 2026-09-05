'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pangasinan-favorites';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setFavoriteIds(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  return {
    favoriteIds,
    toggleFavorite,
  };
}