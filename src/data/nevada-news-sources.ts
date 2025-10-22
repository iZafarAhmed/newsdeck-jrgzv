
export interface NevadaNewsSource {
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

export const nevadaNewsSources: NevadaNewsSource[] = [
    {
        name: 'Las Vegas Review-Journal',
        description: 'Nevada’s largest newspaper, covering Las Vegas and Southern Nevada.',
        websiteUrl: 'https://www.reviewjournal.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/reviewjournal',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/reviewjournal',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/reviewjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Las Vegas Sun',
        description: 'A daily newspaper serving the Las Vegas area.',
        websiteUrl: 'https://lasvegassun.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/lasvegassun',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/lasvegassun',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/lasvegassun/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KLAS-TV (8 News Now)',
        description: 'CBS affiliate in Las Vegas, providing local news, weather, and sports.',
        websiteUrl: 'https://www.8newsnow.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/8NewsNow',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/8newsnow',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/8newsnow/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KTNV (13 Action News)',
        description: 'ABC affiliate serving the Las Vegas metropolitan area.',
        websiteUrl: 'https://www.ktnv.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/ktnv13',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/ktnv',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/ktnv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KSNV (News 3)',
        description: 'NBC affiliate for Las Vegas, providing local news and weather.',
        websiteUrl: 'https://news3lv.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/news3lv',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/news3lv',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/news3lv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KVVU (FOX5 Vegas)',
        description: 'Fox affiliate in Las Vegas, offering news and entertainment.',
        websiteUrl: 'https://www.fox5vegas.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/fox5vegas',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/fox5vegas',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/fox5vegas/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Reno Gazette-Journal',
        description: 'The main daily newspaper for Reno and Northern Nevada.',
        websiteUrl: 'https://www.rgj.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/rgjmedia',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/rgj',
        instagramFollowers: '25K',
        instagramUrl: 'https://www.instagram.com/rgjmedia/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KOLO 8 News Now',
        description: 'ABC affiliate serving the Reno-Tahoe area.',
        websiteUrl: 'https://www.kolotv.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/kolo8newsnow',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/kolo8',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/kolo8newsnow/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Nevada Independent',
        description: 'A non-profit, non-partisan news organization covering politics and public policy in Nevada.',
        websiteUrl: 'https://thenevadaindependent.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/TheNevadaIndependent',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/TheNVIndy',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/thenevadaindependent/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Las Vegas Weekly',
        description: 'An alternative weekly newspaper covering news, arts, and culture in Las Vegas.',
        websiteUrl: 'https://lasvegasweekly.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/lasvegasweekly',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/lasvegasweekly',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/lasvegasweekly/',
        type: 'Newspaper',
        country: 'USA'
    }
];
