import { Mirror } from '@/types/download';

export const mirrors: Mirror[] = [
  {
    id: 'us-east',
    name: 'US East Mirror',
    location: 'New York, USA',
    url: 'https://mirror-east.snigdhaos.org',
    speed: 120,
  },
  {
    id: 'eu-central',
    name: 'EU Central Mirror',
    location: 'Frankfurt, Germany',
    url: 'https://mirror-eu.snigdhaos.org',
    speed: 100,
  },
  {
    id: 'asia-east',
    name: 'Asia East Mirror',
    location: 'Singapore',
    url: 'https://mirror-asia.snigdhaos.org',
    speed: 80,
  },
];