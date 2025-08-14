import type { LucideIcon } from "lucide-react";
import { Flag, Globe, Bitcoin, LineChart, FlaskConical } from "lucide-react";

export interface NewsSource {
  name: string;
  url: string;
}

export interface NewsCategory {
  id: string;
  title: string;
  Icon: LucideIcon;
  color: string;
  sources: NewsSource[];
}

export const newsCategories: NewsCategory[] = [
  {
    id: "usa",
    title: "USA News",
    Icon: Flag,
    color: "text-red-600",
    sources: [
      { name: "CNN", url: "https://edition.cnn.com/" },
      { name: "NBC News", url: "https://www.nbcnews.com/" },
      { name: "USA Today", url: "https://www.usatoday.com/" },
      { name: "NPR National", url: "https://www.npr.org/" },
      { name: "New York Times", url: "https://www.nytimes.com/" },
    ],
  },
  {
    id: "world",
    title: "World News",
    Icon: Globe,
    color: "text-blue-600",
    sources: [
      { name: "BBC", url: "https://www.bbc.com/news" },
      { name: "Associated Press", url: "https://apnews.com/" },
      { name: "Yahoo News", url: "https://news.yahoo.com/" },
      { name: "Inside Edition", url: "https://www.insideedition.com/" },
      { name: "Channel 4 News", url: "https://www.channel4.com/news" },
    ],
  },
  {
    id: "crypto",
    title: "Crypto News",
    Icon: Bitcoin,
    color: "text-amber-500",
    sources: [
      { name: "Cointelegraph", url: "https://cointelegraph.com/" },
      { name: "CoinDesk", url: "https://www.coindesk.com/" },
      { name: "Bitcoin News", url: "https://bitcoinnews.com/" },
      { name: "ItsBlockchain", url: "https://itsblockchain.com/" },
    ],
  },
  {
    id: "business",
    title: "Business News",
    Icon: LineChart,
    color: "text-emerald-500",
    sources: [
      { name: "CNN Business", url: "https://www.cnn.com/business" },
      { name: "BBC Business", url: "https://www.bbc.com/news/business" },
      { name: "CNBC Business", url: "https://www.cnbc.com/" },
      { name: "Forbes", url: "https://www.forbes.com/" },
      { name: "MarketWatch", url: "https://www.marketwatch.com/" },
    ],
  },
  {
    id: "science",
    title: "Science News",
    Icon: FlaskConical,
    color: "text-violet-500",
    sources: [
      { name: "Census", url: "https://www.census.gov/" },
      { name: "Space.com", url: "https://www.space.com/" },
      { name: "NASA", url: "https://www.nasa.gov/news" },
      { name: "Live Science", url: "https://www.livescience.com/" },
      { name: "Science Times", url: "https://www.sciencetimes.com/" },
    ],
  },
];

export const filterButtons = [
  { id: 'all', label: 'All Categories' },
  { id: 'usa', label: 'USA' },
  { id: 'world', label: 'World' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'business', label: 'Business' },
  { id: 'science', label: 'Science' },
];

export const allNewsSources = newsCategories.flatMap(category => category.sources.map(source => source.url));
