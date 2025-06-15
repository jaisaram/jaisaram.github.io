
export interface GitHubStats {
  totalCommits: number;
  totalStars: number;
  totalRepos: number;
  followers: number;
  following: number;
  contributionsThisYear: number;
}

export interface Repository {
  name: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export interface RateLimitInfo {
  remaining: number;
  resetTime: string;
}
