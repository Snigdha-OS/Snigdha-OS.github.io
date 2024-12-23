import { Octokit } from 'octokit';

const octokit = new Octokit();

export interface Maintainer {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  twitterUsername: string | null;
  followers: number;
  following: number;
}

export async function getMaintainers(): Promise<Maintainer[]> {
  const maintainerUsernames = [
    'eshanized',
    'iconized',
    'alokified',
    'utkrshift',
    'd3v1l0n',
  ];

  const maintainers = await Promise.all(
    maintainerUsernames.map(async (username) => {
      try {
        const { data } = await octokit.rest.users.getByUsername({ username });
        return {
          login: data.login,
          name: data.name,
          avatarUrl: data.avatar_url,
          bio: data.bio,
          location: data.location,
          blog: data.blog,
          twitterUsername: data.twitter_username,
          followers: data.followers,
          following: data.following,
        };
      } catch (error) {
        console.error(`Error fetching data for ${username}:`, error);
        return null;
      }
    })
  );

  return maintainers.filter((m): m is Maintainer => m !== null);
}