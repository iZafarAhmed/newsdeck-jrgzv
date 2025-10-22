
export interface MinnesotaNewsSource {
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

export const minnesotaNewsSources: MinnesotaNewsSource[] = [
    {
        name: 'Star Tribune',
        description: 'The largest newspaper in Minnesota, covering Minneapolis, St. Paul, and the entire state.',
        websiteUrl: 'https://www.startribune.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/startribune',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/startribune',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/startribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Pioneer Press',
        description: 'A daily newspaper serving St. Paul and the eastern Twin Cities metropolitan area.',
        websiteUrl: 'https://www.twincities.com/',
        facebookFollowers: '115.3K',
        facebookUrl: 'https://www.facebook.com/PioneerPress',
        xFollowers: '183.4K',
        xUrl: 'https://twitter.com/PioneerPress',
        instagramFollowers: '16.2K',
        instagramUrl: 'https://www.instagram.com/pioneerpress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KARE 11',
        description: 'NBC affiliate in Minneapolis-St. Paul, providing local news, weather, and sports.',
        websiteUrl: 'https://www.kare11.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/kare11',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/kare11',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/kare11/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WCCO - CBS Minnesota',
        description: 'CBS affiliate serving the Twin Cities and greater Minnesota.',
        websiteUrl: 'https://www.cbsnews.com/minnesota/',
        facebookFollowers: '478.4K',
        facebookUrl: 'https://www.facebook.com/WCCO4',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/wcco',
        instagramFollowers: '84.3K',
        instagramUrl: 'https://www.instagram.com/wcco/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KSTP-TV (5 EYEWITNESS NEWS)',
        description: 'ABC affiliate for Minneapolis and St. Paul.',
        websiteUrl: 'https://kstp.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/kstptv',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/kstptv',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kstptv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'FOX 9',
        description: 'Fox affiliate in Minneapolis-St. Paul, providing news and entertainment.',
        websiteUrl: 'https://www.fox9.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/fox9kmsp',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/fox9',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/fox9/',
        type: 'Broadcasting',
        country: 'USA'
    }
];
