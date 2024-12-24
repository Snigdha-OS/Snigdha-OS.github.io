import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
      <ul className="space-y-3">
        <li>
          <a 
            href="mailto:contact@snigdhaos.org"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            contact@snigdhaos.org
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Bangalore, India</span>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+91 (080) 4567-8900</span>
        </li>
      </ul>
    </div>
  );
}