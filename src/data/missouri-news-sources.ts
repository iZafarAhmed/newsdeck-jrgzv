
export interface MissouriNewsSource {
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

export const missouriNewsSources: MissouriNewsSource[] = [
    {
        name: 'St. Louis Post-Dispatch',
        description: 'The major daily newspaper for the St. Louis metropolitan area.',
        websiteUrl: 'https://www.stltoday.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/stltoday',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/stltoday',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/stltoday/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KMOV (CBS 4)',
        description: 'CBS affiliate serving St. Louis and the surrounding region.',
        websiteUrl: 'https://www.kmov.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/kmov4',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/kmov',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/kmov4/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KSDK (5 On Your Side)',
        description: 'NBC affiliate in St. Louis, providing local news, weather, and sports.',
        websiteUrl: 'https://www.ksdk.com/',
        facebookFollowers: '900K',
        facebookUrl: 'https://www.facebook.com/ksdktv',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/ksdknews',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/ksdknews/',
        type: 'Broadcasting',
        country: 'USA'
    }
];
