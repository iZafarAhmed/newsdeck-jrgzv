
export interface NorthDakotaNewsSource {
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

export const northDakotaNewsSources: NorthDakotaNewsSource[] = [
    {
        name: 'The Bismarck Tribune',
        description: 'The official newspaper of Bismarck, the state capital of North Dakota.',
        websiteUrl: 'https://bismarcktribune.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/bismarcktribune',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/bistrib',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/bismarcktribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Forum of Fargo-Moorhead',
        description: 'A daily newspaper serving Fargo, North Dakota, and Moorhead, Minnesota.',
        websiteUrl: 'https://www.inforum.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/inforum',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/inforum',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/inforum/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Grand Forks Herald',
        description: 'The daily newspaper for Grand Forks and northeastern North Dakota.',
        websiteUrl: 'https://www.grandforksherald.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/gforksherald',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/gforksherald',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/grandforksherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Minot Daily News',
        description: 'A daily newspaper serving Minot and the surrounding area.',
        websiteUrl: 'https://www.minotdailynews.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/MinotDailyNews',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/minotdailynews',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/minotdailynews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KVLY-TV (Valley News Live)',
        description: 'NBC and CBS affiliate for the Fargo-Moorhead area.',
        websiteUrl: 'https://www.valleynewslive.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/valleynewslive',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/valleynewslive',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/valleynewslive/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KFYR-TV',
        description: 'NBC affiliate serving Bismarck and western North Dakota.',
        websiteUrl: 'https://www.kfyrtv.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/kfyrtv',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/kfyrtv',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/kfyrtv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WDAY-TV',
        description: 'ABC affiliate for Fargo and southeastern North Dakota.',
        websiteUrl: 'https://www.wday.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/wdaytv',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/wday',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/wdaytv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Prairie Public Broadcasting',
        description: 'The PBS and NPR member station for North Dakota.',
        websiteUrl: 'https://www.prairiepublic.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/prairiepublic',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/prairiepublic',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/prairiepublic/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'The Dickinson Press',
        description: 'A daily newspaper for Dickinson and southwestern North Dakota.',
        websiteUrl: 'https://www.thedickinsonpress.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/thedickinsonpress',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/dickinsonpress',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/thedickinsonpress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Jamestown Sun',
        description: 'A daily newspaper serving Jamestown and Stutsman County.',
        websiteUrl: 'https://www.jamestownsun.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/jamestownsun',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/jamestownsun',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/thejamestownsun/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Say Anything Blog',
        description: 'A prominent political blog covering North Dakota politics and news.',
        websiteUrl: 'https://www.sayanythingblog.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/sayanythingblog',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/robport',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Blog',
        country: 'USA'
    },
    {
        name: 'The Wahpeton Daily News',
        description: 'A daily newspaper serving Wahpeton and Richland County.',
        websiteUrl: 'https://www.wahpetondailynews.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/wahpetondailynews',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/wahpetonnews',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Williston Herald',
        description: 'The newspaper for Williston and the surrounding Bakken region.',
        websiteUrl: 'https://www.willistonherald.com/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/willistonherald',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/willistonherald',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/willistonherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KX News',
        description: 'CBS affiliate serving western North Dakota.',
        websiteUrl: 'https://www.kxnet.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/kxnews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/kxnews',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/kxnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'AM 1100 The Flag WZFG',
        description: 'A conservative talk radio station based in Fargo.',
        websiteUrl: 'https://www.am1100theflag.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/am1100theflag',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/am1100theflag',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Dakotan',
        description: 'An online news source with a focus on North and South Dakota.',
        websiteUrl: 'https://www.thedakotan.com/',
        facebookFollowers: '2K',
        facebookUrl: 'https://www.facebook.com/thedakotan',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/thedakotan',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Devils Lake Journal',
        description: 'A newspaper serving Devils Lake and the Lake Region.',
        websiteUrl: 'https://www.devilslakejournal.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/devilslakejournal',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/dljournal',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'BEK News',
        description: 'A conservative news network covering North Dakota.',
        websiteUrl: 'https://www.bek.news/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/beknews',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/beknews',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/beknews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Pierce County Tribune',
        description: 'A weekly newspaper serving Rugby and Pierce County.',
        websiteUrl: 'https://www.thepiercecountytribune.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/thepiercecountytribune',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/pctribune',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Daily News (Wahpeton)',
        description: 'A daily newspaper for the southern Red River Valley.',
        websiteUrl: 'https://www.wahpetondailynews.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/wahpetondailynews',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/WDNNews',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    }
];
