"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Link, Newspaper } from 'lucide-react';
import { summarizeArticle, type SummarizeArticleOutput } from '@/ai/flows/summarize-article';
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from '@/components/ui/skeleton';

const FormSchema = z.object({
  articleUrl: z.string().url({ message: "Please enter a valid URL." }),
});

type FormValues = z.infer<typeof FormSchema>;

export function SummarizerClient() {
  const [summaryResult, setSummaryResult] = useState<SummarizeArticleOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      articleUrl: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSummaryResult(null);

    try {
      const result = await summarizeArticle(data.articleUrl);
      setSummaryResult(result);
    } catch (error) {
      console.error("Summarization failed:", error);
      toast({
        variant: "destructive",
        title: "Summarization Failed",
        description: error instanceof Error ? error.message : "Could not generate a summary. Please try another link.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="size-5" />
            <span>Article URL</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-4">
              <FormField
                control={form.control}
                name="articleUrl"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input placeholder="https://www.example.com/news/article" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    <span>Summarizing...</span>
                  </>
                ) : 'Summarize'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <Card className="mt-8 shadow-lg animate-in fade-in-50">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-7 w-3/4" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      )}

      {summaryResult && !isLoading && (
        <Card className="mt-8 shadow-lg animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="size-5 text-primary" />
              <span>{summaryResult.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              {summaryResult.summary.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
