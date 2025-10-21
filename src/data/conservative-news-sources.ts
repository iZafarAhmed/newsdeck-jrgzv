
export interface ConservativeNewsSource {
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

export const conservativeNewsSources: ConservativeNewsSource[] = [
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
    },
    {
        name: 'Fox News',
        description: 'A multi-platform destination for news and opinion.',
        websiteUrl: 'https://www.foxnews.com/',
        facebookFollowers: '27.1M',
        facebookUrl: 'https://www.facebook.com/FoxNews',
        xFollowers: '26.9M',
        xUrl: 'https://twitter.com/FoxNews',
        instagramFollowers: '10.4M',
        instagramUrl: 'https://www.instagram.com/foxnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Washington Times',
        description: 'A national newspaper that provides a conservative perspective on news and politics.',
        websiteUrl: 'https://www.washingtontimes.com/',
        facebookFollowers: '725.4K',
        facebookUrl: 'https://www.facebook.com/washingtontimes',
        xFollowers: '469.8K',
        xUrl: 'https://twitter.com/WashTimes',
        instagramFollowers: '121.1K',
        instagramUrl: 'https://www.instagram.com/washingtontimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'National Review',
        description: 'A leading conservative magazine and website for news, commentary, and opinion.',
        websiteUrl: 'https://www.nationalreview.com/',
        facebookFollowers: '1.4M',
        facebookUrl: 'https://www.facebook.com/nationalreview',
        xFollowers: '963.9K',
        xUrl: 'https://twitter.com/NRO',
        instagramFollowers: 'N/A',
        instagramUrl: null,
        type: 'Magazine',
        country: 'USA'
    }
];
