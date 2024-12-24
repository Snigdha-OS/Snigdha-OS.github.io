import { Users, GitPullRequest, GitCommit } from 'lucide-react';

interface Stats {
  totalContributors: number;
  totalPullRequests: number;
  totalCommits: number;
}

export function ContributorStats({ totalContributors, totalPullRequests, totalCommits }: Stats) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { icon: Users, label: 'Contributors', value: totalContributors },
        { icon: GitPullRequest, label: 'Pull Requests', value: totalPullRequests },
        { icon: GitCommit, label: 'Commits', value: totalCommits },
      ].map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
          <Icon className="h-8 w-8 text-cornflower-blue mb-2" />
          <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      ))}
    </div>
  );
}