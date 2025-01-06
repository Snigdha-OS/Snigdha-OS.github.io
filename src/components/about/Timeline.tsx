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
      {/* Vertical timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 rounded" aria-hidden="true" />

      {/* Timeline items */}
      {releases.map((release, index) => (
        <motion.div
          key={release.version}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.7 }}
          className="relative pl-12 pb-12"
        >
          {/* Timeline point */}
          <div
            className="absolute left-0 top-0 p-2 bg-blue-600 rounded-full border-2 border-white shadow-lg"
            role="img"
            aria-label={`Release date: ${release.date}`}
          >
            <Calendar className="h-5 w-5 text-white" />
          </div>

          {/* Timeline content */}
          <div
            className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
            tabIndex={0}
            role="group"
            aria-labelledby={`release-title-${release.version}`}
            aria-describedby={`release-desc-${release.version}`}
          >
            <h3
              id={`release-title-${release.version}`}
              className="text-xl font-semibold text-gray-900 mb-2"
            >
              Snigdha OS {release.version}
            </h3>
            <time
              id={`release-date-${release.version}`}
              className="text-sm text-gray-500 font-light"
            >
              {release.date}
            </time>
            <p
              id={`release-desc-${release.version}`}
              className="mt-3 text-gray-700 text-lg leading-relaxed"
            >
              {release.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
