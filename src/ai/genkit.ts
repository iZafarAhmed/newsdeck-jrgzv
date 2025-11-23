
import { genkit, ai } from '@genkit-ai/core';
import { vertexAI } from '@genkit-ai/vertexai';

export const config = genkit({
  plugins: [
    vertexAI({
      project: process.env.GOOGLE_CLOUD_PROJECT,
      location: 'us-central1',
    }),
  ],
  enableTracingAndMetrics: true,
});

export { ai };
