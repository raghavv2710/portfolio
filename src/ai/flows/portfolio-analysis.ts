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

const AnalyzePortfolioInputSchema = z
  .object({
    portfolioDescription: z
      .string()
      .optional()
      .describe(
        'A detailed description of the portfolio, including its purpose, target audience, content, and visual design.'
      ),
    portfolioLink: z
      .string()
      .url({message: 'Please provide a valid URL.'})
      .optional()
      .describe('Optional link to the portfolio if it is live.'),
  })
  .superRefine((data, ctx) => {
    if (!data.portfolioDescription && !data.portfolioLink) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['portfolioDescription'],
        message: 'Please provide either a portfolio description or a link to analyze.',
      });
    }
    if (data.portfolioDescription && data.portfolioDescription.length < 50) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['portfolioDescription'],
        message: 'Description must be at least 50 characters if provided.',
      });
    }
  });
export type AnalyzePortfolioInput = z.infer<typeof AnalyzePortfolioInputSchema>;

const AnalyzePortfolioOutputSchema = z.object({
  score: z.number().describe('An overall score for the portfolio (0-100).'),
  strengths: z.array(z.string()).describe('Key strengths of the portfolio.'),
  areasForImprovement: z.array(z.string()).describe('Areas where the portfolio can be improved.'),
  detailedFeedback: z
    .object({
      contentAndStorytelling: z.object({
        rating: z.number().min(1).max(5).describe('Rating from 1-5 for content and storytelling.'),
        feedback: z.string().describe('Specific feedback on content and storytelling.'),
      }),
      designAndUX: z.object({
        rating: z.number().min(1).max(5).describe('Rating from 1-5 for design and UX.'),
        feedback: z.string().describe('Specific feedback on design and UX.'),
      }),
      overallImpact: z.object({
        rating: z.number().min(1).max(5).describe('Rating from 1-5 for overall impact.'),
        feedback: z.string().describe('Specific feedback on overall impact.'),
      }),
    })
    .describe('A detailed breakdown of feedback across different categories.'),
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

Analyze the portfolio based on the provided information. The user can provide either a description, a link, or both. Your tone should always be positive and supportive, even when pointing out areas for improvement. Think of this as a collaborative review session, not a critique.

{{#if portfolioDescription}}
Portfolio Description: {{{portfolioDescription}}}
{{/if}}
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
- **detailedFeedback:** Provide a detailed breakdown of feedback across these categories:
  - **contentAndStorytelling**: Give a rating from 1-5 and provide specific feedback on how well the portfolio presents the user's skills and journey.
  - **designAndUX**: Give a rating from 1-5 and provide specific feedback on the visual design, layout, and user experience.
  - **overallImpact**: Give a rating from 1-5 and provide specific feedback on how effective the portfolio is in achieving its goals.
Remember to be friendly and comforting!`,
});

const analyzePortfolioFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async (input) => {
    const {output} = await analyzePortfolioPrompt(input);
    return output!;
  }
);
