import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { RateLimitInfo } from "@/types/github";

interface GitHubErrorProps {
  error: string;
  rateLimitInfo: RateLimitInfo | null;
}

const GitHubError = ({ error, rateLimitInfo }: GitHubErrorProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load GitHub Data</h3>
          <p className="text-red-600 mb-4">{error}</p>
          {rateLimitInfo && (
            <p className="text-sm text-red-500">
              API calls remaining: {rateLimitInfo.remaining} | Reset at: {rateLimitInfo.resetTime}
            </p>
          )}
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors"
          >
            Retry Loading
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitHubError;
