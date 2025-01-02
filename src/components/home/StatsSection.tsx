import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Wrench, Star } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
}

export function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([
    { label: "Active Users", value: "Loading...", icon: Users },
    { label: "Security Tools", value: "Loading...", icon: Wrench },
    { label: "GitHub Stars", value: "Loading...", icon: Star },
  ]);

  const [error, setError] = useState(false);

  const fetchGitHubStats = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      const starsCount = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

      setStats([
        { label: "Followers", value: `${userData.followers}`, icon: Users },
        { label: "Repositories", value: `${reposData.length}`, icon: Wrench },
        { label: "Stars", value: `${starsCount}`, icon: Star },
      ]);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      setError(true);
    }
  };

  useEffect(() => {
    const username = "Snigdha-OS"; // Replace with the desired GitHub username
    fetchGitHubStats(username);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
          <p className="mt-4 text-lg text-gray-600">
            A snapshot of our growing community and contributions.
          </p>
        </div>
        {error ? (
          <div className="text-center text-red-500 font-medium">
            Unable to fetch data. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  className="p-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.p
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-extrabold text-gray-900"
                >
                  {stat.value}
                </motion.p>
                <p className="text-lg font-medium text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
