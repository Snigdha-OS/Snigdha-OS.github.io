import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function GithubSponsorButton() {
  return (
    <motion.a
      href="https://github.com/sponsors/eshanized"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 px-6 py-3 bg-[#2ea44f] text-white rounded-lg shadow-md hover:bg-[#2c974b] transition-all duration-300 ease-out"
    >
      <Github className="h-5 w-5" />
      <span className="font-semibold">Sponsor on GitHub</span>
    </motion.a>
  );
}
