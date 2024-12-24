import { type Mirror } from '@/types/download';

export const asianMirrors: Mirror[] = [
  {
    id: 'sg-central',
    name: 'Singapore Mirror',
    location: 'Singapore',
    url: 'https://mirror-sg.snigdhaos.org',
    speed: 120,
  },
  {
    id: 'jp-tokyo',
    name: 'Japan Mirror',
    location: 'Tokyo, Japan',
    url: 'https://mirror-jp.snigdhaos.org',
    speed: 150,
  },
  {
    id: 'in-mumbai',
    name: 'India Mirror',
    location: 'Mumbai, India',
    url: 'https://mirror-in.snigdhaos.org',
    speed: 85,
  },
  {
    id: 'kr-seoul',
    name: 'South Korea Mirror',
    location: 'Seoul, South Korea',
    url: 'https://mirror-kr.snigdhaos.org',
    speed: 140,
  },
];