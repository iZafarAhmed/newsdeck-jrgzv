
export interface RhodeIslandNewsSource {
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

export const rhodeIslandNewsSources: RhodeIslandNewsSource[] = [
    {
        name: 'The Providence Journal',
        description: 'The largest newspaper in Rhode Island, covering Providence and the entire state.',
        websiteUrl: 'https://www.providencejournal.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/providencejournal',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/projo',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/providencejournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WPRI 12',
        description: 'CBS affiliate in Providence, providing local news, weather, and investigative reporting.',
        websiteUrl: 'https://www.wpri.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/wpri12',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/wpri12',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/wpri12/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WJAR (NBC 10)',
        description: 'NBC affiliate serving Providence and southern New England.',
        websiteUrl: 'https://turnto10.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/turnto10',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/turnto10',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/turnto10/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WLNE-TV (ABC 6)',
        description: 'ABC affiliate for Providence and New Bedford, MA.',
        websiteUrl: 'https://www.abc6.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/abc6providence',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/abc6',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/abc6news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Public\'s Radio',
        description: 'The NPR member station for Rhode Island and southeastern Massachusetts.',
        websiteUrl: 'https://thepublicsradio.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/thepublicsradio',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/thepublicsradio',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/thepublicsradio/',
        type: 'Radio',
        country: 'USA'
    }
];
