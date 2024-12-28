import { MapPin, Download } from 'lucide-react';
import { type Mirror } from '../../types/download';
import { type UserLocation } from '../../lib/location';
import { motion } from 'framer-motion';

interface SuggestedMirrorProps {
  mirror: Mirror;
  userLocation: UserLocation;
  onSelect: (mirror: Mirror) => void;
}

export function SuggestedMirror({ mirror, userLocation, onSelect }: SuggestedMirrorProps) {
  return (
    <div className="bg-white/90 backdrop-blur-lg p-6 rounded-lg shadow-lg border-2 border-cornflower-blue hover:shadow-xl transition-shadow ease-in-out duration-300">
      <div className="flex items-center gap-4 mb-5">
        <MapPin className="h-7 w-7 text-cornflower-blue" />
        <div>
          <h3 className="text-3xl font-semibold text-gray-900">Suggested Mirror</h3>
          <p className="text-sm text-gray-600">Based on your location: {userLocation.city}, {userLocation.country}</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-semibold text-2xl text-gray-900">{mirror.name}</p>
        <p className="text-sm text-gray-600">{mirror.location}</p>
        
        <motion.button
          onClick={() => onSelect(mirror)}
          className="w-full mt-4 px-6 py-3 bg-cornflower-blue text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-all ease-in-out flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }} // Zoom effect on hover
          whileTap={{ scale: 0.98 }} // Slight zoom effect when clicked
        >
          <Download className="h-5 w-5" />
          <span>Download</span>
        </motion.button>
      </div>
    </div>
  );
}
