import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { formatINR } from '@/lib/currency';

const tiers = [
  {
    name: 'Community Hero',
    amount: 399,
    description: 'Support the ongoing development of Snigdha OS',
    benefits: [
      'Special recognition on our GitHub repository',
      'Access to sponsor-only updates',
      'Vote on feature priorities'
    ]
  },
  {
    name: 'Security Champion',
    amount: 799,
    description: 'Help shape the future of security testing',
    benefits: [
      'All Community Hero benefits',
      'Early access to new features',
      'Priority support on GitHub',
      'Exclusive security tips newsletter'
    ],
    featured: true
  },
  {
    name: 'Enterprise Partner',
    amount: 1999,
    description: 'Perfect for organizations using Snigdha OS',
    benefits: [
      'All Security Champion benefits',
      'Custom support channel',
      'Training materials access',
      'Team collaboration features',
      'Priority feature requests'
    ]
  }
];

export function SponsorshipTiers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative rounded-2xl ${
            tier.featured 
              ? 'bg-gradient-to-b from-cornflower-blue/10 to-cornflower-blue/5 border-2 border-cornflower-blue'
              : 'bg-white/80 border border-gray-200'
          } backdrop-blur-sm p-6 shadow-lg`}
        >
          {tier.featured && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 bg-cornflower-blue text-white text-sm rounded-full">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-gray-900">{formatINR(tier.amount)}</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="mt-2 text-gray-600">{tier.description}</p>
          </div>

          <ul className="space-y-3 mb-6">
            {tier.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href={`https://github.com/sponsors/eshanized?frequency=monthly&sponsor=${encodeURIComponent(tier.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center py-2 px-4 rounded-lg transition-colors ${
              tier.featured
                ? 'bg-cornflower-blue text-white hover:bg-blue-600'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Become a {tier.name}
          </a>
        </motion.div>
      ))}
    </div>
  );
}