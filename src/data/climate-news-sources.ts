
export interface ClimateNewsSource {
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

export const climateNewsSources: ClimateNewsSource[] = [
    {
        name: 'The Guardian - Climate Change',
        description: 'Latest news and features on climate change from the Guardian.',
        websiteUrl: 'https://www.theguardian.com/environment/climate-change',
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
        name: 'The New York Times - Climate',
        description: 'In-depth articles and reporting on climate change and environmental policy.',
        websiteUrl: 'https://www.nytimes.com/section/climate',
        facebookFollowers: '18M',
        facebookUrl: 'https://www.facebook.com/nytimes',
        xFollowers: '55M',
        xUrl: 'https://twitter.com/nytimes',
        instagramFollowers: '19M',
        instagramUrl: 'https://www.instagram.com/nytimes/',
        type: 'Newspaper',
        country: 'USA'
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
    },
    {
        name: 'Inside Climate News',
        description: 'A Pulitzer Prize-winning, nonprofit, nonpartisan news organization dedicated to covering climate change, energy and the environment.',
        websiteUrl: 'https://insideclimatenews.org/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/insideclimatenews',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/insideclimate',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/insideclimatenews/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Climate Central',
        description: 'An independent organization of leading scientists and journalists researching and reporting the facts about our changing climate and its impact on the public.',
        websiteUrl: 'https://www.climatecentral.org/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/climatecentral',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/climatecentral',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/climatecentral/',
        type: 'Organization',
        country: 'USA'
    }
];
