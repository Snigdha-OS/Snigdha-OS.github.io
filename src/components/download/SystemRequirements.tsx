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
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">System Requirements</h2>
      <ul className="space-y-3">
        {requirements.map((req) => (
          <li key={req} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-600">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}