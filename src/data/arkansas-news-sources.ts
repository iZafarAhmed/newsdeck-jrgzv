
export interface ArkansasNewsSource {
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

export const arkansasNewsSources: ArkansasNewsSource[] = [
    {
        name: 'Arkansas Democrat-Gazette',
        description: 'The largest newspaper in Arkansas, providing statewide news coverage.',
        websiteUrl: 'https://www.arkansasonline.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/arkansasonline',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/arkansasonline',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/arkansasonline/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KARK 4 News',
        description: 'NBC affiliate in Little Rock, providing local news, weather, and sports.',
        websiteUrl: 'https://www.kark.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/kark4',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/kark4news',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/kark4news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'THV11',
        description: 'CBS affiliate serving Central Arkansas with news and weather.',
        websiteUrl: 'https://www.thv11.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/thv11',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/thv11',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/thv_11/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KATV',
        description: 'ABC affiliate for Little Rock and Central Arkansas.',
        websiteUrl: 'https://katv.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/katvchannel7',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/katvnews',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/katvnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: '5NEWS',
        description: 'CBS affiliate serving Northwest Arkansas and the River Valley.',
        websiteUrl: 'https://www.5newsonline.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/5news',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/5newsonline',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/5newsonline/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Arkansas Times',
        description: 'An alternative weekly newspaper based in Little Rock.',
        websiteUrl: 'https://arktimes.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/arkansastimes',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/arktimes',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/arktimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Talk Business & Politics',
        description: 'A news website covering business and politics in Arkansas.',
        websiteUrl: 'https://talkbusiness.net/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/talkbusiness',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/talkbusiness',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Arkansas Money & Politics',
        description: 'A publication focusing on business, politics, and culture in Arkansas.',
        websiteUrl: 'https://www.amppob.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/armoneyandpolitics',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/amppob',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/armoneyandpolitics/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'The Jonesboro Sun',
        description: 'A daily newspaper serving Jonesboro and Northeast Arkansas.',
        websiteUrl: 'https://www.jonesborosun.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/JonesboroSun',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/jonesborosun',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/jonesborosun/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Baxter Bulletin',
        description: 'A newspaper serving Mountain Home and the Twin Lakes Area.',
        websiteUrl: 'https://www.baxterbulletin.com/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/baxterbulletin',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/baxterbulletin',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    }
];
