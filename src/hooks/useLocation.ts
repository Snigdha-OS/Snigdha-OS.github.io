import { useState, useEffect } from 'react';
import { getUserLocation, type UserLocation } from '../lib/location';

export function useLocation() {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const userLocation = await getUserLocation();
        setLocation(userLocation);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to get location'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchLocation();
  }, []);

  return { location, isLoading, error };
}