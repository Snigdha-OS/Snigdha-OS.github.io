import { type Mirror } from '@/types/download';

export const americasMirrors: Mirror[] = [
  {
    id: 'us-east',
    name: 'US East Mirror',
    location: 'New York, USA',
    url: 'https://mirror-us-east.snigdhaos.org',
    speed: 130,
  },
  {
    id: 'us-west',
    name: 'US West Mirror',
    location: 'San Francisco, USA',
    url: 'https://mirror-us-west.snigdhaos.org',
    speed: 125,
  },
  {
    id: 'ca-central',
    name: 'Canada Mirror',
    location: 'Toronto, Canada',
    url: 'https://mirror-ca.snigdhaos.org',
    speed: 115,
  },
  {
    id: 'br-sao',
    name: 'Brazil Mirror',
    location: 'São Paulo, Brazil',
    url: 'https://mirror-br.snigdhaos.org',
    speed: 90,
  },
];