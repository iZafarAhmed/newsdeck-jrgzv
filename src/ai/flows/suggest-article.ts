'use server';

/**
 * @fileoverview A flow that suggests a news article based on user interests.
 *
 * - suggestArticle - A function that takes a search query, category, and list of sources to recommend an article.
 * - SuggestArticleInput - The input type for the suggestArticle function.
 * - SuggestArticleOutput - The return type for the suggestArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema using Zod
const SuggestArticleInputSchema = z.object({
  searchQuery: z.string().describe('The user\'s search query or topic of interest.'),
  filterCategory: z.string().describe('The currently selected news category filter (e.g., "tech", "sports", "all").'),
  newsSources: z.array(z.object({
    name: z.string(),
    url: z.string(),
  })).describe('A list of available news sources with their names and URLs.'),
});
export type SuggestArticleInput = z.infer<typeof SuggestArticleInputSchema>;

// Define the output schema using Zod
const SuggestArticleOutputSchema = z.object({
  title: z.string().describe('The title of the suggested news article.'),
  url: z.string().url().describe('The direct URL to the suggested news article.'),
  reason: z.string().describe('A brief explanation of why this article was recommended.'),
});
export type SuggestArticleOutput = z.infer<typeof SuggestArticleOutputSchema>;

// Define the main function that will be called from the client
export async function suggestArticle(input: SuggestArticleInput): Promise<SuggestArticleOutput> {
  return suggestArticleFlow(input);
}

// Define the Genkit prompt
const suggestArticlePrompt = ai.definePrompt({
  name: 'suggestArticlePrompt',
  input: { schema: SuggestArticleInputSchema },
  output: { schema: SuggestArticleOutputSchema },
  prompt: `You are a news curator AI. Your task is to suggest a single, interesting news article for the user to read.

Based on the user's current search query ('{{{searchQuery}}}') and category filter ('{{{filterCategory}}}'), select the most relevant and interesting article from the provided list of news sources.

Your suggestion should be a specific article, not just a news source. Choose one of the provided sources and invent a plausible, recent-sounding article title and URL from that source.

For example, if the source is TechCrunch, a good title would be "Quantum Computing Startup Raises $50M Series A" with a URL like "https://techcrunch.com/2024/05/21/quantum-startup-series-a/".

Provided News Sources:
{{#each newsSources}}
- {{name}}: {{url}}
{{/each}}

Please provide a direct URL to the article and a brief reason for your recommendation. The reason should connect the article to the user's query or filter.`,
});


// Define the Genkit flow
const suggestArticleFlow = ai.defineFlow(
  {
    name: 'suggestArticleFlow',
    inputSchema: SuggestArticleInputSchema,
    outputSchema: SuggestArticleOutputSchema,
  },
  async (input: SuggestArticleInput) => {
    const { output } = await suggestArticlePrompt(input);
    if (!output) {
      throw new Error('The AI model did not return a valid suggestion.');
    }
    return output;
  }
);
