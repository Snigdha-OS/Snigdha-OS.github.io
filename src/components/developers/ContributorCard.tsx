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
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200"
    >
      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={`${login}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{login}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <GitCommit className="h-4 w-4" />
            <span>{contributions} contributions</span>
          </div>
        </div>
      </div>
      
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-2 text-sm text-cornflower-blue hover:underline"
      >
        <Github className="h-4 w-4" />
        View Profile
      </a>
    </motion.div>
  );
}