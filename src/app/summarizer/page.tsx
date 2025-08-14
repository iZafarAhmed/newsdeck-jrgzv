import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SummarizerClient } from "./_components/summarizer-client";

export default function SummarizerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">AI News Summarizer</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Paste a link to a news article and get a quick summary.
          </p>
        </div>
        <SummarizerClient />
      </main>
      <Footer />
    </div>
  );
}
