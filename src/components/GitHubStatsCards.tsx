import { Card, CardContent } from "@/components/ui/card";
import { GitCommit, Star, Github, Users } from "lucide-react";
import { GitHubStats } from "@/types/github";

interface GitHubStatsCardsProps {
  stats: GitHubStats;
}

const GitHubStatsCards = ({ stats }: GitHubStatsCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <GitCommit className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{stats.totalCommits.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Est. Contributions</div>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{stats.totalStars}</div>
          <div className="text-sm text-gray-600">Stars Earned</div>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Github className="w-8 h-8 text-gray-700 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{stats.totalRepos}</div>
          <div className="text-sm text-gray-600">Public Repos</div>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{stats.followers}</div>
          <div className="text-sm text-gray-600">Followers</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitHubStatsCards;
