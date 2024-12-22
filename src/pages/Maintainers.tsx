import { useEffect, useState } from 'react';
import { Github, Twitter, Globe, MapPin, Users } from 'lucide-react';
import { getMaintainers, type Maintainer } from '../services/github';

export function Maintainers() {
  const [maintainers, setMaintainers] = useState<Maintainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaintainers = async () => {
      try {
        const data = await getMaintainers();
        setMaintainers(data);
      } catch (err) {
        setError('Failed to load maintainers data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMaintainers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl">{error}</p>
          <p className="text-gray-600 mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Maintainers</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These dedicated individuals work tirelessly to make Snigdha OS one of the best Linux distributions available.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maintainers.map((maintainer) => (
            <MaintainerCard key={maintainer.login} maintainer={maintainer} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MaintainerCard({ maintainer }: { maintainer: Maintainer }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl ease-in-out duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={maintainer.avatarUrl}
          alt={maintainer.name || maintainer.login}
          className="w-24 h-24 rounded-full ring-2 ring-indigo-50"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{maintainer.name || maintainer.login}</h2>
          <p className="text-sm text-gray-500">@{maintainer.login}</p>
        </div>
      </div>

      {maintainer.bio && (
        <p className="text-gray-700 mb-4">{maintainer.bio}</p>
      )}

      <div className="space-y-2 mb-4">
        {maintainer.location && (
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5 text-gray-600" />
            <span>{maintainer.location}</span>
          </div>
        )}
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="h-5 w-5 text-gray-600" />
          <span>{maintainer.followers} followers | {maintainer.following} following</span>
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
        <a
          href={`https://github.com/${maintainer.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <Github className="h-6 w-6" />
        </a>
        {maintainer.twitterUsername && (
          <a
            href={`https://twitter.com/${maintainer.twitterUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            <Twitter className="h-6 w-6" />
          </a>
        )}
        {maintainer.blog && (
          <a
            href={maintainer.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200"
          >
            <Globe className="h-6 w-6" />
          </a>
        )}
      </div>
    </div>
  );
}
