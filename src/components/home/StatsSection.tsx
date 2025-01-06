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
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      const repos = [];
      let page = 1;

      // Fetch all repositories using pagination
      while (true) {
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
        );
        const reposPage = await reposResponse.json();
        if (reposPage.length === 0) break;
        repos.push(...reposPage);
        page++;
      }

      const starsCount = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

      setStats([
        { label: "Followers", value: `${userData.followers}`, icon: Users },
        { label: "Repositories", value: `${repos.length}`, icon: Wrench },
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
    <section className="py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A snapshot of our growing community and contributions.
          </motion.p>
        </div>

        {/* Stats Grid */}
        {error ? (
          <div className="text-center text-red-500 font-medium">
            Unable to fetch data. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                }}
                className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300"
              >
                {/* Icon */}
                <motion.div
                  className="p-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className="h-12 w-12 text-white" />
                </motion.div>
                {/* Stat Value */}
                <motion.p
                  className="text-4xl font-extrabold text-gray-900"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.2,
                    duration: 0.6,
                  }}
                >
                  {stat.value}
                </motion.p>
                {/* Stat Label */}
                <p className="mt-2 text-lg font-medium text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
