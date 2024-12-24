import { africanMirrors } from './africa';
import { americasMirrors } from './americas';
import { asianMirrors } from './asia';
import { europeanMirrors } from './europe';
import { oceaniaMirrors } from './oceania';
import { type Mirror } from '@/types/download';

export const mirrors: Mirror[] = [
  ...americasMirrors,
  ...europeanMirrors,
  ...asianMirrors,
  ...oceaniaMirrors,
  ...africanMirrors,
];