import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { DownloadButton } from '@/components/download/DownloadButton';
import { SystemRequirements } from '@/components/download/SystemRequirements';
import { Checksum } from '@/components/download/Checksum';
import { MirrorList } from '@/components/download/MirrorList';
import { NetworkSpeed } from '@/components/download/NetworkSpeed';
import { SuggestedMirror } from '@/components/download/SuggestedMirror';
import { downloads } from '@/data/download';
import { mirrors } from '@/data/mirrors';
import { type Mirror } from '@/types/download';
import { useNetworkSpeed } from '@/hooks/useNetworkSpeed';
import { useLocation } from '@/hooks/useLocation';

export default function Download() {
  const latestVersion = downloads[0];
  const [selectedMirror, setSelectedMirror] = useState<Mirror | null>(null);
  const { speed, isLoading: loadingSpeed } = useNetworkSpeed();
  const { location, isLoading: loadingLocation } = useLocation();

  const handleMirrorSelect = (mirror: Mirror) => {
    setSelectedMirror(mirror);
  };

  // Sort mirrors by speed and location
  const sortedMirrors = [...mirrors].sort((a, b) => {
    if (!speed) return 0;
    const aDiff = Math.abs(a.speed - speed);
    const bDiff = Math.abs(b.speed - speed);
    return aDiff - bDiff;
  });

  // Get suggested mirror based on location and speed
  const suggestedMirror = location ? sortedMirrors[0] : null;

  if (loadingSpeed || loadingLocation) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-cornflower-blue" />
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Download Snigdha OS</h1>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest version of the most advanced penetration testing distribution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DownloadButton {...latestVersion} />
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Download Mirrors</h2>
              <p className="text-sm text-gray-600 mb-4">
                Mirrors are sorted by compatibility with your connection speed for optimal download performance
              </p>
              <MirrorList 
                mirrors={sortedMirrors}
                onSelect={handleMirrorSelect}
              />
            </div>
            
            <Checksum 
              sha256={latestVersion.sha256}
              gpg={latestVersion.gpg}
            />
          </div>
          
          <div className="space-y-6">
            {speed !== null && <NetworkSpeed speed={speed} />}
            {location && suggestedMirror && (
              <SuggestedMirror
                mirror={suggestedMirror}
                userLocation={location}
                onSelect={handleMirrorSelect}
              />
            )}
            <SystemRequirements />
          </div>
        </div>
      </div>
    </div>
  );
}