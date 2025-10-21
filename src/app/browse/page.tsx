
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { browseNewsData, type NewsCategoryGroup } from "@/data/browse-news-data";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const linkMap: { [key: string]: string } = {
    "Alabama News Websites": "/alabama-news",
    "Alaska News Websites": "/alaska-news",
    "Arizona News Websites": "/arizona-news",
    "Arkansas News Websites": "/arkansas-news",
    "California News Websites": "/california-news",
    "Colorado News Websites": "/colorado-news",
    "Connecticut News Websites": "/connecticut-news",
    "Delaware News Websites": "/delaware-news",
    "Florida News Websites": "/florida-news",
    "Georgia News Websites": "/georgia-news",
    "Hawaii News Websites": "/hawaii-news",
    "Idaho News Websites": "/idaho-news",
    "Illinois News Websites": "/illinois-news",
    "Indiana News Websites": "/indiana-news",
    "Iowa News Websites": "/iowa-news",
    "Kansas News Websites": "/kansas-news",
    "Kentucky News Websites": "/kentucky-news",
    "Louisiana News Websites": "/louisiana-news",
    "Maine News Websites": "/maine-news",
    "Maryland News Websites": "/maryland-news",
    "Massachusetts News Websites": "/massachusetts-news",
    "Michigan News Websites": "/michigan-news",
    "Minnesota News Websites": "/minnesota-news",
    "Mississippi News Websites": "/mississippi-news",
    "Missouri News Websites": "/missouri-news",
    "Montana News Websites": "/montana-news",
    "Nebraska News Websites": "/nebraska-news",
    "Nevada News Websites": "/nevada-news",
    "New Hampshire News Websites": "/new-hampshire-news",
    "New Jersey News Websites": "/new-jersey-news",
    "New Mexico News Websites": "/new-mexico-news",
    "New York News Websites": "/new-york-news",
    "North Carolina News Websites": "/north-carolina-news",
    "North Dakota News Websites": "/north-dakota-news",
    "Ohio News Websites": "/ohio-news",
    "Oklahoma News Websites": "/oklahoma-news",
    "Oregon News Websites": "/oregon-news",
    "Pennsylvania News Websites": "/pennsylvania-news",
    "Rhode Island News Websites": "/rhode-island-news",
    "South Carolina News Websites": "/south-carolina-news",
    "South Dakota News Websites": "/south-dakota-news",
    "Tennessee News Websites": "/tennessee-news",
    "Texas News Websites": "/texas-news",
    "Utah News Websites": "/utah-news",
    "Vermont News Websites": "/vermont-news",
    "Virginia News Websites": "/virginia-news",
    "Washington News Websites": "/washington-news",
    "West Virginia News Websites": "/west-virginia-news",
    "Wisconsin News Websites": "/wisconsin-news",
    "Wyoming News Websites": "/wyoming-news",
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
    "HR News Websites": "/hr-news",
    "Marketing News Websites": "/marketing-news",
    "Pharma News Websites": "/pharma-news",
    "Space News Websites": "/space-news",
    "Music News Websites": "/music-news",
    "Fashion News Websites": "/fashion-news",
    "Art News Websites": "/art-news",
    "Photography News Websites": "/photography-news",
    "Food News Websites": "/food-news",
    "Nonprofit News Websites": "/nonprofit-news",
    "Good News Websites": "/good-news",
    "Weather News Websites": "/weather-news",
    "Climate News Websites": "/climate-news",
    "Satirical News Websites": "/satirical-news",
    "Black News Websites": "/black-news",
    "Unbiased News Websites": "/unbiased-news",
    "Opinion News Websites": "/opinion-news",
    "Conservative News Websites": "/conservative-news",
    "Canadian News Websites": "/canadian-news",
    "Jamaica News Websites": "/jamaica-news",
    "Trinidad And Tobago News Websites": "/trinidad-and-tobago-news",
    "Haiti News Websites": "/haiti-news",
    "Cuba News Websites": "/cuba-news",
    "Mexican News Websites": "/mexican-news",
    "Puerto Rico News Websites": "/puerto-rico-news",
    "Caribbean News Websites": "/caribbean-news",
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
