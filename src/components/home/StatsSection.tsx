import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Star } from 'lucide-react';

// Define a new type for the stats
interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
}

export function StatsSection() {
  // Set initial state for the stats
  const [stats, setStats] = useState<Stat[]>([
    { label: 'Active Users', value: 'Loading...', icon: Users },
    { label: 'Security Tools', value: 'Loading...', icon: Wrench },
    { label: 'GitHub Stars', value: 'Loading...', icon: Star },
  ]);

  // Function to fetch stats from GitHub API
  const fetchGitHubStats = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      // Fetch repositories to count the stars
      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      const starsCount = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
      
      // Set the state with the fetched stats
      setStats([
        { label: ' ', value: `${userData.followers} Followers`, icon: Users },
        { label: ' ', value: `${reposData.length} Repositories`, icon: Wrench },
        { label: ' ', value: `${starsCount} Stars`, icon: Star },
      ]);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  };

  // Fetch stats when the component is mounted
  useEffect(() => {
    const username = 'Snigdha-OS'; // Replace with the desired GitHub username
    fetchGitHubStats(username);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 text-cornflower-blue mx-auto mb-4" />
              <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
