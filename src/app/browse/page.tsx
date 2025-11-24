
import { browseNewsData, type NewsCategoryGroup } from "@/data/browse-news-data";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BrowsePage() {
  return (
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight">
            Browse All News Categories
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
            Explore a comprehensive list of news sources organized by category.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {browseNewsData.map((group) => (
            <Card key={group.title} className="flex flex-col bg-gray-50 dark:bg-card overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground p-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <group.Icon className="size-5" />
                  <span>{group.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <ul className="space-y-2">
                  {group.links.map((link, index) => (
                    <li key={link.name} className="flex">
                      <span className="text-sm text-muted-foreground mr-2">{index + 1}.</span>
                      <Link
                        href={link.url}
                        className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
  );
}
