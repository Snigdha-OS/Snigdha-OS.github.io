import { useQueries, useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { TeamMemberCard } from '../components/developers/TeamMemberCard';
import { RepoCard } from '../components/developers/RepoCard';
import { fetchGithubUser, fetchOrgRepos } from '../lib/github';
import { teamMembers } from '../data/team';

export default function Developers() {
  const queries = useQueries({
    queries: teamMembers.map(member => ({
      queryKey: ['github-user', member.username],
      queryFn: () => fetchGithubUser(member.username),
    })),
  });

  const { data: repos, isLoading: loadingRepos, error: reposError } = useQuery({
    queryKey: ['github-repos', 'Snigdha-OS'],
    queryFn: () => fetchOrgRepos('Snigdha-OS'),
  });

  const isLoading = queries.some(query => query.isLoading) || loadingRepos;
  const isError = queries.some(query => query.isError) || reposError;

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-cornflower-blue" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-red-500 text-lg font-semibold">
          Oops! Something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            The talented developers behind <span className="text-cornflower-blue font-semibold">Snigdha OS</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {queries.map((query, index) => (
            query.data && (
              <motion.div
                key={query.data.login}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <TeamMemberCard
                  user={query.data}
                  role={teamMembers[index].role}
                  description={teamMembers[index].description}
                />
              </motion.div>
            )
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Our Repositories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {repos?.map((repo) => (
              <motion.div
                key={repo.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <RepoCard repo={repo} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
