import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
        rotate: 2, // Add subtle rotation effect on hover
      }}
      className="relative bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group"
    >
      {/* Floating quote icon */}
      <motion.div
        className="absolute -top-4 -right-4 bg-cornflower-blue/10 p-3 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <Quote className="h-10 w-10 text-cornflower-blue/40 group-hover:scale-110 transition-transform duration-300" />
      </motion.div>

      {/* Testimonial content */}
      <motion.p
        className="text-gray-600 text-lg leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 + delay, duration: 0.8 }}
      >
        <span className="italic text-cornflower-blue/80 font-medium">“</span>
        {content}
        <span className="italic text-cornflower-blue/80 font-medium">”</span>
      </motion.p>

      {/* Author details */}
      <motion.div
        className="flex flex-col items-start"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + delay, duration: 0.6 }}
      >
        <p className="text-gray-900 font-semibold text-lg">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </motion.div>

      {/* Subtle background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cornflower-blue/5 via-cornflower-blue/10 to-cornflower-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 + delay, duration: 0.6 }}
      />
    </motion.div>
  );
}
