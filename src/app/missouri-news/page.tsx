
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MissouriNewsClient } from "./_components/missouri-news-client";
import { missouriNewsSources } from "@/data/missouri-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MissouriNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MissouriNewsClient sources={missouriNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
