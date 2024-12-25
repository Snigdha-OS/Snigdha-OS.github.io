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
        <p className="text-red-500">Failed to load data</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900">Meet Our Team</h1>
          <p className="mt-4 text-lg text-gray-600">
            The amazing developers behind Snigdha OS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 justify-center items-center">
          {queries.map((query, index) => (
            query.data && (
              <motion.div
                key={query.data.login}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="flex justify-center items-center"
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
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos?.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
