
export interface TexasNewsSource {
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

export const texasNewsSources: TexasNewsSource[] = [
    {
        name: 'The Dallas Morning News',
        description: 'The leading daily newspaper of Dallas, providing in-depth coverage of North Texas.',
        websiteUrl: 'https://www.dallasnews.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/dallasnews',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/dallasnews',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/dallasnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Houston Chronicle',
        description: 'The largest newspaper in Houston and the third-largest in the United States by circulation.',
        websiteUrl: 'https://www.houstonchronicle.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/houstonchronicle',
        xFollowers: '700K',
        xUrl: 'https://twitter.com/houstonchron',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/houstonchron/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Austin American-Statesman',
        description: 'The major daily newspaper for Austin, the state capital.',
        websiteUrl: 'https://www.statesman.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/statesman',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/statesman',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/statesman/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WFAA',
        description: 'ABC affiliate in Dallas-Fort Worth, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wfaa.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/wfaachannel8',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/wfaa',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/wfaa/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KHOU 11',
        description: 'CBS affiliate serving the Houston area.',
        websiteUrl: 'https://www.khou.com/',
        facebookFollowers: '1.8M',
        facebookUrl: 'https://www.facebook.com/khou11',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/khou',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/khou11/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KUT',
        description: "NPR member station for Austin, providing local and national news.",
        websiteUrl: 'https://www.kut.org/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/kutnews',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/kut',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/kut_austin/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Texas Tribune',
        description: 'A nonprofit, nonpartisan media organization that informs Texans about public policy, politics, government and statewide issues.',
        websiteUrl: 'https://www.texastribune.org/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/texastribune',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/texastribune',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/texastribune/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Dallas Observer',
        description: 'An alternative weekly newspaper in Dallas.',
        websiteUrl: 'https://www.dallasobserver.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/dallasobserver',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/dallasobserver',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/dallasobserver/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Houston Press',
        description: 'An alternative weekly newspaper serving Houston.',
        websiteUrl: 'https://www.houstonpress.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/houstonpress',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/houstonpress',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/houstonpress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'San Antonio Express-News',
        description: 'A daily newspaper serving San Antonio and South Texas.',
        websiteUrl: 'https://www.expressnews.com/',
        facebookFollowers: '350K',
        facebookUrl: 'https://www.facebook.com/mysanantonio',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/mySA',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/mysanantonio/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Fort Worth Star-Telegram',
        description: 'A major daily newspaper serving Fort Worth and the western half of the North Texas area.',
        websiteUrl: 'https://www.star-telegram.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/startelegram',
        xFollowers: '220K',
        xUrl: 'https://twitter.com/startelegram',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/dfwstartelegram/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KERA News',
        description: 'NPR and PBS member station for North Texas.',
        websiteUrl: 'https://www.keranews.org/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/keranews',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/keranews',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/keranews/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Houston Public Media',
        description: 'A service of the University of Houston, providing public radio and television programming.',
        websiteUrl: 'https://www.houstonpublicmedia.org/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/houstonpublicmedia',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/houstonpubmedia',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/houstonpubmedia/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Texas Monthly',
        description: 'A monthly magazine covering Texas politics, culture, and lifestyle.',
        websiteUrl: 'https://www.texasmonthly.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/texasmonthly',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/texasmonthly',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/texasmonthly/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'KVUE',
        description: 'ABC affiliate for Austin.',
        websiteUrl: 'https://www.kvue.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/kvueinsider',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/kvue',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kvuenews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KENS 5',
        description: 'CBS affiliate serving San Antonio.',
        websiteUrl: 'https://www.kens5.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/kens5',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/kens5',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kens5/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'NBC 5 Dallas-Fort Worth',
        description: 'NBC-owned television station licensed to Fort Worth, Texas, and serving the Dallas–Fort Worth metroplex.',
        websiteUrl: 'https://www.nbcdfw.com/',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/NBCDFW',
        xFollowers: '526.9K',
        xUrl: 'https://twitter.com/NBCDFW',
        instagramFollowers: '153.4K',
        instagramUrl: 'https://www.instagram.com/nbcdfw/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KTRK-TV (ABC 13 Houston)',
        description: 'ABC-owned television station in Houston.',
        websiteUrl: 'https://abc13.com/',
        facebookFollowers: '2.1M',
        facebookUrl: 'https://www.facebook.com/ABC13Houston',
        xFollowers: '916K',
        xUrl: 'https://twitter.com/abc13houston',
        instagramFollowers: '785.7K',
        instagramUrl: 'https://www.instagram.com/abc13houston/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'El Paso Times',
        description: 'A daily newspaper for El Paso, Texas.',
        websiteUrl: 'https://www.elpasotimes.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/elpasotimes',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/elpasotimes',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/elpasotimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Corpus Christi Caller-Times',
        description: 'The daily newspaper for Corpus Christi and the Coastal Bend.',
        websiteUrl: 'https://www.caller.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/callerdotcom',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/callerdotcom',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/callerdotcom/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Austin Chronicle',
        description: 'An alternative weekly newspaper covering news, arts, and events in Austin.',
        websiteUrl: 'https://www.austinchronicle.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/austinchronicle',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/austinchronicle',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/austinchronicle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Lubbock Avalanche-Journal',
        description: 'A daily newspaper based in Lubbock, Texas.',
        websiteUrl: 'https://www.lubbockonline.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/lubbockonline',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/lubbockonline',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/lubbockonline/',
        type: 'Newspaper',
        country: 'USA'
    }
];
