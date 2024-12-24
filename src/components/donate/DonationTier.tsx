import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface DonationTierProps {
  name: string;
  amount: number;
  benefits: string[];
  recommended?: boolean;
  onSelect: () => void;
}

export function DonationTier({ name, amount, benefits, recommended, onSelect }: DonationTierProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg border ${
        recommended ? 'border-cornflower-blue' : 'border-gray-200'
      }`}
    >
      {recommended && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-cornflower-blue bg-blue-50 rounded-full mb-4">
          Recommended
        </span>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">${amount}</p>
      
      <ul className="mt-6 space-y-3">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onSelect}
        className="mt-8 w-full py-2 px-4 bg-cornflower-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Select
      </button>
    </motion.div>
  );
}