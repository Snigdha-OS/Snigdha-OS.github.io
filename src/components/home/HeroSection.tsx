import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ChevronRight, Terminal } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Terminal className="mx-auto h-20 w-20 text-cornflower-blue" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            The Future of
            <span className="text-cornflower-blue"> Security Testing </span>
            is Here
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto"
          >
            Snigdha OS redefines penetration testing with advanced tools, intuitive interface, and unmatched performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              to="/download"
              className="group relative rounded-lg bg-cornflower-blue px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-600 transition-colors overflow-hidden"
            >
              <span className="relative flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Now
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-semibold leading-6 text-white flex items-center group"
            >
              Learn more 
              <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}