'use server';
/**
 * @fileoverview This file initializes the Genkit AI instance with the necessary plugins.
 * It configures the Google AI plugin for generative model access.
 *
 * It exports a single `ai` object that is used throughout the application to
 * interact with the Genkit framework.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
