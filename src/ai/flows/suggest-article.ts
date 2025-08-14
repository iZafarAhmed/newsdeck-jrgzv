// src/ai/flows/suggest-article.ts
'use server';

/**
 * @fileOverview A flow that suggests a relevant news article based on the user's search and filter history.
 *
 * - suggestArticle - A function that suggests a relevant news article.
 * - SuggestArticleInput - The input type for the suggestArticle function.
 * - SuggestArticleOutput - The return type for the suggestArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestArticleInputSchema = z.object({
  searchQuery: z.string().describe("The user's search query."),
  filterCategory: z.string().describe('The category the user has filtered by.'),
  newsSources: z.array(z.string()).describe('A list of news sources to choose from.'),
});
export type SuggestArticleInput = z.infer<typeof SuggestArticleInputSchema>;

const SuggestArticleOutputSchema = z.object({
  suggestedArticle: z.string().describe('A URL of a suggested article from one of the news sources.'),
  reason: z.string().describe('The AI reason for choosing this article'),
});
export type SuggestArticleOutput = z.infer<typeof SuggestArticleOutputSchema>;

export async function suggestArticle(input: SuggestArticleInput): Promise<SuggestArticleOutput> {
  return suggestArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestArticlePrompt',
  input: {schema: SuggestArticleInputSchema},
  output: {schema: SuggestArticleOutputSchema},
  prompt: `You are an AI news aggregator assistant. Given the user\'s current search query and category filter, suggest one relevant article from the following list of news sources.

You must not suggest any news sources from China or Japan.

Search Query: {{{searchQuery}}}
Category Filter: {{{filterCategory}}}
News Sources: {{#each newsSources}}{{{this}}} {{/each}}

Suggest only a single article, and provide a brief reason for your suggestion.
`,
});

const suggestArticleFlow = ai.defineFlow(
  {
    name: 'suggestArticleFlow',
    inputSchema: SuggestArticleInputSchema,
    outputSchema: SuggestArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
