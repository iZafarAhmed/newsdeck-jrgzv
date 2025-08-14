// src/ai/flows/get-latest-article.ts
'use server';

/**
 * @fileOverview A flow that fetches the latest news article from a given source URL.
 *
 * - getLatestArticle - A function that gets the latest news article.
 * - GetLatestArticleInput - The input type for the getLatestArticle function.
 * - GetLatestArticleOutput - The return type for the getLatestArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetLatestArticleInputSchema = z.object({
  newsSourceUrl: z.string().describe('The URL of the news website.'),
});
export type GetLatestArticleInput = z.infer<typeof GetLatestArticleInputSchema>;

const GetLatestArticleOutputSchema = z.object({
  articleUrl: z.string().describe('The URL of the latest news article.'),
  articleTitle: z.string().describe('The title of the latest news article.'),
  reason: z.string().describe('A brief summary of the article and why it was chosen as the latest.'),
});
export type GetLatestArticleOutput = z.infer<typeof GetLatestArticleOutputSchema>;

export async function getLatestArticle(input: GetLatestArticleInput): Promise<GetLatestArticleOutput> {
  return getLatestArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getLatestArticlePrompt',
  input: {schema: GetLatestArticleInputSchema},
  output: {schema: GetLatestArticleOutputSchema},
  prompt: `You are a news assistant. Your task is to find the most recent or top headline news article from the provided news website URL.

Return the full URL and the title of that article. Also, provide a very brief summary of the article content.

Website: {{{newsSourceUrl}}}
`,
});

const getLatestArticleFlow = ai.defineFlow(
  {
    name: 'getLatestArticleFlow',
    inputSchema: GetLatestArticleInputSchema,
    outputSchema: GetLatestArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
