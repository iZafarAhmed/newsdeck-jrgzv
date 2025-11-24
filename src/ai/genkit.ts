'use client';
/**
 * @fileoverview This file initializes the Genkit AI service with the Google AI plugin.
 *
 * It exports a configured `ai` object that can be used throughout the application
 * to define and run AI flows, prompts, and tools.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
});
