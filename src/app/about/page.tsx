
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">About Newslisted</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Newslisted is your one-stop destination for the latest news from around the world. We bring you curated lists of news sources, conveniently categorized to help you explore and discover new perspectives.
        </p>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            In an era of information overload, our mission is to provide a clear and organized way to access a wide variety of news sources. We believe in empowering our users to explore different viewpoints, discover specialized publications, and stay informed on the topics that matter most to them. Whether you're interested in world events, niche industries, or local happenings, Newslisted is designed to be your starting point.
          </p>

          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <ul>
            <li><strong>Curated Categories:</strong> We organize hundreds of news sources into intuitive categories, from global news and business to specialized topics like agriculture, aviation, and even satirical news.</li>
            <li><strong>Discoverability:</strong> Our platform makes it easy to find new sources you might not have encountered otherwise.</li>
            <li><strong>Simple Interface:</strong> With a clean, searchable, and sortable layout, finding the information you need is straightforward and efficient.</li>
          </ul>

          <h2 className="text-2xl font-semibold">For Everyone</h2>
          <p>
            Newslisted is built for journalists, researchers, students, and anyone curious about the world. We strive to provide a comprehensive directory that is both useful and easy to navigate. While we are not a news provider ourselves, we are passionate about making the world's news more accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
