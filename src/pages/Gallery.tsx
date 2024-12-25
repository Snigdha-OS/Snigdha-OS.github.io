import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { GalleryImage } from '../components/gallery/GalleryImage';
import { CategoryFilter } from '../components/gallery/CategoryFilter';
import { galleryImages, categories } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = useMemo(() => {
    return selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Camera className="h-12 w-12 text-cornflower-blue mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore the visual journey of Snigdha OS
          </p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <GalleryImage key={image.src} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
}