import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function FeatureCard({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="rounded-xl bg-white/80 backdrop-blur p-8 ring-1 ring-gray-200 hover:ring-cornflower-blue transition-all shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cornflower-blue/0 to-cornflower-blue/0 group-hover:from-cornflower-blue/5 group-hover:to-cornflower-blue/10 transition-colors" />
        
        <Icon className="h-10 w-10 text-cornflower-blue mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}