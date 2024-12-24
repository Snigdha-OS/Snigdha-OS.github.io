import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useQueries } from '@tanstack/react-query';
import { fetchGithubUser } from '@/lib/github';
import { keySponsors } from '@/data/sponsors';
import { formatINR } from '@/lib/currency';

export function KeySponsors() {
  const queries = useQueries({
    queries: keySponsors.map(sponsor => ({
      queryKey: ['github-user', sponsor.githubUsername],
      queryFn: () => fetchGithubUser(sponsor.githubUsername),
    })),
  });

  return (
    <div className="bg-gradient-to-r from-cornflower-blue/5 to-blue-50/50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Key Sponsors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {keySponsors.map((sponsor, index) => {
          const query = queries[index];
          
          return (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-cornflower-blue/20 shadow-sm"
            >
              <div className="flex items-center gap-4">
                {query.data ? (
                  <img
                    src={query.data.avatar_url}
                    alt={`${sponsor.name}'s profile`}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="p-3 bg-cornflower-blue/10 rounded-lg">
                    <Building2 className="h-8 w-8 text-cornflower-blue" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{sponsor.name}</h3>
                  <p className="text-sm text-gray-600">{sponsor.description}</p>
                  <p className="text-sm font-medium text-cornflower-blue mt-1">
                    {formatINR(sponsor.amount)}/month
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}