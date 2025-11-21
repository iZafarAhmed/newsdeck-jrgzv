
import { MissouriNewsClient } from "./_components/missouri-news-client";
import { missouriNewsSources } from "@/data/missouri-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MissouriNewsPage() {
  return (
        <MissouriNewsClient sources={missouriNewsSources} />
  );
}
