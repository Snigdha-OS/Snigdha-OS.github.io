import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { type UseQueryResult } from '@tanstack/react-query';
import { type GithubUser } from '@/lib/github';
import { type Sponsor } from '@/types/sponsor';
import { formatINR } from '@/lib/currency';

interface SponsorCardProps {
  sponsor: Sponsor;
  query: UseQueryResult<GithubUser>;
  index: number;
}

export function SponsorCard({ sponsor, query, index }: SponsorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-cornflower-blue/20 shadow-sm"
    >
      <div className="flex items-center gap-4">
        {query.data && !query.error ? (
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
}