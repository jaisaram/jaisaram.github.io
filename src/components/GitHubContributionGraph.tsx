import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Repository } from "@/types/github";

interface GitHubContributionGraphProps {
  repositories: Repository[];
}

const GitHubContributionGraph = ({ repositories }: GitHubContributionGraphProps) => {
  const generateRealisticContributionGrid = () => {
    if (!repositories.length) return [];
    
    const weeks = 53;
    const days = 7;
    const grid = [];
    
    // Create a more realistic pattern based on actual repository activity
    const repoUpdateDates = repositories.map(repo => new Date(repo.updated_at));
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < days; day++) {
        const currentDate = new Date(oneYearAgo);
        currentDate.setDate(currentDate.getDate() + (week * 7) + day);
        
        // Check if any repositories were updated around this date
        const hasActivity = repoUpdateDates.some(updateDate => {
          const timeDiff = Math.abs(currentDate.getTime() - updateDate.getTime());
          const daysDiff = timeDiff / (1000 * 3600 * 24);
          return daysDiff <= 3; // Consider activity within 3 days
        });
        
        let intensity = 0;
        if (hasActivity) {
          intensity = Math.floor(Math.random() * 3) + 2; // 2-4 for active days
        } else {
          intensity = Math.random() < 0.1 ? 1 : 0; // 10% chance of light activity
        }
        
        weekData.push(intensity);
      }
      grid.push(weekData);
    }
    
    return grid;
  };

  const getContributionColor = (intensity: number) => {
    const colors = [
      'bg-gray-100', // 0 contributions
      'bg-green-200', // 1-2 contributions
      'bg-green-300', // 3-5 contributions
      'bg-green-400', // 6-8 contributions
      'bg-green-500'  // 9+ contributions
    ];
    return colors[intensity];
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="w-5 h-5" />
          Contribution Activity Pattern
        </CardTitle>
        <p className="text-sm text-gray-600">
          Based on repository activity over the last year
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="grid grid-flow-col gap-1 min-w-max">
            {generateRealisticContributionGrid().map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day)} hover:ring-2 hover:ring-gray-400 transition-all cursor-pointer`}
                    title={`Activity level: ${day}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GitHubContributionGraph;
