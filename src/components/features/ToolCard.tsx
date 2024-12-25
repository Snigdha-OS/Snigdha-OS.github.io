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
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-cornflower-blue/10 to-white p-6 rounded-lg shadow-lg border border-gray-100 transform hover:shadow-2xl transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-cornflower-blue/20 rounded-full">
          <Terminal className="h-6 w-6 text-cornflower-blue" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
      </div>
      
      <p className="text-gray-600 text-lg mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-cornflower-blue">{category}</span>
        <code className="text-sm bg-gray-100 px-3 py-1 rounded">{command}</code>
      </div>
    </motion.div>
  );
}
