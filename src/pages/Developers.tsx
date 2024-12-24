import { useQueries, useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { TeamMemberCard } from '@/components/developers/TeamMemberCard';
import { RepoCard } from '@/components/developers/RepoCard';
import { fetchGithubUser, fetchOrgRepos } from '@/lib/github';
import { teamMembers } from '@/data/team';

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
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
          <p className="mt-4 text-lg text-gray-600">
            Meet the dedicated team behind Snigdha OS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {queries.map((query, index) => (
            query.data && (
              <TeamMemberCard
                key={query.data.login}
                user={query.data}
                role={teamMembers[index].role}
                description={teamMembers[index].description}
              />
            )
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos?.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}