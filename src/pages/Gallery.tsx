import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import { GalleryImage } from '../components/gallery/GalleryImage';
import { CategoryFilter } from '../components/gallery/CategoryFilter';
import { galleryImages, categories } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [zoomedImage, setZoomedImage] = useState(null);

  const filteredImages = useMemo(() => {
    return selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Camera className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-extrabold text-gray-900">Gallery</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the visual journey of <span className="text-blue-600">Snigdha OS</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.src}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setZoomedImage(image.src)}
              className="cursor-pointer"
            >
              <GalleryImage {...image} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {zoomedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.img
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </div>
  );
}
