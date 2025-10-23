
export interface TexasNewsSource {
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

export const texasNewsSources: TexasNewsSource[] = [
    {
        name: 'The Dallas Morning News',
        description: 'The leading daily newspaper of Dallas, providing in-depth coverage of North Texas.',
        websiteUrl: 'https://www.dallasnews.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/dallasnews',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/dallasnews',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/dallasnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Houston Chronicle',
        description: 'The largest newspaper in Houston and the third-largest in the United States by circulation.',
        websiteUrl: 'https://www.houstonchronicle.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/houstonchronicle',
        xFollowers: '700K',
        xUrl: 'https://twitter.com/houstonchron',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/houstonchron/',
        type: 'Newspaper',
        country: 'USA'
    }
];
