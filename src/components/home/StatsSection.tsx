import { motion } from 'framer-motion';
import { Users, Wrench, Star } from 'lucide-react';

const stats = [
  { label: 'Active Users', value: '50K+', icon: Users },
  { label: 'Security Tools', value: '600+', icon: Wrench },
  { label: 'GitHub Stars', value: '15K+', icon: Star },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 text-cornflower-blue mx-auto mb-4" />
              <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}