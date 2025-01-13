import { motion } from 'framer-motion';
import { MapPin, Users, Book, Github } from 'lucide-react'; // Added Github icon
import type { GithubUser } from '../../lib/github';

interface TeamMemberCardProps {
  user: GithubUser;
  role: string;
  description: string;
}

export function TeamMemberCard({ user, role, description }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-gradient-to-r from-white to-blue-50 shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between"
    >
      <div className="flex items-start gap-4">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-cornflower-blue"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{user.name || user.login}</h3>
          <p className="text-sm text-cornflower-blue font-medium">{role}</p>
          {user.location && (
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-gray-600 flex-grow">{description}</p>
      
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{user.followers.toLocaleString()} followers</span>
        </div>
        <div className="flex items-center gap-1">
          <Book className="h-4 w-4" />
          <span>{user.public_repos} repos</span>
        </div>
      </div>
      
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm text-cornflower-blue hover:underline transition-colors duration-200"
      >
        <Github className="h-4 w-4 mr-2" /> {/* Added spacing after the icon */}
        View GitHub Profile →
      </a>
    </motion.div>
  );
}
