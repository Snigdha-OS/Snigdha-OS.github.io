import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-cornflower-blue text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}