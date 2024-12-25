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
          transition={{ delay: index * 0.2, duration: 0.8 }}
          className="relative pl-12 pb-12"
        >
          <div className="absolute left-0 top-0 p-2 bg-cornflower-blue/70 rounded-full border-2 border-white shadow-lg">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Snigdha OS {release.version}
            </h3>
            <time className="text-sm text-gray-500 font-light">{release.date}</time>
            <p className="mt-2 text-gray-700 text-lg leading-relaxed">{release.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
