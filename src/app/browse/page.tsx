
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { browseNewsData, type NewsCategoryGroup } from "@/data/browse-news-data";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const linkMap: { [key: string]: string } = {
  "Sports News Websites": "/sports-news",
  "Business News Websites": "/business-news",
  "Cryptocurrency News Websites": "/crypto-news",
  "Tech News Websites": "/tech-news",
  "USA News Websites": "/top-100",
  "World News Websites": "/all-sources",
  "Football News Websites": "/football-news",
  "Tennis News Websites": "/tennis-news",
  "Basketball News Websites": "/basketball-news",
  "Golf News Websites": "/golf-news",
  "Cycling News Websites": "/cycling-news",
  "Wrestling News Websites": "/wrestling-news",
  "UK Sports News Websites": "/uk-sports-news",
  "Australian Sports News Websites": "/australian-sports-news",
  "Financial News Websites": "/financial-news",
  "Stock Market News Websites": "/stock-market-news",
  "Forex News Websites": "/forex-news",
  "Investment News Websites": "/investment-news",
  "Dubai Finance News Websites": "/dubai-finance-news",
  "Economics News Websites": "/economics-news",
  "Hindi News Websites": "/hindi-news",
  "Urdu News Websites": "/urdu-news",
  "Arabic News Websites": "/arabic-news",
  "Telugu News Websites": "/telugu-news",
  "Argentina News Websites": "/argentina-news",
  "Brazil News Websites": "/brazil-news",
  "Colombia News Websites": "/colombia-news",
  "Chile News Websites": "/chile-news",
  "Peru News Websites": "/peru-news",
  "Venezuela News Websites": "/venezuela-news",
  "Paraguay News Websites": "/paraguay-news",
  "Ecuador News Websites": "/ecuador-news",
  "Agriculture News Websites": "/agriculture-news",
  "Aviation News Websites": "/aviation-news",
  "Motorcycle News Websites": "/motorcycle-news",
  "Energy News Websites": "/energy-news",
  "Mortgage News Websites": "/mortgage-news",
};

export default function BrowsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
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
          {(browseNewsData as NewsCategoryGroup[]).map((group) => (
            <Card key={group.title} className="flex flex-col bg-gray-50 overflow-hidden transition-shadow hover:shadow-lg">
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
                        href={linkMap[link.name] || "#"}
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
      <Footer />
    </div>
  );
}
