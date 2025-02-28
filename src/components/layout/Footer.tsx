import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube, Book, MessageSquare, Newspaper, HelpCircle, ChevronUp } from 'lucide-react';

// Define the footer navigation structure with TypeScript
interface FooterLink {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const footerNavigation: {
  main: FooterLink[];
  resources: FooterLink[];
  community: FooterLink[];
} = {
  main: [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Developers', href: '/developers' },
    { name: 'Donate', href: '/donate' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs', icon: Book },
    { name: 'Blog', href: '/blog', icon: Newspaper },
    { name: 'Support', href: '/support', icon: HelpCircle },
  ],
  community: [
    { name: 'Community', href: '/community', icon: MessageSquare },
    { name: 'GitHub', href: 'https://github.com/Snigdha-OS', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/SnigdhaOS', icon: Twitter },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Snigdha OS</h3>
            <p className="text-sm leading-6">
              The most advanced penetration testing distribution, designed for security professionals and enthusiasts.
            </p>
            <div className="flex space-x-4">
              {footerNavigation.community.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-white transition transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition transform hover:scale-105"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-2 hover:text-white transition transform hover:scale-105"
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Community</h3>
            <ul className="space-y-3">
              {footerNavigation.community.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 hover:text-white transition transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {currentYear} Snigdha OS - All rights reserved. Powered by{' '}
            <b className="text-cornflower-blue">Tonmoy Infrastructure™</b>
          </p>
          <p>
            Developed with ❤️ by{' '}
            <b className="text-cornflower-blue">
              <u>Snigdha OS Open Source Team.</u>
            </b>
          </p>
          {/* Back-to-Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 p-2 bg-cornflower-blue rounded-full text-white shadow-md hover:shadow-lg transition"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
