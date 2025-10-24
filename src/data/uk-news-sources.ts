
export interface UKNewsSource {
    name: string;
    description: string;
    websiteUrl: string;
    facebookFollowers: string;
    facebookUrl: string;
    xFollowers: string;
    xUrl: string;
    instagramFollowers: string;
    instagramUrl: string;
    type: string;
    country: string;
}

export const ukNewsSources: UKNewsSource[] = [
    {
        name: 'BBC News',
        description: "The UK's public service broadcaster, offering impartial news coverage.",
        websiteUrl: 'https://www.bbc.co.uk/news',
        facebookFollowers: '58M',
        facebookUrl: 'https://www.facebook.com/bbcnews',
        xFollowers: '15.5M',
        xUrl: 'https://twitter.com/BBCNews',
        instagramFollowers: '25.6M',
        instagramUrl: 'https://www.instagram.com/bbcnews/',
        type: 'Public Broadcaster',
        country: 'UK'
    },
    {
        name: 'The Guardian',
        description: 'A leading liberal voice with in-depth analysis and investigative journalism.',
        websiteUrl: 'https://www.theguardian.com/uk',
        facebookFollowers: '8.5M',
        facebookUrl: 'https://www.facebook.com/theguardian',
        xFollowers: '10.9M',
        xUrl: 'https://twitter.com/guardian',
        instagramFollowers: '6.4M',
        instagramUrl: 'https://www.instagram.com/guardian/',
        type: 'Newspaper',
        country: 'UK'
    },
    {
        name: 'The Times',
        description: 'A daily national newspaper based in London, known for its influential reporting since 1785.',
        websiteUrl: 'https://www.thetimes.co.uk/',
        facebookFollowers: '1.4M',
        facebookUrl: 'https://www.facebook.com/thetimes',
        xFollowers: '1.9M',
        xUrl: 'https://twitter.com/thetimes',
        instagramFollowers: '622K',
        instagramUrl: 'https://www.instagram.com/thetimes/',
        type: 'Newspaper',
        country: 'UK'
    },
    {
        name: 'The Telegraph',
        description: 'A national British daily broadsheet newspaper published in London.',
        websiteUrl: 'https://www.telegraph.co.uk/',
        facebookFollowers: '4.6M',
        facebookUrl: 'https://www.facebook.com/TELEGRAPH.CO.UK',
        xFollowers: '3.6M',
        xUrl: 'https://twitter.com/Telegraph',
        instagramFollowers: '422K',
        instagramUrl: 'https://www.instagram.com/telegraph/',
        type: 'Newspaper',
        country: 'UK'
    },
    {
        name: 'The Independent',
        description: 'A British online newspaper, established in 1986 as a national morning printed paper.',
        websiteUrl: 'https://www.independent.co.uk/',
        facebookFollowers: '9.2M',
        facebookUrl: 'https://www.facebook.com/TheIndependentOnline',
        xFollowers: '3.6M',
        xUrl: 'https://twitter.com/Independent',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/the.independent/',
        type: 'Online Media',
        country: 'UK'
    },
    {
        name: 'Financial Times',
        description: 'An international daily newspaper with a special emphasis on business and economic news.',
        websiteUrl: 'https://www.ft.com/',
        facebookFollowers: '4.5M',
        facebookUrl: 'https://www.facebook.com/financialtimes',
        xFollowers: '6.2M',
        xUrl: 'https://twitter.com/FT',
        instagramFollowers: '1.7M',
        instagramUrl: 'https://www.instagram.com/financialtimes/',
        type: 'Newspaper',
        country: 'UK'
    },
    {
        name: 'Sky News',
        description: 'A British free-to-air television news channel and organization.',
        websiteUrl: 'https://news.sky.com/',
        facebookFollowers: '8.4M',
        facebookUrl: 'https://www.facebook.com/skynews',
        xFollowers: '8.7M',
        xUrl: 'https://twitter.com/SkyNews',
        instagramFollowers: '1.4M',
        instagramUrl: 'https://www.instagram.com/skynews/',
        type: 'Broadcasting',
        country: 'UK'
    },
    {
        name: 'Channel 4 News',
        description: 'The main news programme on British television broadcaster Channel 4.',
        websiteUrl: 'https://www.channel4.com/news',
        facebookFollowers: '3M',
        facebookUrl: 'https://www.facebook.com/Channel4News',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/Channel4News',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/channel4news/',
        type: 'Broadcasting',
        country: 'UK'
    },
    {
        name: 'ITV News',
        description: 'The branding of news programmes on the British television network ITV.',
        websiteUrl: 'https://www.itv.com/news',
        facebookFollowers: '2.8M',
        facebookUrl: 'https://www.facebook.com/itvnews',
        xFollowers: '2.4M',
        xUrl: 'https://twitter.com/itvnews',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/itvnews/',
        type: 'Broadcasting',
        country: 'UK'
    }
];
