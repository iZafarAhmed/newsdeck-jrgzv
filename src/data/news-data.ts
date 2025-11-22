
import { allNewsSites } from './all-news-sources';
import { Globe, Flag, Briefcase } from 'lucide-react';

export const allNewsSources = allNewsSites;

export const newsCategories = [
  {
    id: 'top-100',
    title: 'Top 100 News',
    sources: allNewsSites.slice(0, 100),
    icon: Globe,
  },
  {
    id: 'business',
    title: 'Business News',
    sources: allNewsSites.filter(source => source.category === 'business'),
    icon: Briefcase,
  },
  {
    id: 'usa',
    title: 'USA News',
    sources: allNewsSites.filter(source => source.country === 'USA'),
    icon: Flag,
  },
  {
    id: 'uk',
    title: 'UK News',
    sources: allNewsSites.filter(source => source.country === 'UK'),
    icon: Flag,
  },
  {
    id: 'india',
    title: 'India News',
    sources: allNewsSites.filter(source => source.country === 'India'),
    icon: Flag,
  }
];

export const filterButtons = [
  { id: 'all', label: 'All' },
  { id: 'top-100', label: 'Top 100' },
  { id: 'business', label: 'Business' },
  { id: 'usa', label: 'USA' },
  { id: 'uk', label: 'UK' },
  { id: 'india', label: 'India' },
];

export type NewsCategory = typeof newsCategories[0];
