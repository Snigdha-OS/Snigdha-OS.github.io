export async function measureNetworkSpeed(): Promise<number> {
  try {
    const startTime = performance.now();
    
    const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch, status: ${response.status}`);
    }

    const endTime = performance.now();
    const duration = endTime - startTime;

    // Check if Content-Length is available, if not fall back to measuring response size from text.
    const contentLength = response.headers.get('Content-Length');
    const size = contentLength ? parseInt(contentLength, 10) : new Blob([await response.text()]).size;

    if (size === 0) {
      throw new Error('Response has no content size');
    }

    // Calculate speed in Mbps (megabits per second)
    const speedMbps = (size * 8) / (duration / 1000) / 1000000;

    const roundedSpeed = Math.round(speedMbps * 100) / 100;
    console.log(`Measured network speed: ${roundedSpeed} Mbps`);
    return roundedSpeed;
  } catch (error) {
    console.error('Error measuring network speed:', error);
    throw new Error('Network speed measurement failed');
  }
}
