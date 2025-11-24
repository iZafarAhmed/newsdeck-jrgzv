
import { allNewsSites, NewsSite } from './all-news-sources';
import {
  Globe,
  Cpu,
  Dumbbell,
  Film,
  Briefcase,
  HeartPulse,
  FlaskConical,
  Landmark,
  Flag,
} from "lucide-react";

export interface NewsSource {
  name: string;
  url: string;
}

export interface NewsCategory {
  id: string;
  title: string;
  icon: any;
  color?: string;
  sources: NewsSource[];
  url?: string;
}

const getSourcesFor = (category: string): NewsSource[] => {
  return allNewsSites
    .filter((site: NewsSite) => site.category === category)
    .map((site: NewsSite) => ({ name: site.name, url: site.url }));
};

const getSourcesByCountry = (country: string): NewsSource[] => {
  return allNewsSites
    .filter((site: NewsSite) => site.country === country)
    .map((site: NewsSite) => ({ name: site.name, url: site.url }));
};

export const allNewsSources: NewsSource[] = allNewsSites.map(site => ({ name: site.name, url: site.url }));

export const newsCategories: NewsCategory[] = [
  {
    id: 'tech',
    title: "Tech News",
    icon: Cpu,
    color: "text-indigo-500",
    sources: getSourcesFor('Technology'),
  },
  {
    id: 'general',
    title: "World News",
    icon: Globe,
    color: "text-sky-500",
    sources: getSourcesFor('General'),
  },
  {
    id: 'sports',
    title: "Sports",
    icon: Dumbbell,
    color: "text-orange-500",
    sources: getSourcesFor('Sports'),
  },
  {
    id: 'entertainment',
    title: "Entertainment",
    icon: Film,
    color: "text-rose-500",
    sources: getSourcesFor('Entertainment'),
  },
  {
    id: 'business',
    title: "Business",
    icon: Briefcase,
    color: "text-green-500",
    sources: getSourcesFor('Business'),
  },
  {
    id: 'health',
    title: "Health",
    icon: HeartPulse,
    color: "text-red-500",
    sources: getSourcesFor('Health'),
  },
  {
    id: 'science',
    title: "Science",
    icon: FlaskConical,
    color: "text-blue-500",
    sources: getSourcesFor('Science'),
  },
  {
    id: 'politics',
    title: "Politics",
    icon: Landmark,
    color: "text-purple-500",
    sources: getSourcesFor('Politics'),
  },
  {
    id: 'us-news',
    title: "U.S. News",
    icon: Flag,
    color: "text-blue-600",
    sources: getSourcesByCountry('USA'),
  },
];

export const filterButtons = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Tech' },
  { id: 'general', label: 'World News' },
  { id: 'us-news', label: 'U.S. News' },
  { id: 'sports', label: 'Sports' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'business', label: 'Business' },
  { id: 'health', label: 'Health' },
  { id: 'science', label: 'Science' },
  { id: 'politics', label: 'Politics' },
];

// Placeholder for newsData used in some components
export const newsData = [
    { source: 'The New York Times', title: 'Article 1', publishedAt: '2024-01-01', url: '#' },
    { source: 'The Wall Street Journal', title: 'Article 2', publishedAt: '2024-01-01', url: '#' },
]
