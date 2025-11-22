
const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
          About Newslisted
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Welcome to Newslisted, your central hub for discovering and accessing a diverse range of news sources from around the world. In an age of information overload, our mission is to simplify the way you find reliable news, whether you're interested in global events, niche industries, or local happenings.
          </p>
          <p>
            Our platform meticulously categorizes news outlets by topic—from technology and business to sports and entertainment—and by region, offering dedicated pages for news from various countries and US states. This makes it easy to explore perspectives from different parts of the world on the subjects that matter most to you.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Features</h2>
          <ul>
            <li><strong>Curated Categories:</strong> We organize hundreds of news sources into intuitive categories like World News, Tech, Business, and Sports, so you can quickly find what you're looking for.</li>
            <li><strong>Regional News Hubs:</strong> Explore dedicated pages for news from specific countries and regions, providing a global perspective on current events.</li>
            <li><strong>Powerful Search:</strong> Our search functionality allows you to find specific news sources or browse entire categories with ease.</li>
            <li><strong>AI-Powered Suggestions:</strong> Not sure what to read? Use our "Suggest" feature to get an AI-powered article recommendation based on your current filter or search query.</li>
          </ul>
          <p>
            Newslisted was built with the modern, informed reader in mind. We believe that easy access to a variety of sources is essential for a well-rounded understanding of the world. Thank you for using Newslisted as your guide to the news.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
