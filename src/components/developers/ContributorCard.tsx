import { motion } from 'framer-motion';
import { Github, GitCommit } from 'lucide-react';

interface ContributorCardProps {
  login: string;
  avatarUrl: string;
  contributions: number;
  profileUrl: string;
}

export function ContributorCard({ login, avatarUrl, contributions, profileUrl }: ContributorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-md w-72 h-48 transition-all flex flex-col justify-between"
    >
      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={`${login}'s avatar`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg truncate">{login}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <GitCommit className="h-4 w-4" />
            <span>{contributions} contributions</span>
          </div>
        </div>
      </div>
      <motion.a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        className="mt-4 flex items-center gap-2 text-sm text-blue-600 hover:underline"
      >
        <Github className="h-4 w-4" />
        View Profile
      </motion.a>
    </motion.div>
  );
}
