import { motion } from 'framer-motion';
import { Timeline } from '../components/about/Timeline';
import { TeamSection } from '../components/about/TeamSection';
import { MissionSection } from '../components/about/MissionSection';

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">About Snigdha OS</h1>
          <p className="mt-4 text-lg text-gray-600">
            The most advanced penetration testing distribution, made for security professionals.
          </p>
        </motion.div>

        <div className="space-y-16">
          <section>
            <MissionSection />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Team Structure</h2>
            <TeamSection />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Release Timeline</h2>
            <Timeline />
          </section>
        </div>
      </div>
    </div>
  );
}