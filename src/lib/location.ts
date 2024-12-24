export interface UserLocation {
  country: string;
  city: string;
  continent: string;
}

export async function getUserLocation(): Promise<UserLocation> {
  const response = await fetch('https://ipapi.co/json/');
  if (!response.ok) {
    throw new Error('Failed to fetch location');
  }
  const data = await response.json();
  return {
    country: data.country_name,
    city: data.city,
    continent: data.continent_code,
  };
}