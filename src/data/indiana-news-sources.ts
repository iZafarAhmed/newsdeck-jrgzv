
export interface IndianaNewsSource {
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

export const indianaNewsSources: IndianaNewsSource[] = [
    {
        name: 'The Indianapolis Star',
        description: 'The largest newspaper in Indiana, covering Indianapolis and statewide news.',
        websiteUrl: 'https://www.indystar.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/indystar',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/indystar',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/indystar/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WTHR Channel 13',
        description: 'NBC affiliate in Indianapolis, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wthr.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wthr13',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/wthrcom',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/wthrcom/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WRTV Indianapolis',
        description: 'ABC affiliate serving the Indianapolis metropolitan area.',
        websiteUrl: 'https://www.wrtv.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/wrtv6',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wrtv',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/wrtvnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'FOX59',
        description: 'Fox affiliate in Indianapolis, providing news and entertainment.',
        websiteUrl: 'https://fox59.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/fox59news',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/fox59',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/fox59/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'CBS4 Indy',
        description: 'CBS affiliate covering news and weather for central Indiana.',
        websiteUrl: 'https://www.cbs4indy.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/cbs4indy',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/cbs4indy',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/cbs4indy/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Times of Northwest Indiana',
        description: 'A daily newspaper serving Lake, Porter, and LaPorte counties.',
        websiteUrl: 'https://www.nwitimes.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/nwi.com',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/nwi',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/nwi.times/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'South Bend Tribune',
        description: 'The daily newspaper for South Bend and the Michiana region.',
        websiteUrl: 'https://www.southbendtribune.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/southbendtribune',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/sbtribune',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/southbendtribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Journal Gazette (Fort Wayne)',
        description: 'A daily newspaper serving Fort Wayne and northeast Indiana.',
        websiteUrl: 'https://www.journalgazette.net/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/journalgazette',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/JGfortwayne',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/journalgazette/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Herald-Times (Bloomington)',
        description: 'The daily newspaper for Bloomington and Monroe County.',
        websiteUrl: 'https://www.heraldtimesonline.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/heraldtimesonline',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/theheraldtimes',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/heraldtimesonline/',
        type: 'Newspaper',
        country: 'USA'
    }
];
