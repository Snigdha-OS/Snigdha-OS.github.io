import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  command: string;
}

export function ToolCard({ name, description, category, command }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-3">
        <Terminal className="h-5 w-5 text-cornflower-blue" />
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-cornflower-blue">{category}</span>
        <code className="text-sm bg-gray-100 px-2 py-1 rounded">{command}</code>
      </div>
    </motion.div>
  );
}