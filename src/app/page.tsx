import { NewsDeckClient } from "@/components/news-deck-client";

export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  return (
    <NewsDeckClient />
  );
}
