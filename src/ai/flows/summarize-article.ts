// src/ai/flows/summarize-article.ts
'use server';

/**
 * @fileOverview A flow that summarizes a news article from a given URL.
 *
 * - summarizeArticle - A function that takes a URL and returns a summary.
 * - SummarizeArticleInput - The input type for the summarizeArticle function.
 * - SummarizeArticleOutput - The return type for the summarizeArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeArticleInputSchema = z.object({
  articleUrl: z.string().url().describe("The URL of the news article to summarize."),
});
export type SummarizeArticleInput = z.infer<typeof SummarizeArticleInputSchema>;

const SummarizeArticleOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the news article.'),
  title: z.string().describe('The title of the news article.'),
});
export type SummarizeArticleOutput = z.infer<typeof SummarizeArticleOutputSchema>;

export async function summarizeArticle(input: SummarizeArticleInput): Promise<SummarizeArticleOutput> {
  return summarizeArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeArticlePrompt',
  input: {schema: SummarizeArticleInputSchema},
  output: {schema: SummarizeArticleOutputSchema},
  prompt: `You are an expert news summarizer. I will provide you with the full text content of a news article. Your task is to identify the title and provide a clear, concise summary of the article's main points.

Article Text: {{{text}}}
`,
});

async function extractTextFromUrl(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        
        // Very basic text extraction. This is not robust.
        // It strips HTML tags and extracts text from <p> tags primarily.
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : 'Title not found';
        
        const paragraphMatches = html.match(/<p>(.*?)<\/p>/g) || [];
        const textContent = paragraphMatches
            .map(p => p.replace(/<[^>]+>/g, '')) // Strip tags from within paragraph
            .join('\n');
            
        return `${title}\n\n${textContent}`;
    } catch (error) {
        console.error('Failed to fetch or extract text from URL:', error);
        throw new Error('Could not retrieve the article content. The link may be broken or the site may be blocking requests.');
    }
}


const summarizeArticleFlow = ai.defineFlow(
  {
    name: 'summarizeArticleFlow',
    inputSchema: SummarizeArticleInputSchema,
    outputSchema: SummarizeArticleOutputSchema,
  },
  async (input) => {
    const articleText = await extractTextFromUrl(input.articleUrl);
    const {output} = await prompt({ ...input, text: articleText });
    return output!;
  }
);
