import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SearchBar } from '@/components/features/SearchBar';
import { CategoryFilter } from '@/components/features/CategoryFilter';
import { ToolCard } from '@/components/features/ToolCard';
import { tools, categories } from '@/data/tools';

export default function Features() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Snigdha OS Tools</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our comprehensive collection of security and penetration testing tools
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="max-w-xl mx-auto">
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No tools found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}