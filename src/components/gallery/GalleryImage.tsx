import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

export function GalleryImage({ src, alt, category }: GalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden rounded-lg"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-medium">{alt}</p>
          <span className="text-sm text-gray-300">{category}</span>
        </div>
      </div>
    </motion.div>
  );
}