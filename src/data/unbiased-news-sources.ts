
export interface UnbiasedNewsSource {
    name: string;
    description: string;
    websiteUrl: string;
    facebookFollowers: string | null;
    facebookUrl: string | null;
    xFollowers: string | null;
    xUrl: string | null;
    instagramFollowers: string | null;
    instagramUrl: string | null;
    type: string;
    country: string;
}

export const unbiasedNewsSources: UnbiasedNewsSource[] = [
    {
        name: 'Associated Press (AP)',
        description: 'An independent global news organization dedicated to factual reporting.',
        websiteUrl: 'https://apnews.com/',
        facebookFollowers: '1.7M',
        facebookUrl: 'https://www.facebook.com/APNews',
        xFollowers: '15.8M',
        xUrl: 'https://twitter.com/AP',
        instagramFollowers: '1.6M',
        instagramUrl: 'https://www.instagram.com/apnews/',
        type: 'News Agency',
        country: 'USA'
    },
    {
        name: 'Reuters',
        description: 'The news and media division of Thomson Reuters, providing breaking news, pictures, and video.',
        websiteUrl: 'https://www.reuters.com/',
        facebookFollowers: '8.1M',
        facebookUrl: 'https://www.facebook.com/Reuters',
        xFollowers: '27M',
        xUrl: 'https://twitter.com/Reuters',
        instagramFollowers: '5.2M',
        instagramUrl: 'https://www.instagram.com/reuters/',
        type: 'News Agency',
        country: 'UK'
    },
    {
        name: 'BBC News',
        description: 'The world\'s largest broadcast news organisation, providing international news and analysis.',
        websiteUrl: 'https://www.bbc.com/news',
        facebookFollowers: '58M',
        facebookUrl: 'https://www.facebook.com/bbcnews',
        xFollowers: '57.5M',
        xUrl: 'https://twitter.com/BBCNews',
        instagramFollowers: '35.1M',
        instagramUrl: 'https://www.instagram.com/bbcnews/',
        type: 'Public Broadcasting',
        country: 'UK'
    },
    {
        name: 'NPR',
        description: 'A privately and publicly funded non-profit media organization that serves as a national syndicator to a network of 900 public radio stations in the United States.',
        websiteUrl: 'https://www.npr.org/',
        facebookFollowers: '7.4M',
        facebookUrl: 'https://www.facebook.com/NPR',
        xFollowers: '8.2M',
        xUrl: 'https://twitter.com/NPR',
        instagramFollowers: '6.4M',
        instagramUrl: 'https://www.instagram.com/npr/',
        type: 'Radio',
        country: 'USA'
    }
];
