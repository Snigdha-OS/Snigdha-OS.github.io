import { motion } from 'framer-motion';
import { Globe, Wifi, Download } from 'lucide-react';
import { type Mirror } from '@/types/download';
import { formatSpeed } from '@/lib/utils';

interface MirrorListProps {
  mirrors: Mirror[];
  onSelect: (mirror: Mirror) => void;
}

export function MirrorList({ mirrors, onSelect }: MirrorListProps) {
  return (
    <div className="space-y-4">
      {mirrors.map((mirror, index) => (
        <motion.div
          key={mirror.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200 hover:border-cornflower-blue transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-cornflower-blue" />
              <div>
                <h3 className="font-medium text-gray-900">{mirror.name}</h3>
                <p className="text-sm text-gray-500">{mirror.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Wifi className="h-4 w-4" />
                {formatSpeed(mirror.speed)}
              </div>
              <button
                onClick={() => onSelect(mirror)}
                className="flex items-center gap-2 px-4 py-2 bg-cornflower-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download className="h-4 w-4" />
                Select
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}