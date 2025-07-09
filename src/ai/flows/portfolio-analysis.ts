'use server';
/**
 * @fileOverview AI-powered portfolio analysis flow.
 *
 * - analyzePortfolio - A function that analyzes a portfolio and provides feedback.
 * - AnalyzePortfolioInput - The input type for the analyzePortfolio function.
 * - AnalyzePortfolioOutput - The return type for the analyzePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePortfolioInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('A detailed description of the portfolio, including its purpose, target audience, content, and visual design.'),
  portfolioLink: z
    .string()
    .optional()
    .describe('Optional link to the portfolio if it is live.'),
});
export type AnalyzePortfolioInput = z.infer<typeof AnalyzePortfolioInputSchema>;

const AnalyzePortfolioOutputSchema = z.object({
  score: z.number().describe('An overall score for the portfolio (0-100).'),
  strengths: z.array(z.string()).describe('Key strengths of the portfolio.'),
  areasForImprovement: z.array(z.string()).describe('Areas where the portfolio can be improved.'),
  feedback: z.string().describe('Detailed feedback on the portfolio, covering both content and visual appeal.'),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;

export async function analyzePortfolio(input: AnalyzePortfolioInput): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioFlow(input);
}

const analyzePortfolioPrompt = ai.definePrompt({
  name: 'analyzePortfolioPrompt',
  input: {schema: AnalyzePortfolioInputSchema},
  output: {schema: AnalyzePortfolioOutputSchema},
  prompt: `You are a portfolio analysis expert, skilled in evaluating both the content and visual appeal of portfolios.

  Analyze the following portfolio description and provide a score, identify strengths and areas for improvement, and give detailed feedback.

  Portfolio Description: {{{portfolioDescription}}}

  {% if portfolioLink %}Portfolio Link: {{{portfolioLink}}}{% endif %}

  Consider the following aspects:
  - Content quality, relevance, and presentation
  - Visual design, aesthetics, and user experience
  - Overall effectiveness in achieving the portfolio's purpose

  Provide a score from 0 to 100. 100 is perfect
  Your feedback should be actionable and specific, helping the portfolio owner to make concrete improvements.  Make sure the strengths and areas for improvement arrays are populated with strings, and the feedback is a detailed string.`,
});

const analyzePortfolioFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async input => {
    const {output} = await analyzePortfolioPrompt(input);
    return output!;
  }
);
