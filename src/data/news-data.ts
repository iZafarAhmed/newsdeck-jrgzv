
import type { LucideIcon } from "lucide-react";
import { Flag, Globe, Bitcoin, LineChart, FlaskConical, Film, Trophy, HeartPulse, Cpu, Newspaper } from "lucide-react";

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
      { name: "U.Today", url: "https://u.today/" },
      { name: "Decrypt", url: "https://decrypt.co/" },
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
  {
    id: "entertainment",
    title: "Entertainment News",
    Icon: Film,
    color: "text-pink-500",
    sources: [
      { name: "E! News", url: "https://www.eonline.com/" },
      { name: "Variety", url: "https://variety.com/" },
      { name: "TMZ", url: "https://www.tmz.com/" },
      { name: "People", url: "https://people.com/" },
      { name: "The Hollywood Reporter", url: "https://www.hollywoodreporter.com/" },
    ],
  },
  {
    id: "sports",
    title: "Sports News",
    Icon: Trophy,
    color: "text-orange-500",
    sources: [
      { name: "ESPN", url: "https://www.espn.com/" },
      { name: "CBS Sports", url: "https://www.cbssports.com/" },
      { name: "Bleacher Report", url: "https://bleacherreport.com/" },
      { name: "Fox Sports", url: "https://www.foxsports.com/" },
      { name: "Yahoo Sports", url: "https://sports.yahoo.com/" },
    ],
  },
  {
    id: "health",
    title: "Health News",
    Icon: HeartPulse,
    color: "text-rose-500",
    sources: [
      { name: "WebMD", url: "https://www.webmd.com/news/default.htm" },
      { name: "Healthline", url: "https://www.healthline.com/" },
      { name: "Medical News Today", url: "https://www.medicalnewstoday.com/" },
      { name: "NIH News in Health", url: "https://newsinhealth.nih.gov/" },
      { name: "Stat News", url: "https://www.statnews.com/" },
    ],
  },
  {
    id: "technology",
    title: "Technology News",
    Icon: Cpu,
    color: "text-sky-500",
    sources: [
      { name: "TechCrunch", url: "https://techcrunch.com/" },
      { name: "The Verge", url: "https://www.theverge.com/" },
      { name: "Wired", url: "https://www.wired.com/" },
      { name: "Ars Technica", url: "https://arstechnica.com/" },
      { name: "CNET", url: "https://www.cnet.com/" },
    ],
  },
];

export const filterButtons = [
  { id: 'all', label: 'Home' },
  { id: 'usa', label: 'USA' },
  { id: 'world', label: 'World' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'business', label: 'Business' },
  { id: 'science', label: 'Science' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'sports', label: 'Sports' },
  { id: 'health', label: 'Health' },
  { id: 'technology', label: 'Technology' },
];

export const allNewsSources = newsCategories.flatMap(category => category.sources.map(source => source.url));
