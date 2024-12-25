import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  delay?: number;
}

export function TestimonialCard({ content, author, role, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
      className="bg-gradient-to-r from-cornflower-blue/10 to-cornflower-blue/30 p-8 rounded-lg shadow-lg relative transition-transform"
    >
      <Quote className="absolute top-4 right-4 h-10 w-10 text-cornflower-blue/20 transition-transform transform hover:scale-110" />
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{content}</p>
      <div>
        <p className="font-semibold text-gray-900 text-lg">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
}
