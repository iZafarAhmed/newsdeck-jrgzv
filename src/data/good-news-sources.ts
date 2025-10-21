
export interface GoodNewsSource {
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

export const goodNewsSources: GoodNewsSource[] = [
    {
        name: 'Good News Network',
        description: 'The #1 source for good news, delivering positive stories to millions of readers.',
        websiteUrl: 'https://www.goodnewsnetwork.org/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/thegoodnewsnetwork',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/goodnewsnetwork',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/goodnews_network/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Optimist Daily',
        description: 'Delivering solutions-focused news to your inbox daily.',
        websiteUrl: 'https://www.optimistdaily.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/optimistdaily',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/optimistdaily',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/theoptimistdaily/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Positive News',
        description: 'The magazine for good journalism about good things.',
        websiteUrl: 'https://www.positive.news/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/positive.news.uk',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/positivenewsuk',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/positivenewsuk/',
        type: 'Magazine',
        country: 'UK'
    },
    {
        name: 'The Happy Newspaper',
        description: 'A platform to share positive news and wonderful people.',
        websiteUrl: 'https://thehappynewspaper.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/thehappynewspaper',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/happynewspaper_',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/thehappynewspaper/',
        type: 'Newspaper',
        country: 'UK'
    },
    {
        name: 'Grist',
        description: 'A nonprofit, independent media organization dedicated to telling stories of climate solutions and a just future.',
        websiteUrl: 'https://grist.org/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/grist.org',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/grist',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/grist/',
        type: 'Nonprofit',
        country: 'USA'
    }
];
