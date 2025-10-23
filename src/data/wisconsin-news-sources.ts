
export interface WisconsinNewsSource {
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

export const wisconsinNewsSources: WisconsinNewsSource[] = [
    {
        name: 'Milwaukee Journal Sentinel',
        description: 'The largest newspaper in Wisconsin, covering Milwaukee and the state.',
        websiteUrl: 'https://www.jsonline.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/journalsentinel',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/journalsentinel',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/journalsentinel/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Wisconsin State Journal',
        description: 'A daily newspaper based in Madison, serving as one of the two major dailies in the city.',
        websiteUrl: 'https://madison.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/wistatejournal',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/WiStateJournal',
        instagramFollowers: '25K',
        instagramUrl: 'https://www.instagram.com/wistatejournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WPR (Wisconsin Public Radio)',
        description: 'The statewide network of NPR member stations.',
        websiteUrl: 'https://www.wpr.org/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/WPR',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/WPR',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/wpr/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'WISN 12 News',
        description: 'ABC affiliate in Milwaukee, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wisn.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/wisn12',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/wisn12news',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wisn12news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'TMJ4 News',
        description: 'NBC affiliate serving the Milwaukee area.',
        websiteUrl: 'https://www.tmj4.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/tmj4',
        xFollowers: '220K',
        xUrl: 'https://twitter.com/tmj4',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/tmj4news/',
        type: 'Broadcasting',
        country: 'USA'
    }
];
