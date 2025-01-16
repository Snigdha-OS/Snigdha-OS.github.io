// Toast.tsx
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast = ({ message, onClose }: ToastProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-cornflower-blue text-white px-4 py-2 rounded-lg shadow-lg"
  >
    <div className="flex items-center gap-2">
      <span>{message}</span>
    </div>
    <button
      onClick={onClose}
      className="absolute top-0 right-0 p-1 text-white hover:bg-cornflower-blue/80 rounded-full"
      aria-label="Close toast"
    >
      &times;
    </button>
  </motion.div>
);
