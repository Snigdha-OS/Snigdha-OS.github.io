import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function FeatureCard({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div
        className={clsx(
          "relative z-10 rounded-xl bg-white/80 backdrop-blur-md p-6 ring-1 ring-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:ring-cornflower-blue overflow-hidden",
          "flex flex-col items-center justify-center transform group-hover:scale-105"
        )}
        role="presentation"
      >
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent to-cornflower-blue/10 group-hover:to-cornflower-blue/30 transition-all duration-500" />

        {/* Icon with subtle hover animations */}
        <div className="relative mb-4 flex justify-center items-center">
          <Icon
            className="h-14 w-14 text-cornflower-blue transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            aria-hidden="true"
          />
        </div>

        {/* Title with modern typography */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center capitalize leading-snug tracking-wide">
          {title}
        </h3>

        {/* Description with optimized spacing and readability */}
        <p className="text-base text-gray-600 text-center px-6">
          {description}
        </p>
      </div>

      {/* Subtle floating shadow effect */}
      <div
        className="absolute -inset-1 bg-gradient-to-br from-cornflower-blue/10 to-transparent rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
    </motion.div>
  );
}
