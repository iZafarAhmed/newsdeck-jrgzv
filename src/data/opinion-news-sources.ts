
export interface OpinionNewsSource {
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

export const opinionNewsSources: OpinionNewsSource[] = [
    {
        name: 'The New York Times Opinion',
        description: 'A section for thought-provoking essays, columns, and op-eds from a variety of perspectives.',
        websiteUrl: 'https://www.nytimes.com/section/opinion',
        facebookFollowers: '18M',
        facebookUrl: 'https://www.facebook.com/nytimes',
        xFollowers: '55M',
        xUrl: 'https://twitter.com/nytopinion',
        instagramFollowers: '19M',
        instagramUrl: 'https://www.instagram.com/nytimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Guardian Opinion',
        description: 'A platform for a diverse range of voices, offering commentary on politics, culture, and social issues.',
        websiteUrl: 'https://www.theguardian.com/opinion',
        facebookFollowers: '8.5M',
        facebookUrl: 'https://www.facebook.com/theguardian',
        xFollowers: '10.9M',
        xUrl: 'https://twitter.com/guardianopinion',
        instagramFollowers: '6.4M',
        instagramUrl: 'https://www.instagram.com/guardian/',
        type: 'Newspaper',
        country: 'UK'
    },
    {
        name: 'The Wall Street Journal Opinion',
        description: 'Features commentary from a conservative perspective on business, economics, and politics.',
        websiteUrl: 'https://www.wsj.com/opinion',
        facebookFollowers: '7.6M',
        facebookUrl: 'https://www.facebook.com/wsj',
        xFollowers: '20.8M',
        xUrl: 'https://twitter.com/wsjopinion',
        instagramFollowers: '5.4M',
        instagramUrl: 'https://www.instagram.com/wsj/',
        type: 'Newspaper',
        country: 'USA'
    }
];
