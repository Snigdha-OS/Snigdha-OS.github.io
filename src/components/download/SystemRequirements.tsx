import { Check } from 'lucide-react';

const requirements = [
  'Minimum 2GB RAM (4GB recommended)',
  '20GB disk space',
  'CPU with virtualization support',
  'DVD drive / USB boot support',
  'Internet connectivity for updates',
];

export function SystemRequirements() {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">System Requirements</h2>
      <ul className="space-y-4">
        {requirements.map((req) => (
          <li key={req} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 transition-all duration-300 ease-in-out transform hover:scale-110" />
            <span className="text-gray-600">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
