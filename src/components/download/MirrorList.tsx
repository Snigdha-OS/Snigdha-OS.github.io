import { motion } from 'framer-motion';
import { Globe, Wifi, Download } from 'lucide-react';
import { type Mirror } from '../../types/download';
import { formatSpeed } from '../../lib/utils';

interface MirrorListProps {
  mirrors: Mirror[];
  onSelect: (mirror: Mirror) => void;
}

export function MirrorList({ mirrors, onSelect }: MirrorListProps) {
  return (
    <div className="space-y-6">
      {mirrors.map((mirror, index) => (
        <motion.div
          key={mirror.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:border-cornflower-blue transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Globe className="h-6 w-6 text-cornflower-blue" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{mirror.name}</h3>
                <p className="text-sm text-gray-600">{mirror.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Wifi className="h-5 w-5" />
                {formatSpeed(mirror.speed)}
              </div>
              <button
                onClick={() => onSelect(mirror)}
                className="flex items-center gap-3 px-5 py-2 bg-cornflower-blue text-white rounded-lg hover:bg-cornflower-blue/80 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Download className="h-5 w-5" />
                Select
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
