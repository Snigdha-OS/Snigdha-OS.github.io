import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const releases = [
  { version: '2024.1', date: '2024', description: 'Latest release with enhanced cloud support' },
  { version: '2023.4', date: '2023', description: 'Major UI overhaul and tool updates' },
  { version: '2023.1', date: '2023', description: 'Introduced new wireless testing tools' },
  { version: '2022.4', date: '2022', description: 'Added ARM64 support improvements' },
  { version: '2022.1', date: '2022', description: 'Enhanced container support' },
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
      
      {releases.map((release, index) => (
        <motion.div
          key={release.version}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-12 pb-8"
        >
          <div className="absolute left-0 p-2 bg-white rounded-full border-2 border-cornflower-blue">
            <Calendar className="h-4 w-4 text-cornflower-blue" />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Kali {release.version}
            </h3>
            <time className="text-sm text-gray-500">{release.date}</time>
            <p className="mt-1 text-gray-600">{release.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}