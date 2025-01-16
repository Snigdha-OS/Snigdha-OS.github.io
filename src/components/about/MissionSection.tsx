import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export function MissionSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-10 rounded-lg"
    >
      <div className="flex items-center gap-4 mb-6 justify-center text-center">
        <Target className="h-8 w-8 text-cornflower-blue" />
          <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
          Snigdha OS aims to provide security professionals and enthusiasts with the most comprehensive, 
          reliable, and up-to-date collection of security tools. Our mission is to empower the security 
          community with a standardized platform that allows for professional-grade security auditing and 
          penetration testing, enhancing both efficiency and accuracy.
        </p>
        
        <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">Core Values</h3>
        <ul className="space-y-3 text-lg text-gray-600">
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hover:text-cornflower-blue"
          >
            <span className="font-semibold text-gray-800">Open Source: </span> 
            Maintaining transparency and community collaboration.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hover:text-cornflower-blue"
          >
            <span className="font-semibold text-gray-800">Security: </span> 
            Providing robust tools for security testing.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hover:text-cornflower-blue"
          >
            <span className="font-semibold text-gray-800">Education: </span> 
            Supporting learning and skill development.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hover:text-cornflower-blue"
          >
            <span className="font-semibold text-gray-800">Community: </span> 
            Fostering a strong, supportive user community.
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}
