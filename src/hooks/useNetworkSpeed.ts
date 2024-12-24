import { useState, useEffect } from 'react';
import { measureNetworkSpeed } from '@/lib/network';

export function useNetworkSpeed() {
  const [speed, setSpeed] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function checkSpeed() {
      try {
        const measuredSpeed = await measureNetworkSpeed();
        setSpeed(measuredSpeed);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to measure network speed'));
      } finally {
        setIsLoading(false);
      }
    }

    checkSpeed();
  }, []);

  return { speed, isLoading, error };
}