import { Search } from 'lucide-react';
import { ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-all" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search tools..."
        className="w-full pl-12 pr-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-cornflower-blue focus:border-cornflower-blue outline-none transition-all duration-300 ease-in-out hover:border-gray-300 hover:bg-white/90"
      />
    </div>
  );
}
