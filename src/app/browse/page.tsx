
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { browseNewsData } from "@/data/browse-news-data";

const BrowsePage = () => {
  const categories = [
    {
      title: "World News",
      description: "Latest news from around the world",
      href: "/all-sources",
    },
    {
      title: "USA News",
      description: "Latest news from the United States",
      href: "/usa-news",
    },
    {
      title: "Business News",
      description: "Latest news from the business world",
      href: "/business-news",
    },
    {
      title: "Tech News",
      description: "Latest news from the tech world",
      href: "/tech-news",
    },
    {
      title: "Crypto News",
      description: "Latest news from the crypto world",
      href: "/crypto-news",
    },
    {
      title: "Sports News",
      description: "Latest news from the sports world",
      href: "/sports-news",
    },
    {
      title: "European News",
      description: "Latest news from Europe",
      href: "/european-news",
    },
     {
      title: "UK News",
      description: "Latest news from the United Kingdom",
      href: "/uk-news",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={category.href} key={category.title} className="block h-full">
            <Card className="h-full transform transition-transform duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
