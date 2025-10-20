
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { browseNewsData } from "@/data/browse-news-data";
import Link from "next/link";

export default function BrowsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-12">
          Browse News Websites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12">
          {browseNewsData.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="text-lg font-semibold text-primary border-b pb-2">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
