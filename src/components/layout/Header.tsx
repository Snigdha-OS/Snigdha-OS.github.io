import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  // Use location hook to get the current route path for active link checking
  const location = useLocation();

  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Function to check if the current path is active for styling the active link
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="/snigdhaos-logo.svg"
              alt="Snigdha OS"
              className="h-12 w-12 group-hover:scale-125 transition-transform duration-300"
            />
            <span className="font-extrabold text-3xl tracking-wide text-[#6495ED] group-hover:text-white transition-colors duration-300">
              SNIGDHA OS
            </span>
          </Link>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#6495ED]"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open/close state
          >
            {isMenuOpen ? (
              // If menu is open, show 'X' icon
              <X className="h-7 w-7 animate-spin-reverse" />
            ) : (
              // If menu is closed, show 'Menu' icon
              <Menu className="h-7 w-7 animate-spin" />
            )}
          </button>

          {/* Desktop navigation links (hidden on mobile) */}
          <nav className="hidden md:flex space-x-10">
            {/* Render navigation links */}
            <NavLinks isActive={isActive} closeMenu={() => setIsMenuOpen(false)} animate />
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={`${
            // Apply fade-in or fade-out animation based on the menu state
            isMenuOpen ? 'animate-fade-in-down' : 'animate-fade-out-up'
          } md:hidden overflow-hidden transition-all duration-500`}
        >
          {/* Only render the mobile menu if it is open */}
          {isMenuOpen && (
            <nav className="mt-4">
              {/* Mobile menu styling */}
              <div className="flex flex-col space-y-4 bg-gray-800 p-5 rounded-lg shadow-lg">
                {/* Render navigation links in the mobile menu */}
                <NavLinks
                  isActive={isActive}
                  closeMenu={() => setIsMenuOpen(false)}
                  animate
                />
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Global Keyframe Animations (inline style tag) */}
      {/* These animations control the fade-in and fade-out effects for menu items */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-out-up {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}

// Navigation links component
function NavLinks({
  isActive, // Function to check if a link is active
  closeMenu, // Function to close the mobile menu after selecting a link
  animate, // Whether to apply animation for the links
}: {
  isActive: (path: string) => boolean;
  closeMenu: () => void;
  animate?: boolean;
}) {
  return (
    <ul className="space-y-4 md:space-y-0 md:flex md:space-x-10">
      {/* Loop through paths and labels to create navigation links */}
      {['/', '/about', '/download', '/donors', '/maintainers'].map((path, idx) => {
        const labels = ['Home', 'About', 'Download', 'Donors', 'Maintainers'];
        return (
          <li
            key={path}
            className={`${
              // Add animation delay if `animate` is true
              animate ? `animate-fade-in-up delay-${idx * 100}` : ''
            }`}
          >
            <Link
              to={path}
              className={`${
                // If the link is active, apply custom active styles
                isActive(path)
                  ? 'text-[#6495ED] underline underline-offset-4 decoration-2'
                  : 'text-gray-300 hover:text-[#6495ED]'
              } font-medium transition-all duration-300 hover:scale-110`}
              onClick={closeMenu} // Close the mobile menu when a link is clicked
            >
              {labels[idx]} {/* Display label for the link */}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
