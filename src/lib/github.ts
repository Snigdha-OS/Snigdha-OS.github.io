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

// Helper function to check cache expiration
function isCacheExpired(cacheKey: string): boolean {
  const cachedData = localStorage.getItem(cacheKey);
  if (!cachedData) return true;
  
  const { timestamp } = JSON.parse(cachedData);
  const currentTime = Date.now();
  const cacheExpirationTime = 3600000; // Cache expiration time in ms (1 hour)
  
  return currentTime - timestamp > cacheExpirationTime;
}

// Function to get from cache or make an API request
async function getFromCacheOrApi(url: string, cacheKey: string) {
  // Check if cached data exists and is valid
  if (!isCacheExpired(cacheKey)) {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      console.log('Serving from cache');
      return JSON.parse(cachedData).data;
    }
  }

  // If not cached or cache expired, make the API request
  console.log('Fetching from GitHub API');
  const response = await fetch(url);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error(`GitHub API Error (${response.status}):`, errorData);
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();

  // Cache the response with a timestamp
  const cacheData = {
    data,
    timestamp: Date.now(),
  };

  localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  return data;
}

export async function fetchGithubUser(username: string): Promise<GithubUser> {
  const cacheKey = `github-user-${username}`;
  const url = `${GITHUB_API_URL}/users/${username}`;

  return getFromCacheOrApi(url, cacheKey);
}

export async function fetchOrgRepos(org: string): Promise<GithubRepo[]> {
  const cacheKey = `github-org-repos-${org}`;
  const url = `${GITHUB_API_URL}/orgs/${org}/repos?sort=updated&per_page=100`;

  return getFromCacheOrApi(url, cacheKey);
}
