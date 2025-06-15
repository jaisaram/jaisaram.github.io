import { useState, useEffect } from "react";
import { GitHubStats, Repository, RateLimitInfo } from "@/types/github";

const GITHUB_USERNAME = "jaisaram";

export const useGitHubData = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rateLimitInfo, setRateLimitInfo] = useState<RateLimitInfo | null>(null);

  const checkRateLimit = (response: Response) => {
    const remaining = response.headers.get('X-RateLimit-Remaining');
    const resetTime = response.headers.get('X-RateLimit-Reset');
    
    if (remaining && resetTime) {
      const resetDate = new Date(parseInt(resetTime) * 1000);
      setRateLimitInfo({
        remaining: parseInt(remaining),
        resetTime: resetDate.toLocaleTimeString()
      });
    }
  };

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log(`Fetching GitHub data for user: ${GITHUB_USERNAME}`);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        checkRateLimit(userResponse);
        
        if (!userResponse.ok) {
          if (userResponse.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
          }
          throw new Error(`Failed to fetch user data: ${userResponse.status}`);
        }
        
        const userData = await userResponse.json();
        console.log('User data fetched:', userData);

        // Fetch repositories data
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        checkRateLimit(reposResponse);
        
        if (!reposResponse.ok) {
          if (reposResponse.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
          }
          throw new Error(`Failed to fetch repositories: ${reposResponse.status}`);
        }
        
        const reposData = await reposResponse.json();
        console.log(`Fetched ${reposData.length} repositories`);
        
        setRepositories(reposData);

        // Calculate total stars from real data
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        console.log('Total stars calculated:', totalStars);

        // Calculate approximate contributions based on repository activity
        const now = new Date();
        const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        
        const recentRepos = reposData.filter((repo: any) => 
          new Date(repo.updated_at) >= oneYearAgo
        );
        
        // Estimate contributions based on recent repository updates
        const estimatedContributions = Math.min(recentRepos.length * 50, 1000);

        const finalStats: GitHubStats = {
          totalCommits: estimatedContributions,
          totalStars,
          totalRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          contributionsThisYear: estimatedContributions
        };

        console.log('Final stats:', finalStats);
        setStats(finalStats);
        
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return {
    stats,
    repositories,
    loading,
    error,
    rateLimitInfo
  };
};
