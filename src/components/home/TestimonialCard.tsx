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
      transition={{ delay }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg relative"
    >
      <Quote className="absolute top-4 right-4 h-8 w-8 text-cornflower-blue/20" />
      <p className="text-gray-600 mb-4">{content}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
}