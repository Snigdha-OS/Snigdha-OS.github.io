import { type Mirror } from '../../types/download';

export const europeanMirrors: Mirror[] = [
  {
    id: 'de-frankfurt',
    name: 'Germany Mirror',
    location: 'Frankfurt, Germany',
    url: 'https://mirror-de.snigdhaos.org',
    speed: 130,
  },
  {
    id: 'uk-london',
    name: 'UK Mirror',
    location: 'London, UK',
    url: 'https://mirror-uk.snigdhaos.org',
    speed: 125,
  },
  {
    id: 'fr-paris',
    name: 'France Mirror',
    location: 'Paris, France',
    url: 'https://mirror-fr.snigdhaos.org',
    speed: 120,
  },
  {
    id: 'nl-amsterdam',
    name: 'Netherlands Mirror',
    location: 'Amsterdam, Netherlands',
    url: 'https://mirror-nl.snigdhaos.org',
    speed: 135,
  },
];