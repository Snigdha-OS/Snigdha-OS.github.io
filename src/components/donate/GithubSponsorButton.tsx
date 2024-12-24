import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function GithubSponsorButton() {
  return (
    <motion.a
      href="https://github.com/sponsors/eshanized"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#2ea44f] text-white rounded-lg hover:bg-[#2c974b] transition-colors"
    >
      <Github className="h-5 w-5" />
      Sponsor on GitHub
    </motion.a>
  );
}