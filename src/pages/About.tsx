import { motion } from 'framer-motion';
import { Timeline } from '../components/about/Timeline';
import { TeamSection } from '../components/about/TeamSection';
import { MissionSection } from '../components/about/MissionSection';

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            About Snigdha OS
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The most advanced penetration testing distribution, crafted for security professionals.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Mission Section */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <MissionSection />
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Our Team Structure
            </h2>
            <div className="rounded-lg shadow-sm bg-white p-6">
              <TeamSection />
            </div>
          </section>

          {/* Timeline Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Release Timeline
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Timeline />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
