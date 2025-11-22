
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { browseNewsData } from "@/data/browse-news-data";

const BrowsePage = () => {
  const linkMap: { [key: string]: string } = {
    "World News": "/all-sources",
    "USA News": "/usa-news",
    "Business News": "/business-news",
    "Tech News": "/tech-news",
    "Crypto News": "/crypto-news",
    "Sports News": "/sports-news",
    "European News": "/european-news",
    "UK News": "/uk-news",
    "Russian News": "/russian-news",
    "Italian News": "/italian-news",
    "Ukraine News": "/ukraine-news",
    "Irish News": "/irish-news",
  };

  const categories = [
    {
      title: "World News",
      description: "Latest news from around the world",
      href: linkMap["World News"],
    },
    {
      title: "USA News",
      description: "Latest news from the United States",
      href: linkMap["USA News"],
    },
    {
      title: "Business News",
      description: "Latest news from the business world",
      href: linkMap["Business News"],
    },
    {
      title: "Tech News",
      description: "Latest news from the tech world",
      href: linkMap["Tech News"],
    },
    {
      title: "Crypto News",
      description: "Latest news from the crypto world",
      href: linkMap["Crypto News"],
    },
    {
      title: "Sports News",
      description: "Latest news from the sports world",
      href: linkMap["Sports News"],
    },
    {
      title: "European News",
      description: "Latest news from Europe",
      href: linkMap["European News"],
    },
     {
      title: "UK News",
      description: "Latest news from the United Kingdom",
      href: linkMap["UK News"],
    },
    {
      title: "Russian News",
      description: "Latest news from Russia",
      href: linkMap["Russian News"],
    },
    {
      title: "Italian News",
      description: "Latest news from Italy",
      href: linkMap["Italian News"],
    },
    {
      title: "Ukraine News",
      description: "Latest news from Ukraine",
      href: linkMap["Ukraine News"],
    },
    {
      title: "Irish News",
      description: "Latest news from Ireland",
      href: linkMap["Irish News"],
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
