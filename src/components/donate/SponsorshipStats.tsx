import { motion } from 'framer-motion';
import { Users, Star, Heart } from 'lucide-react';
import { formatINR } from '../../lib/currency';

const stats = [
  {
    label: 'Total Sponsors',
    value: '6+',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    label: 'Total Support',
    value: formatINR(164563.08),
    icon: Heart,
    color: 'text-red-500'
  },
  {
    label: 'GitHub Stars',
    value: '200+',
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
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div className={`flex items-center mb-4`}>
            <stat.icon className={`h-10 w-10 ${stat.color} mr-2`} />
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
          <p className="text-gray-600 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}