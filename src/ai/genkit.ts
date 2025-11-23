/**
 * @fileoverview This file initializes the Genkit AI platform with the Vertex AI plugin.
 * It exports a configured `ai` object for use across the application.
 */
import { genkit, ai } from '@genkit-ai/core';
import { vertexAI } from '@genkit-ai/vertexai';

genkit({
  plugins: [
    vertexAI({
      project: process.env.GOOGLE_CLOUD_PROJECT,
      location: 'us-central1',
    }),
  ],
  enableTracingAndMetrics: true,
});

export { ai };
