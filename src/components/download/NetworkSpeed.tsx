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
    <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-3 mb-6">
        <Wifi className="h-8 w-8 text-cornflower-blue" />
        <h2 className="text-3xl font-extrabold text-gray-900">Network Speed</h2>
      </div>
      
      <div className="space-y-5">
        <div className="flex items-center gap-5">
          <span className={`text-5xl font-bold ${getSpeedClass(speed)}`}>
            {speed} Mbps
          </span>
        </div>
        <p className="text-lg text-gray-600">{getRecommendation(speed)}</p>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className={`font-medium text-gray-800 ${getSpeedClass(speed)}`}>Speed Quality:</span>
          <span className={`${getSpeedClass(speed)} font-semibold`}>
            {speed >= 100 ? 'Excellent' : speed >= 50 ? 'Good' : speed >= 20 ? 'Moderate' : 'Poor'}
          </span>
        </div>
      </div>
    </div>
  );
}
