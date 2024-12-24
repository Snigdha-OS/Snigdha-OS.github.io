import { motion } from 'framer-motion';
import { Terminal, Shield, Wifi, Globe, Lock, Database } from 'lucide-react';

const tools = [
  { name: 'Network Analysis', icon: Globe, color: 'text-blue-500' },
  { name: 'Penetration Testing', icon: Shield, color: 'text-green-500' },
  { name: 'Wireless Security', icon: Wifi, color: 'text-purple-500' },
  { name: 'Cryptography', icon: Lock, color: 'text-red-500' },
  { name: 'Forensics', icon: Database, color: 'text-yellow-500' },
  { name: 'Exploitation', icon: Terminal, color: 'text-pink-500' },
];

export function ToolsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Security Tools Suite</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive toolkit for security professionals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <tool.icon className={`h-10 w-10 ${tool.color} mb-4`} />
              <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}