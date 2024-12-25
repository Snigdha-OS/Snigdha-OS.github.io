import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Dummy list of sponsors with GitHub usernames
const keySponsors = [
  {
    username: 'TIAsCode', // GitHub username
    description: 'Enterprise Partner & Server Provider',
    amount: '₹82,025.36', // Example of amount, could be fetched or hardcoded
  },
  {
    username: 'ixintl', // GitHub username
    description: 'Strategic Development Partner',
    amount: '₹54,399.36', // Example of amount, could be fetched or hardcoded
  },
];

async function fetchGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

export function KeySponsors() {
  const [sponsorsData, setSponsorsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchSponsorsData = async () => {
      const sponsorsWithData = await Promise.all(
        keySponsors.map(async (sponsor) => {
          const user = await fetchGitHubUser(sponsor.username);
          return {
            ...sponsor,
            name: user.name || sponsor.username, // Use GitHub name or fallback to username
            avatar_url: user.avatar_url, // Fetch the GitHub profile picture
          };
        })
      );
      setSponsorsData(sponsorsWithData);
    };

    fetchSponsorsData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-cornflower-blue/5 to-blue-50/50 rounded-2xl p-8">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
        Key Sponsors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sponsorsData.map((sponsor, index) => (
          <motion.div
            key={sponsor.username}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-cornflower-blue/20 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 bg-cornflower-blue/10 rounded-lg shadow-sm">
                {/* Displaying the profile picture */}
                <img 
                  src={sponsor.avatar_url} 
                  alt={sponsor.name} 
                  className="h-10 w-10 rounded-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{sponsor.name}</h3>
                <p className="text-sm text-gray-600">{sponsor.description}</p>
                <p className="text-lg text-gray-800 mt-3 font-semibold">
                  Amount: <span className="text-green-600">{sponsor.amount}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
