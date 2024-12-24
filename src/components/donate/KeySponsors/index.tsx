import { useQueries } from '@tanstack/react-query';
import { fetchGithubUser } from '@/lib/github';
import { keySponsors } from '@/data/sponsors';
import { SponsorCard } from './SponsorCard';

export function KeySponsors() {
  const queries = useQueries({
    queries: keySponsors.map(sponsor => ({
      queryKey: ['github-user', sponsor.githubUsername],
      queryFn: () => fetchGithubUser(sponsor.githubUsername),
      retry: 1, // Only retry once to avoid excessive API calls
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    })),
  });

  return (
    <div className="bg-gradient-to-r from-cornflower-blue/5 to-blue-50/50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Key Sponsors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {keySponsors.map((sponsor, index) => (
          <SponsorCard
            key={sponsor.name}
            sponsor={sponsor}
            query={queries[index]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}