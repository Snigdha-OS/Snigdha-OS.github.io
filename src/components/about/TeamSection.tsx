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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamStructure.map((team, index) => (
        <motion.div
          key={team.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 bg-cornflower-blue/20 rounded-full">
              <Users className="h-8 w-8 text-cornflower-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{team.title}</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{team.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
