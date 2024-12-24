import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const teamStructure = [
  {
    title: 'Core Development',
    description: 'Responsible for the base system and core tools integration',
  },
  {
    title: 'Security Tools',
    description: 'Maintains and updates the vast collection of security tools',
  },
  {
    title: 'Documentation',
    description: 'Creates and maintains user documentation and guides',
  },
  {
    title: 'Community Management',
    description: 'Manages community interactions and contributions',
  },
];

export function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {teamStructure.map((team, index) => (
        <motion.div
          key={team.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Users className="h-5 w-5 text-cornflower-blue" />
            <h3 className="text-lg font-semibold text-gray-900">{team.title}</h3>
          </div>
          <p className="text-gray-600">{team.description}</p>
        </motion.div>
      ))}
    </div>
  );
}