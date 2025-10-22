
export interface NewJerseyNewsSource {
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

export const newJerseyNewsSources: NewJerseyNewsSource[] = [
    {
        name: 'The Star-Ledger',
        description: 'The largest newspaper in New Jersey, covering statewide news.',
        websiteUrl: 'https://www.nj.com/starledger/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/starledger',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/starledger',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/njdotcom/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'NJ.com',
        description: 'A major news and information website for New Jersey.',
        websiteUrl: 'https://www.nj.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/njdotcom',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/njdotcom',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/njdotcompix/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'News 12 New Jersey',
        description: 'A 24-hour local news channel serving New Jersey.',
        websiteUrl: 'https://newjersey.news12.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/news12nj',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/news12nj',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/news12nj/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Record (North Jersey)',
        description: 'A daily newspaper covering Bergen, Passaic, Hudson, and Essex counties.',
        websiteUrl: 'https://www.northjersey.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/northjerseynews',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/northjersey',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/northjerseynews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Asbury Park Press',
        description: 'A daily newspaper serving Monmouth and Ocean counties.',
        websiteUrl: 'https://www.app.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/asburyParkPress',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/asburyparkpress',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/asburyparkpress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Courier-Post',
        description: 'A daily newspaper serving Camden County and South Jersey.',
        websiteUrl: 'https://www.courierpostonline.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/courierpost',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/courierpost',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/courierpost/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Trentonian',
        description: 'A daily newspaper for Trenton and Mercer County.',
        websiteUrl: 'https://www.trentonian.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/trentonian',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/trentonian',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/trentonian/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'NJ Spotlight News',
        description: 'The news division of NJ PBS, providing in-depth coverage of public policy and politics.',
        websiteUrl: 'https://www.njspotlightnews.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/njspotlightnews',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/njspotlightnews',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/njspotlightnews/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Jersey Shore Online',
        description: 'A network of weekly newspapers and an online news source for the Jersey Shore.',
        websiteUrl: 'https://www.jerseyshoreonline.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/jerseyshoreonline',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/jshoreonline',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Press of Atlantic City',
        description: 'A daily newspaper serving Atlantic City and southeastern New Jersey.',
        websiteUrl: 'https://pressofatlanticcity.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/pressofac',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/pressofac',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/pressofac/',
        type: 'Newspaper',
        country: 'USA'
    }
];
