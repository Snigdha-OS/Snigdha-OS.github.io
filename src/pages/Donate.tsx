import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GithubSponsorButton } from '../components/donate/GithubSponsorButton';
import { SponsorshipTiers } from '../components/donate/SponsorshipTiers';
import { SponsorshipStats } from '../components/donate/SponsorshipStats';
import { KeySponsors } from '../components/donate/KeySponsors';

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900">Support Snigdha OS</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your support helps us maintain and improve Snigdha OS, keeping it free and open source for the security community.
          </p>
          <div className="mt-8">
            <GithubSponsorButton />
          </div>
        </motion.div>

        <div className="space-y-16">
          <section>
            <KeySponsors />
          </section>

          <section>
            <SponsorshipStats />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Choose Your Sponsorship Tier
            </h2>
            <SponsorshipTiers />
          </section>

          <section className="max-w-3xl mx-auto text-center bg-cornflower-blue/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Sponsor Snigdha OS?
            </h2>
            <p className="text-gray-600">
              Your sponsorship directly supports the development of cutting-edge security tools, 
              maintenance of our infrastructure, and helps us keep Snigdha OS at the forefront 
              of security testing. Join our community of sponsors and help shape the future of 
              security testing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}