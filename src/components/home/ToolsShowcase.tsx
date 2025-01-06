import { motion } from "framer-motion";
import { Terminal, Shield, Wifi, Globe, Lock, Database } from "lucide-react";

const tools = [
  { name: "Network Analysis", icon: Globe, color: "from-blue-500 to-blue-400" },
  { name: "Penetration Testing", icon: Shield, color: "from-green-500 to-green-400" },
  { name: "Wireless Security", icon: Wifi, color: "from-purple-500 to-purple-400" },
  { name: "Cryptography", icon: Lock, color: "from-red-500 to-red-400" },
  { name: "Forensics", icon: Database, color: "from-yellow-500 to-yellow-400" },
  { name: "Exploitation", icon: Terminal, color: "from-pink-500 to-pink-400" },
];

export function ToolsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Security Tools Suite
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive toolkit tailored for security professionals. Explore our powerful tools designed to safeguard and analyze your digital presence.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
              }}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300"
              aria-label={tool.name}
            >
              {/* Icon Section */}
              <div
                className={`p-6 rounded-full bg-gradient-to-br ${tool.color} shadow-lg mb-6 transform transition-transform`}
              >
                <tool.icon className="h-14 w-14 text-white" />
              </div>
              {/* Tool Name */}
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                {tool.name}
              </h3>
              <p className="mt-2 text-gray-500 text-center text-sm">
                Explore cutting-edge features for {tool.name.toLowerCase()}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
