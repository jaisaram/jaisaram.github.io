import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { useGitHubData } from "@/hooks/useGitHubData";
import GitHubStatsCards from "./GitHubStatsCards";
import GitHubContributionGraph from "./GitHubContributionGraph";
import GitHubRepositories from "./GitHubRepositories";
import GitHubError from "./GitHubError";

const GitHubAnalytics = () => {
  const { stats, repositories, loading, error, rateLimitInfo } = useGitHubData();

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading real GitHub data...</p>
            {rateLimitInfo && (
              <p className="text-sm text-gray-500 mt-2">
                API calls remaining: {rateLimitInfo.remaining}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-analytics" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GitHub Analytics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <GitHubError error={error} rateLimitInfo={rateLimitInfo} />
        </div>
      </section>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <section id="github-analytics" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">GitHub Analytics</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time coding journey and contributions from GitHub
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {rateLimitInfo && (
          <div className="text-center mb-8">
            <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
              Live GitHub Data | API calls remaining: {rateLimitInfo.remaining}
            </Badge>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <GitHubStatsCards stats={stats} />
          <GitHubContributionGraph repositories={repositories} />
          <GitHubRepositories repositories={repositories} />

          {/* GitHub Profile Link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/jaisaram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubAnalytics;
