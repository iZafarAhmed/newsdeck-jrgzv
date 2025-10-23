
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
    }
];
