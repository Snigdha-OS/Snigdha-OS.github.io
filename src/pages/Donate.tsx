import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GithubSponsorButton } from '../components/donate/GithubSponsorButton';
import { SponsorshipTiers } from '../components/donate/SponsorshipTiers';
import { SponsorshipStats } from '../components/donate/SponsorshipStats';
import { KeySponsors } from '../components/donate/KeySponsors';

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, bounce: 0.4 }}
          >
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Support Snigdha OS
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your support helps us maintain and improve Snigdha OS, keeping it free and open source for the security community.
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubSponsorButton />
          </motion.div>
        </motion.div>

        {/* Key Sections */}
        <div className="space-y-20">
          {/* Key Sponsors */}
          <section className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cornflower-blue/10 rounded-full blur-3xl"></div>
            <KeySponsors />
          </section>

          {/* Sponsorship Stats */}
          <section>
            <SponsorshipStats />
          </section>

          {/* Sponsorship Tiers */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Choose Your Sponsorship Tier
            </h2>
            <SponsorshipTiers />
          </section>

          {/* Why Sponsor */}
          <section className="max-w-3xl mx-auto text-center bg-gray-100 rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Sponsor Snigdha OS?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
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
