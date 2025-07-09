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
  detailedFeedback: z.array(z.string()).describe('A list of detailed feedback points, covering content, visual appeal, and overall effectiveness. Each point should be a separate string in the array.'),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;

export async function analyzePortfolio(input: AnalyzePortfolioInput): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioFlow(input);
}

const analyzePortfolioPrompt = ai.definePrompt({
  name: 'analyzePortfolioPrompt',
  input: {schema: AnalyzePortfolioInputSchema},
  output: {schema: AnalyzePortfolioOutputSchema},
  prompt: `You are a friendly and encouraging AI mentor for web developers and designers. Your goal is to provide constructive, kind, and actionable feedback to help users build amazing portfolios.

Analyze the portfolio based on the provided description and optional link. Your tone should always be positive and supportive, even when pointing out areas for improvement. Think of this as a collaborative review session, not a critique.

Portfolio Description: {{{portfolioDescription}}}
{{#if portfolioLink}}
Portfolio Link: {{{portfolioLink}}}
{{/if}}

Please evaluate the following:
1.  **Content & Storytelling:** How well does the portfolio present the user's skills and journey? Is it engaging?
2.  **Design & UX:** How is the visual design, layout, and user experience? Is it modern and intuitive?
3.  **Overall Impact:** How effective is the portfolio in achieving its goals (e.g., getting a job, showcasing work)?

Based on your analysis, provide the following in your response:
- **score:** An overall score from 0-100. Frame this as a "progress score" to encourage growth.
- **strengths:** A list of 2-3 key things the user is doing great.
- **areasForImprovement:** A list of 2-3 specific, actionable suggestions for what to work on next.
- **detailedFeedback:** Break down your detailed thoughts into a list of bullet points. Start with what's working well, then gently introduce suggestions for improvement. Each point should be a string in the array. Be specific and provide examples where possible. Remember to be friendly and comforting!`,
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
