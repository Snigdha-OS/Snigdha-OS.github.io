import { motion } from 'framer-motion';
import { Star, GitFork, Clock } from 'lucide-react';
import { formatDate } from '../../lib/utils';
import type { GithubRepo } from '../../lib/github';

interface RepoCardProps {
  repo: GithubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-900">
        <a 
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cornflower-blue transition-colors"
          aria-label={`Visit ${repo.name} repository`}
        >
          {repo.name}
        </a>
      </h3>

      {repo.description && (
        <p className="mt-2 text-gray-600 line-clamp-3">
          {repo.description}
        </p>
      )}

      <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-cornflower-blue" aria-hidden="true" />
            <span>{repo.language}</span>
          </span>
        )}

        <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
          <Star className="h-5 w-5 text-yellow-500" />
          <span>{repo.stargazers_count}</span>
        </motion.span>

        <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
          <GitFork className="h-5 w-5 text-gray-600" />
          <span>{repo.forks_count}</span>
        </motion.span>

        <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
          <Clock className="h-5 w-5 text-gray-600" />
          <span>{formatDate(repo.updated_at)}</span>
        </motion.span>
      </div>
    </motion.div>
  );
}