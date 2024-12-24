export async function measureNetworkSpeed(): Promise<number> {
  const startTime = performance.now();
  const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace', { cache: 'no-store' });
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  if (!response.ok) {
    throw new Error('Failed to measure network speed');
  }
  
  const data = await response.text();
  const size = new Blob([data]).size;
  
  // Calculate speed in Mbps (megabits per second)
  const speedMbps = (size * 8) / (duration / 1000) / 1000000;
  
  return Math.round(speedMbps * 100) / 100;
}