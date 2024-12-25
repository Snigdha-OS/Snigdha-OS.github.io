import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { navigation } from '../../data/navigation';

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256" width="32" height="32">
      <path fill="#6495ed" fill-rule="evenodd" d="m112.8 111.5q25.7 27 1.7 53.9-21.4 20.9-41.9 22.9c8.6-7.4 11-19.8 5.8-29.9q-26.1-27.2-39.2-47.7-15.1-39.6 40.9-53.8 9.4-15.5 91.4-55.6c15.4-4.4 31.8 2.8 38.9 17.2 7 14.4 2.8 31.8-10.2 41.3l-112.8 7.1q-1.9 20.7 25.4 44.6zm-35.5-43.4c-11.4 3.4-26.3 9.6-30.2 20.4-2 5.8-0.9 12.1 1.1 17.7 10.5 16.1 24.2 31.5 37.5 45.3l1 1.1 0.7 1.3c2.8 5.5 4 11.5 3.7 17.4 6-3.7 11.4-8.2 16.2-12.8 12.4-14.2 11.3-26.2-1.5-39.8-14.4-12.7-29.3-30.2-28.5-50.6zm124.1-45.1c-4.8-9.8-15.8-14.9-26.4-12.3-20.9 10.3-42.3 21.1-62.1 33.2-3.7 2.2-12.5 7.7-18.6 12.5l102.1-6.4c7.4-6.8 9.5-17.8 5-27z"/>
      <path fill="#6495ed" fill-rule="evenodd" d="m143.8 144.3q-25.7-26.9-1.8-53.9 21.5-20.8 42-22.8c-8.6 7.4-11 19.7-5.9 29.8q26.2 27.2 39.3 47.8 15 39.6-40.9 53.7-9.4 15.5-91.5 55.7c-15.4 4.4-31.7-2.9-38.8-17.3-7-14.4-2.8-31.7 10.1-41.3l112.8-7.1q2-20.7-25.3-44.6zm35.5 43.5c11.4-3.4 26.3-9.6 30.2-20.5 2-5.7 0.9-12-1.2-17.6-10.4-16.1-24.2-31.5-37.4-45.4l-1.1-1-0.6-1.3c-2.8-5.5-4-11.5-3.8-17.4-5.9 3.6-11.4 8.2-16.1 12.8-12.5 14.1-11.3 26.2 1.4 39.7 14.5 12.7 29.4 30.3 28.6 50.7zm-124.1 45.1c4.8 9.7 15.8 14.8 26.3 12.2 20.9-10.2 42.3-21 62.2-33.1 3.7-2.2 12.5-7.7 18.5-12.6l-102 6.5c-7.4 6.8-9.5 17.8-5 27z"/>
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold text-cornflower-blue">Snigdha OS</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2',
                  location.pathname === item.href
                    ? 'text-cornflower-blue'
                    : 'text-gray-600 hover:text-cornflower-blue'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2',
                  location.pathname === item.href
                    ? 'text-cornflower-blue bg-blue-50'
                    : 'text-gray-600 hover:text-cornflower-blue hover:bg-blue-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}