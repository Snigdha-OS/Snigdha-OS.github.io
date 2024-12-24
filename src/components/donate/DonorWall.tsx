import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Donor {
  name: string;
  amount: number;
  message?: string;
  date: string;
}

interface DonorWallProps {
  donors: Donor[];
}

export function DonorWall({ donors }: DonorWallProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Supporters</h2>
      
      <div className="space-y-6">
        {donors.map((donor, index) => (
          <motion.div
            key={`${donor.name}-${donor.date}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900">{donor.name}</h3>
                <span className="text-sm text-cornflower-blue">${donor.amount}</span>
              </div>
              {donor.message && (
                <p className="mt-1 text-sm text-gray-600">{donor.message}</p>
              )}
              <time className="text-xs text-gray-500">{donor.date}</time>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}