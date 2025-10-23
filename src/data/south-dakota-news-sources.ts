
export interface SouthDakotaNewsSource {
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

export const southDakotaNewsSources: SouthDakotaNewsSource[] = [
    {
        name: 'Argus Leader',
        description: 'The largest newspaper in South Dakota, serving Sioux Falls and the surrounding area.',
        websiteUrl: 'https://www.argusleader.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/argusleader',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/argusleader',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/argusleader/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Rapid City Journal',
        description: 'A daily newspaper serving Rapid City and the Black Hills region.',
        websiteUrl: 'https://rapidcityjournal.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/rapidcityjournal',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/rcjournal',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/rapidcityjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KELOLAND News',
        description: 'CBS affiliate providing news, weather, and sports for South Dakota.',
        websiteUrl: 'https://www.keloland.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/kelolandnews',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/keloland',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/keloland/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KSFY (ABC)',
        description: 'ABC affiliate serving Sioux Falls and the surrounding region.',
        websiteUrl: 'https://www.dakotanewsnow.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/dakotanewsnow',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/dakotanews_now',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/dakotanewsnow/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'South Dakota Public Broadcasting (SDPB)',
        description: 'The statewide public media network for South Dakota.',
        websiteUrl: 'https://www.sdpb.org/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/SoDakPB',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/SoDakPB',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/southdakotapublicbroadcasting/',
        type: 'Public Media',
        country: 'USA'
    }
];
