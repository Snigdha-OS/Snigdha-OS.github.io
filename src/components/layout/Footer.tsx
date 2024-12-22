import { useEffect, useState } from 'react';
import { Github } from 'lucide-react'; // Importing the 'Github' icon from the 'lucide-react' library

// Define and export the Footer functional component
export function Footer() {
  // Declare a state variable `githubFollowers` to store the number of GitHub followers.
  // The initial value is set to `null`. The `setGithubFollowers` function is used to update this value.
  const [githubFollowers, setGithubFollowers] = useState<number | null>(null);

  // useEffect hook is used to run side effects. Here, it runs the effect to fetch GitHub follower count.
  useEffect(() => {
    // Define an asynchronous function to fetch data from the GitHub API.
    async function fetchGithubFollowers() {
      // Make a GET request to GitHub API for the user 'Snigdha-OS'.
      const response = await fetch('https://api.github.com/users/Snigdha-OS');
      
      // Parse the response JSON to extract the data.
      const data = await response.json();

      // Check if the `followers` property exists in the fetched data.
      if (data.followers !== undefined) {
        // Update the state with the number of followers.
        setGithubFollowers(data.followers);
      }
    }
    
    // Call the `fetchGithubFollowers` function to fetch the data.
    fetchGithubFollowers();
  }, []); // Empty dependency array means this effect runs only once after the component mounts.


  return (
    <footer className="relative bg-[#1a202c] text-white py-16 overflow-hidden">
      {/* Background Bubble Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bubble-container"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Snigdha OS Section */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#6495ED]">Snigdha OS</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Arch-based Linux Distribution for Penetration Testing and Ethical Hacking! Experience power and simplicity
              like never before.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#6495ED]">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://blog.snigdhaos.org/" className="hover:text-[#6495ED] transition-colors">
                  Blog <span className="text-xs text-gray-400">(Upcoming!)</span>
                </a>
              </li>
              <li>
                <a href="https://forum.snigdhaos.org/" className="hover:text-[#6495ED] transition-colors">
                  Forums <span className="text-xs text-gray-400">(Maintenance!)</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6495ED] transition-colors">
                  Community <span className="text-xs text-gray-400">(Upcoming!)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#6495ED]">Documentation</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/category/installation"
                  className="hover:text-[#6495ED] transition-colors"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/category/user-guide"
                  className="hover:text-[#6495ED] transition-colors"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="https://snigdha-os.github.io/documentation/introduction/release_notes"
                  className="hover:text-[#6495ED] transition-colors"
                >
                  Release Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#6495ED]">Connect</h3>
            <div className="flex items-center space-x-5">
              <a
                href="https://github.com/Snigdha-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-[#6495ED] transition-colors px-4 py-3 rounded-lg shadow-lg"
              >
                <Github className="h-7 w-7 text-white" />
                {githubFollowers !== null && (
                  <div className="text-white">
                    <span className="text-sm">Followers</span>
                    <span className="block text-lg font-bold">{githubFollowers}</span>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Logo */}
        {/* <div className="flex justify-center mt-8">
          <img
            src="/snigdhaos-logo.svg" // Replace with your actual logo path
            alt="Snigdha OS Logo"
            className="h-16 w-auto"
          />
        </div> */}

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-[#6495ED]">Snigdha OS</span>. Powered by <span className="font-bold text-[#6495ED]">Tonmoy Infrastructure™. </span>
            All rights reserved.
          </p>
          <p className="mt-2">Built with ❤️ by the Snigdha OS team.</p>
          {/* <p className="mt-4 text-xs text-gray-500">
            Powered by <span className="font-bold text-[#6495ED]">Tonmoy Infrastructure™</span>
          </p> */}
        </div>
      </div>

      {/* Inline Styles for Bubble Animation */}
      <style>{`
        .bubble-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        /* Creating multiple bubbles */
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(100, 149, 237, 0.7);
          animation: bubble-move 6s infinite;
          opacity: 0.7;
        }

        .bubble:nth-child(1) { width: 50px; height: 50px; animation-duration: 7s; top: 80%; left: 30%; }
        .bubble:nth-child(2) { width: 60px; height: 60px; animation-duration: 5s; top: 70%; left: 40%; }
        .bubble:nth-child(3) { width: 40px; height: 40px; animation-duration: 6s; top: 80%; left: 50%; }
        .bubble:nth-child(4) { width: 70px; height: 70px; animation-duration: 8s; top: 60%; left: 20%; }
        .bubble:nth-child(5) { width: 80px; height: 80px; animation-duration: 10s; top: 90%; left: 60%; }
        .bubble:nth-child(6) { width: 50px; height: 50px; animation-duration: 6s; top: 50%; left: 75%; }

        @keyframes bubble-move {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateX(150px) translateY(-300px);
            opacity: 0.5;
          }
          100% {
            transform: translateX(0) translateY(-500px);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}
