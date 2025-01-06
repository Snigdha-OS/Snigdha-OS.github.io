import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Donor {
  name: string;
  amount: number;
  message?: string;
  date: string; // Consider using a Date object for better date handling
}

interface DonorWallProps {
  donors: Donor[];
}

export function DonorWall({ donors }: DonorWallProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6" id="donor-wall-title">
        Recent Supporters
      </h2>
      
      <div className="space-y-6" role="list" aria-labelledby="donor-wall-title">
        {donors.map((donor, index) => (
          <motion.div
            key={`${donor.name}-${donor.date}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} // Add exit animation
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            role="listitem"
            aria-label={`Donation by ${donor.name} of $${donor.amount} on ${donor.date}`}
          >
            <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900">{donor.name}</h3>
                <span className="text-sm text-cornflower-blue">${donor.amount.toFixed(2)}</span>
              </div>
              {donor.message && (
                <p className="mt-1 text-sm text-gray-600">{donor.message}</p>
              )}
              <time className="text-xs text-gray-500" dateTime={donor.date}>
                {new Date(donor.date).toLocaleDateString()} {/* Format date for better readability */}
              </time>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}