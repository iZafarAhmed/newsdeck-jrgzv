
import { allNewsSites } from './all-news-sources';

export const allNewsSources = allNewsSites;

export const newsCategories = [
  {
    id: 'top-100',
    title: 'Top 100 News',
    sources: allNewsSites.slice(0, 100),
  },
  {
    id: 'usa',
    title: 'USA News',
    sources: allNewsSites.filter(source => source.country === 'USA'),
  },
  {
    id: 'uk',
    title: 'UK News',
    sources: allNewsSites.filter(source => source.country === 'UK'),
  },
  {
    id: 'india',
    title: 'India News',
    sources: allNewsSites.filter(source => source.country === 'India'),
  }
];

export const filterButtons = [
  { id: 'all', label: 'All' },
  { id: 'top-100', label: 'Top 100' },
  { id: 'usa', label: 'USA' },
  { id: 'uk', label: 'UK' },
  { id: 'india', label: 'India' },
];

export type NewsCategory = typeof newsCategories[0];
