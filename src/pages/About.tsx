import { motion } from 'framer-motion';
import { Timeline } from '../components/about/Timeline';
import { TeamSection } from '../components/about/TeamSection';
import { MissionSection } from '../components/about/MissionSection';

export default function About() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900">
            About Snigdha OS
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            The most advanced penetration testing distribution, made for security professionals.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* Mission Section */}
          <section className="bg-cornflower-blue/5 rounded-2xl p-8 shadow-lg">
            <MissionSection />
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Team Structure
            </h2>
            <div className="overflow-hidden rounded-xl shadow-md bg-white p-6">
              <TeamSection />
            </div>
          </section>

          {/* Timeline Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Release Timeline
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Timeline />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
