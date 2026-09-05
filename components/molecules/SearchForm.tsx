import { useState } from 'react';
import Icon from '@/components/atoms/Icon';

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchForm({
  onSearch,
  placeholder = 'Search by name or category...',
}: SearchFormProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Icon name="search" size={18} />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        spellCheck={false}
        aria-label="Search heritage sites by name or category"
        className="w-full pl-11 pr-4 py-3 rounded-full border-0 shadow-lg text-white-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
  );
}