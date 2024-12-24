import { Wifi } from 'lucide-react';

interface NetworkSpeedProps {
  speed: number;
}

export function NetworkSpeed({ speed }: NetworkSpeedProps) {
  const getRecommendation = (speed: number) => {
    if (speed >= 100) return 'Excellent for fast downloads';
    if (speed >= 50) return 'Good for normal downloads';
    if (speed >= 20) return 'Moderate speed, downloads may take longer';
    return 'Slow connection, consider using a different mirror';
  };

  const getSpeedClass = (speed: number) => {
    if (speed >= 100) return 'text-green-500';
    if (speed >= 50) return 'text-blue-500';
    if (speed >= 20) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Wifi className="h-5 w-5 text-cornflower-blue" />
        <h2 className="text-xl font-semibold text-gray-900">Network Speed</h2>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-bold ${getSpeedClass(speed)}`}>
            {speed} Mbps
          </span>
        </div>
        <p className="text-gray-600">{getRecommendation(speed)}</p>
      </div>
    </div>
  );
}