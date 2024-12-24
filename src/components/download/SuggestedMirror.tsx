import { MapPin } from 'lucide-react';
import { type Mirror } from '@/types/download';
import { type UserLocation } from '@/lib/location';

interface SuggestedMirrorProps {
  mirror: Mirror;
  userLocation: UserLocation;
  onSelect: (mirror: Mirror) => void;
}

export function SuggestedMirror({ mirror, userLocation, onSelect }: SuggestedMirrorProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-2 border-cornflower-blue">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-cornflower-blue" />
        <div>
          <h3 className="font-medium text-gray-900">Suggested Mirror</h3>
          <p className="text-sm text-gray-500">Based on your location: {userLocation.city}, {userLocation.country}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="font-medium text-gray-900">{mirror.name}</p>
        <p className="text-sm text-gray-600">{mirror.location}</p>
        <button
          onClick={() => onSelect(mirror)}
          className="w-full mt-2 px-4 py-2 bg-cornflower-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Use This Mirror
        </button>
      </div>
    </div>
  );
}