import { motion } from 'framer-motion';
import { Star, GitFork, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { GithubRepo } from '@/lib/github';

interface RepoCardProps {
  repo: GithubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200"
    >
      <h3 className="text-lg font-semibold text-gray-900">
        <a 
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cornflower-blue transition-colors"
        >
          {repo.name}
        </a>
      </h3>
      
      {repo.description && (
        <p className="mt-2 text-gray-600 line-clamp-2">{repo.description}</p>
      )}
      
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-cornflower-blue" />
            {repo.language}
          </span>
        )}
        
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          {repo.stargazers_count}
        </span>
        
        <span className="flex items-center gap-1">
          <GitFork className="h-4 w-4" />
          {repo.forks_count}
        </span>
        
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {formatDate(repo.updated_at)}
        </span>
      </div>
    </motion.div>
  );
}