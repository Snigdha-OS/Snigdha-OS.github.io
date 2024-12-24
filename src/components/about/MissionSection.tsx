import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export function MissionSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm"
    >
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-6 w-6 text-cornflower-blue" />
        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
      </div>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 leading-relaxed">
          Snigdha OS aims to provide security professionals and enthusiasts with the most comprehensive, 
          reliable, and up-to-date collection of security tools. Our mission is to enable the security 
          community to perform professional-grade security auditing and penetration testing with a 
          standardized, well-documented platform.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Core Values</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Open Source: Maintaining transparency and community collaboration</li>
          <li>Security: Providing robust tools for security testing</li>
          <li>Education: Supporting learning and skill development</li>
          <li>Community: Fostering a strong, supportive user community</li>
        </ul>
      </div>
    </motion.div>
  );
}