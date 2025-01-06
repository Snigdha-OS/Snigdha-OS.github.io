import { motion } from 'framer-motion';
import { Users, Shield, BookOpen, MessageSquare } from 'lucide-react';

const teamStructure = [
  {
    title: 'Core Development',
    description: 'Responsible for the base system and core tools integration.',
    icon: Users,
    link: '#',
  },
  {
    title: 'Security Tools',
    description: 'Maintains and updates the vast collection of security tools.',
    icon: Shield,
    link: '#',
  },
  {
    title: 'Documentation',
    description: 'Creates and maintains user documentation and guides.',
    icon: BookOpen,
    link: '#',
  },
  {
    title: 'Community Management',
    description: 'Manages community interactions and contributions.',
    icon: MessageSquare,
    link: '#',
  },
];

export function TeamSection() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Meet Our Teams
      </h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamStructure.map((team, index) => (
          <motion.div
            key={team.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <team.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {team.title}
              </h3>
            </div>
            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {team.description}
            </p>
            {/* Optional Link/Button */}
            {team.link && (
              <a
                href={team.link}
                className="text-blue-600 font-medium text-sm inline-flex items-center group-hover:underline"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
