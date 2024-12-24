const GITHUB_API_URL = 'https://api.github.com';

export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  location: string | null;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export async function fetchGithubUser(username: string): Promise<GithubUser> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`GitHub API Error (${response.status}):`, errorData);
      throw new Error(`Failed to fetch user ${username}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching GitHub user ${username}:`, error);
    throw error;
  }
}

export async function fetchOrgRepos(org: string): Promise<GithubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/orgs/${org}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`GitHub API Error (${response.status}):`, errorData);
      throw new Error(`Failed to fetch repositories: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}