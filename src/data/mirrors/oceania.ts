import { type Mirror } from '@/types/download';

export const oceaniaMirrors: Mirror[] = [
  {
    id: 'au-sydney',
    name: 'Australia Mirror',
    location: 'Sydney, Australia',
    url: 'https://mirror-au.snigdhaos.org',
    speed: 100,
  },
  {
    id: 'nz-auckland',
    name: 'New Zealand Mirror',
    location: 'Auckland, New Zealand',
    url: 'https://mirror-nz.snigdhaos.org',
    speed: 95,
  },
];