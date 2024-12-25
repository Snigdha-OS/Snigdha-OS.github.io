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
      <div className="rounded-xl bg-white/90 backdrop-blur-lg p-8 ring-1 ring-gray-200 hover:ring-cornflower-blue transition-all shadow-2xl hover:shadow-cornflower-blue/40 overflow-hidden flex flex-col justify-center items-center">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cornflower-blue/0 to-cornflower-blue/0 group-hover:from-cornflower-blue/10 group-hover:to-cornflower-blue/20 transition-all ease-in-out" />

        {/* Icon centered with hover effect */}
        <div className="mb-6 flex justify-center items-center">
          <Icon className="h-12 w-12 text-cornflower-blue transition-all transform group-hover:scale-105" />
        </div>

        {/* Title with enhanced typography */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
        
        {/* Description with improved readability */}
        <p className="text-lg text-gray-600 text-center">{description}</p>
      </div>
    </motion.div>
  );
}
