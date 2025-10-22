
export interface NewHampshireNewsSource {
    name: string;
    description: string;
    websiteUrl: string | null;
    facebookFollowers: string | null;
    facebookUrl: string | null;
    xFollowers: string | null;
    xUrl: string | null;
    instagramFollowers: string | null;
    instagramUrl: string | null;
    type: string;
    country: string;
}

export const newHampshireNewsSources: NewHampshireNewsSource[] = [
    {
        name: 'New Hampshire Union Leader',
        description: 'The largest newspaper in New Hampshire, providing statewide news coverage.',
        websiteUrl: 'https://www.unionleader.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/unionleader',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/unionleader',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/unionleader/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WMUR-TV',
        description: 'ABC affiliate in Manchester, providing news and weather for New Hampshire.',
        websiteUrl: 'https://www.wmur.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/wmur9',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wmur9',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wmur9/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'New Hampshire Public Radio (NHPR)',
        description: 'The NPR member station for New Hampshire, providing in-depth news and analysis.',
        websiteUrl: 'https://www.nhpr.org/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/nhpr.org',
        xFollowers: '70K',
        xUrl: 'https://twitter.com/nhpr',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/nhpr/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'Concord Monitor',
        description: 'A daily newspaper serving the capital city of Concord and central New Hampshire.',
        websiteUrl: 'https://www.concordmonitor.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/ConcordMonitor',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/concordmonitor',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/concordmonitor/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Keene Sentinel',
        description: 'A daily newspaper serving the Monadnock Region.',
        websiteUrl: 'https://www.sentinelsource.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/KeeneSentinel',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/KeeneSentinel',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/keenesentinel/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Portsmouth Herald',
        description: 'A daily newspaper for the Seacoast region.',
        websiteUrl: 'https://www.seacoastonline.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/seacoastonline',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/seacoastonline',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/seacoastonline/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Nashua Telegraph',
        description: 'A daily newspaper serving Nashua and the Greater Nashua region.',
        websiteUrl: 'https://www.nashuatelegraph.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/NashuaTelegraph',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/nashuatelegraph',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/nashuatelegraph/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Valley News',
        description: 'A newspaper covering the Upper Valley region of New Hampshire and Vermont.',
        websiteUrl: 'https://www.vnews.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/vnews',
        xFollowers: '12K',
        xUrl: 'https://twitter.com/vnews',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/valleynewspaper/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'New Hampshire Business Review',
        description: "The state's only weekly business newspaper.",
        websiteUrl: 'https://www.nhbr.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/NHBR',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/nhbr',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/nhbr_/',
        type: 'Business News',
        country: 'USA'
    },
    {
        name: 'InDepthNH.org',
        description: 'A non-profit investigative news outlet for New Hampshire.',
        websiteUrl: 'https://indepthnh.org/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/InDepthNH',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/indepthnh',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Nonprofit',
        country: 'USA'
    }
];
