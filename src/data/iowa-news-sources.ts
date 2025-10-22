
export interface IowaNewsSource {
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

export const iowaNewsSources: IowaNewsSource[] = [
    {
        name: 'The Des Moines Register',
        description: 'The largest newspaper in Iowa, covering Des Moines and statewide news.',
        websiteUrl: 'https://www.desmoinesregister.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/desmoinesregister',
        xFollowers: '220K',
        xUrl: 'https://twitter.com/dmregister',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/dmregister/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KCCI 8 News',
        description: 'CBS affiliate in Des Moines, providing local news, weather, and sports.',
        websiteUrl: 'https://www.kcci.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/kcci8',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/kcci',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kcci8/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WHO 13',
        description: 'NBC affiliate serving central Iowa.',
        websiteUrl: 'https://who13.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/who13',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/who13news',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/who13news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WOI-TV (Local 5 News)',
        description: 'ABC affiliate for Des Moines and central Iowa.',
        websiteUrl: 'https://www.weareiowa.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/local5news',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/weareiowa5news',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/weareiowa5/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Gazette (Cedar Rapids)',
        description: 'A daily newspaper serving Cedar Rapids and Eastern Iowa.',
        websiteUrl: 'https://www.thegazette.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/gazettedotcom',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/gazettedotcom',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/thegazette/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Quad-City Times',
        description: 'A newspaper serving the Quad Cities area of Iowa and Illinois.',
        websiteUrl: 'https://qctimes.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/qctimes',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/qctimes',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/qctimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Sioux City Journal',
        description: 'The leading newspaper for Sioux City and the surrounding Siouxland region.',
        websiteUrl: 'https://siouxcityjournal.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/siouxcityjournal',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/scjournal',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/siouxcityjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Waterloo-Cedar Falls Courier',
        description: 'A daily newspaper serving the Cedar Valley.',
        websiteUrl: 'https://wcfcourier.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/wcfcourier',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/wcfcourier',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/wcfcourier/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Hawk Eye (Burlington)',
        description: 'The oldest newspaper in Iowa, serving Burlington and southeast Iowa.',
        websiteUrl: 'https://www.thehawkeye.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/thehawkeye',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/thehawkeye',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Daily Iowan',
        description: 'The independent student newspaper of the University of Iowa.',
        websiteUrl: 'https://dailyiowan.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/TheDailyIowan',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/TheDailyIowan',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/thedailyiowan/',
        type: 'University',
        country: 'USA'
    }
];
