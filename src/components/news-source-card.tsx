import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EuropeanNewsSource } from "@/data/european-news-sources";

interface NewsSourceCardProps {
    source: EuropeanNewsSource;
  }
  
  export const NewsSourceCard: React.FC<NewsSourceCardProps> = ({ source }) => {
    return (
      <Card className="flex flex-col bg-white dark:bg-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="bg-gray-50 dark:bg-gray-700 p-4">
          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
            <a href={source.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {source.name}
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-gray-600 dark:text-gray-300">{source.description}</p>
        </CardContent>
      </Card>
    );
  };