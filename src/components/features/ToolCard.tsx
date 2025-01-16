import { motion } from 'framer-motion';
import { Terminal, Clipboard } from 'lucide-react';
import { useState } from 'react';
import { Toast } from './Toast'; // Make sure to import the Toast component

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  command: string;
}

export function ToolCard({ name, description, category, command }: ToolCardProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(command)
      .then(() => {
        setCopied(true);
        setShowToast(true);
        setTimeout(() => {
          setCopied(false);
          setShowToast(false);
        }, 3000); // Hide toast after 3 seconds
      })
      .catch((error) => console.error('Failed to copy: ', error));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 transform hover:shadow-2xl transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-4 bg-cornflower-blue/20 rounded-full">
          <Terminal className="h-7 w-7 text-cornflower-blue" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
      </div>

      <p className="text-gray-600 text-lg mb-4">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm font-medium text-cornflower-blue">{category}</span>
        <div className="flex items-center gap-2">
          <code className="text-sm bg-gray-100 px-3 py-1 rounded text-gray-800">{command}</code>
          <button
            onClick={handleCopyClick}
            className="p-2 bg-cornflower-blue/20 rounded-full hover:bg-cornflower-blue/30 transition-all"
            aria-label="Copy command"
          >
            {copied ? (
              <span className="text-sm text-cornflower-blue">Copied!</span>
            ) : (
              <Clipboard className="h-5 w-5 text-cornflower-blue" />
            )}
          </button>
        </div>
      </div>

      {showToast && (
        <Toast
          message="Command copied! Paste it in your terminal with Ctrl + Shift + V (Cmd + Shift + V on Mac)"
          onClose={() => setShowToast(false)}
        />
      )}
    </motion.div>
  );
}
