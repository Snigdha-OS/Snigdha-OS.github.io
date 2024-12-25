import { MapPin } from 'lucide-react';
import { type Mirror } from '../../types/download';
import { type UserLocation } from '../../lib/location';

interface SuggestedMirrorProps {
  mirror: Mirror;
  userLocation: UserLocation;
  onSelect: (mirror: Mirror) => void;
}

export function SuggestedMirror({ mirror, userLocation, onSelect }: SuggestedMirrorProps) {
  return (
    <div className="bg-white/90 backdrop-blur-lg p-6 rounded-lg shadow-lg border-2 border-cornflower-blue hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-5">
        <MapPin className="h-6 w-6 text-cornflower-blue" />
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">Suggested Mirror</h3>
          <p className="text-sm text-gray-600">Based on your location: {userLocation.city}, {userLocation.country}</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-gray-900 text-lg">{mirror.name}</p>
        <p className="text-sm text-gray-600">{mirror.location}</p>
        
        <button
          onClick={() => onSelect(mirror)}
          className="w-full mt-4 px-5 py-3 bg-cornflower-blue text-white rounded-lg hover:bg-blue-600 transition-colors ease-in-out"
        >
          Use This Mirror
        </button>
      </div>
    </div>
  );
}
