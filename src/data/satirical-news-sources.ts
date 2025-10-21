
export interface SatiricalNewsSource {
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

export const satiricalNewsSources: SatiricalNewsSource[] = [
    {
        name: 'The Onion',
        description: "America's Finest News Source.",
        websiteUrl: 'https://www.theonion.com/',
        facebookFollowers: '6.1M',
        facebookUrl: 'https://www.facebook.com/TheOnion',
        xFollowers: '11.6M',
        xUrl: 'https://twitter.com/TheOnion',
        instagramFollowers: '4.6M',
        instagramUrl: 'https://www.instagram.com/theonion/',
        type: 'Satire',
        country: 'USA'
    },
    {
        name: 'The Babylon Bee',
        description: 'Your trusted source for Christian news satire.',
        websiteUrl: 'https://babylonbee.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/TheBabylonBee',
        xFollowers: '3M',
        xUrl: 'https://twitter.com/TheBabylonBee',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/thebabylonbee/',
        type: 'Satire',
        country: 'USA'
    },
    {
        name: 'Reductress',
        description: 'The first and only satirical women’s magazine.',
        websiteUrl: 'https://reductress.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/reductress',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/reductress',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/reductress/',
        type: 'Satire',
        country: 'USA'
    },
    {
        name: 'The Hard Times',
        description: 'A punk news site you can trust.',
        websiteUrl: 'https://thehardtimes.net/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/thehardtimesnews',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/thehardtimesnews',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/thehardtimesnews/',
        type: 'Satire',
        country: 'USA'
    },
    {
        name: 'ClickHole',
        description: 'Because all content deserves to go viral.',
        websiteUrl: 'https://clickhole.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/clickhole',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/clickhole',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/clickhole/',
        type: 'Satire',
        country: 'USA'
    }
];
