import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  'Advanced Security Tools',
  'Regular Updates',
  'Community Support',
  'Hardware Compatibility',
  'Custom Tools',
  'Enterprise Support',
];

export function ComparisonSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Snigdha OS?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Compare and see why security professionals prefer Snigdha OS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Other Distros', 'Snigdha OS', 'Commercial Tools'].map((title, colIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: colIndex * 0.2 }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                colIndex === 1 ? 'ring-2 ring-cornflower-blue' : ''
              }`}
            >
              <div className={`p-6 ${
                colIndex === 1 ? 'bg-cornflower-blue text-white' : 'bg-gray-50'
              }`}>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      {colIndex === 1 ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}