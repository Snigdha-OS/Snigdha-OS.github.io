import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface DownloadButtonProps {
  version: string;
  size: string;
  url: string;
}

export function DownloadButton({ version, size, url }: DownloadButtonProps) {
  return (
    <motion.a
      href={url}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security measure when opening external links
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-between w-full p-5 bg-gradient-to-r from-cornflower-blue/10 to-white rounded-lg border border-gray-200 hover:border-cornflower-blue transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-cornflower-blue focus:outline-none shadow-md hover:shadow-lg"
      aria-label={`Download Snigdha OS ${version} - ${size}`} // Accessible label
    >
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 transition duration-200 ease-in-out hover:text-cornflower-blue">
          Snigdha OS {version}
        </h3>
        <p className="text-sm text-gray-500">{size}</p>
      </div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex items-center justify-center"
      >
        <Download className="h-6 w-6 text-cornflower-blue transition-all duration-200 ease-in-out transform" />
      </motion.div>
    </motion.a>
  );
}
