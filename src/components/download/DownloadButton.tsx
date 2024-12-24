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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-between w-full p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-cornflower-blue transition-colors"
    >
      <div>
        <h3 className="font-semibold text-gray-900">Snigdha OS {version}</h3>
        <p className="text-sm text-gray-500">{size}</p>
      </div>
      <Download className="h-5 w-5 text-cornflower-blue" />
    </motion.a>
  );
}