'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { analyzePortfolio, type AnalyzePortfolioOutput } from '@/ai/flows/portfolio-analysis';
import SectionWrapper from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, TrendingUp, TrendingDown, Lightbulb } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  portfolioDescription: z.string().min(50, 'Please provide a detailed description (at least 50 characters).'),
  portfolioLink: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
});

const AiAnalysisSection = () => {
  const [analysis, setAnalysis] = useState<AnalyzePortfolioOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioDescription: '',
      portfolioLink: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzePortfolio(values);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Analysis Failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SectionWrapper id="ai-analysis">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-2">
          <Sparkles className="text-primary w-10 h-10" /> AI Portfolio Analysis
        </h2>
        <p className="max-w-3xl text-lg text-foreground/80">
          Get instant feedback on your own portfolio. Describe it below and let our AI provide insights on its strengths and areas for improvement.
        </p>
      </div>
      <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle>Analyze Your Portfolio</CardTitle>
            <CardDescription>Fill out the form to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="portfolioDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your portfolio's purpose, target audience, content, and design..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portfolioLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio Link (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Analyze Now'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 flex flex-col items-center justify-center min-h-[400px]">
          {isLoading && (
            <div className="flex flex-col items-center gap-4 text-primary p-8">
              <Loader2 className="h-12 w-12 animate-spin" />
              <p className="text-lg">Analyzing your portfolio...</p>
            </div>
          )}
          {!isLoading && !analysis && (
            <div className="text-center text-foreground/60 p-8">
              <Sparkles className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-xl">Analysis Results</h3>
              <p>Your AI-powered analysis will appear here.</p>
            </div>
          )}
          {analysis && (
            <CardContent className="w-full p-6 text-left">
              <h3 className="font-headline text-2xl mb-4 text-center">Analysis Complete!</h3>
              <div className="relative mb-6">
                <div className="text-center">
                    <span className="text-5xl font-bold text-primary">{analysis.score}</span>
                    <span className="text-xl text-foreground/80">/100</span>
                </div>
                <Progress value={analysis.score} className="h-2 mt-2" indicatorClassName="bg-primary" />
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8">
                  <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-2 text-green-400"><TrendingUp /> Strengths</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                          {analysis.strengths.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-2 text-yellow-400"><TrendingDown /> Areas for Improvement</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                          {analysis.areasForImprovement.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                  </div>
              </div>
              {analysis.detailedFeedback && analysis.detailedFeedback.length > 0 && (
                <div className="mt-6">
                    <h4 className="font-semibold mb-2">Detailed Feedback</h4>
                    <div className="text-sm text-foreground/80 bg-muted/50 p-4 rounded-md">
                      <ul className="space-y-3">
                        {analysis.detailedFeedback.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AiAnalysisSection;
