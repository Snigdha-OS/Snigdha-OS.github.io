import { motion } from "framer-motion";
import { Terminal, Shield, Wifi, Globe, Lock, Database } from "lucide-react";

const tools = [
  { name: "Network Analysis", icon: Globe, color: "text-blue-500" },
  { name: "Penetration Testing", icon: Shield, color: "text-green-500" },
  { name: "Wireless Security", icon: Wifi, color: "text-purple-500" },
  { name: "Cryptography", icon: Lock, color: "text-red-500" },
  { name: "Forensics", icon: Database, color: "text-yellow-500" },
  { name: "Exploitation", icon: Terminal, color: "text-pink-500" },
];

export function ToolsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Security Tools Suite</h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive toolkit tailored for security professionals.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
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
                scale: 1.08,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
              }}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300"
            >
              {/* Icon Section */}
              <div className="p-4 bg-gradient-to-br from-cornflower-blue/10 to-cornflower-blue/30 rounded-full shadow-inner mb-6">
                <tool.icon className={`h-14 w-14 ${tool.color} transition-all`} />
              </div>
              {/* Tool Name */}
              <h3 className="text-xl font-semibold text-gray-800">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
