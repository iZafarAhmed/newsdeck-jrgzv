import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewsDeckClient } from "@/components/news-deck-client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <NewsDeckClient />
      </div>
      <Footer />
    </div>
  );
}
