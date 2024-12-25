import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { formatINR } from '../../lib/currency';

// Hardcoded conversion rate (you can replace this with dynamic data)
const INR_TO_USD_CONVERSION_RATE = 0.012;

const tiers = [
  {
    name: 'Community Hero',
    amount: 999,
    description: 'Support the ongoing development of Snigdha OS',
    benefits: [
      'Special recognition on our GitHub repository',
      'Access to sponsor-only updates',
      'Vote on feature priorities'
    ]
  },
  {
    name: 'Security Champion',
    amount: 2999,
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
    amount: 5999,
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

// Function to convert INR to USD
const convertINRToUSD = (inrAmount: number) => {
  return (inrAmount * INR_TO_USD_CONVERSION_RATE).toFixed(2); // Convert INR to USD with 2 decimal places
};

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
              <span className="text-gray-600"> / ₹</span>
              <span className="text-3xl font-bold text-gray-900 ml-2">${convertINRToUSD(tier.amount)}</span>
              <span className="text-gray-600"> / USD</span>
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
            href={`https://github.com/sponsors/eshanized?frequency=one-time&amount=${convertINRToUSD(tier.amount)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center py-2 px-4 rounded-lg transition-colors ${
              tier.featured
                ? 'bg-cornflower-blue text-white hover:bg-blue-600'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Make a One-Time Donation
          </a>
        </motion.div>
      ))}
    </div>
  );
}
