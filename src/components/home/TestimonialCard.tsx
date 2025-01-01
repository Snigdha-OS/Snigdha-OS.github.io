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
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      }}
      className="relative bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group"
    >
      {/* Floating quote icon */}
      <div className="absolute -top-4 -right-4 bg-cornflower-blue/10 p-3 rounded-full">
        <Quote className="h-10 w-10 text-cornflower-blue/40 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Testimonial content */}
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        <span className="italic text-cornflower-blue/80 font-medium">“</span>
        {content}
        <span className="italic text-cornflower-blue/80 font-medium">”</span>
      </p>

      {/* Author details */}
      <div className="flex flex-col items-start">
        <p className="text-gray-900 font-semibold text-lg">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cornflower-blue/5 via-cornflower-blue/10 to-cornflower-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
    </motion.div>
  );
}
