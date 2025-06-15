
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Repository } from "@/types/github";

interface GitHubRepositoriesProps {
  repositories: Repository[];
}

const GitHubRepositories = ({ repositories }: GitHubRepositoriesProps) => {
  if (repositories.length === 0) return null;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent Repositories</CardTitle>
        <p className="text-sm text-gray-600">Most recently updated repositories</p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {repositories.slice(0, 6).map((repo) => (
            <div key={repo.name} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{repo.name}</h4>
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{repo.stargazers_count}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                {repo.language && (
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">{repo.language}</span>
                )}
                <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GitHubRepositories;
