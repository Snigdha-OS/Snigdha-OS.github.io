import { motion } from 'framer-motion';
import { Users, Star, Heart } from 'lucide-react';
import { formatINR } from '@/lib/currency';

const stats = [
  {
    label: 'Current Sponsors',
    value: '50+',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    label: 'Monthly Support',
    value: formatINR(200000),
    icon: Heart,
    color: 'text-red-500'
  },
  {
    label: 'GitHub Stars',
    value: '1.2K+',
    icon: Star,
    color: 'text-yellow-500'
  }
];

export function SponsorshipStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200"
        >
          <stat.icon className={`h-8 w-8 ${stat.color} mb-2`} />
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}