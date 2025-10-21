
export interface ArizonaNewsSource {
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

export const arizonaNewsSources: ArizonaNewsSource[] = [
    {
        name: 'The Arizona Republic',
        description: 'Arizona’s largest newspaper, covering Phoenix, and state-wide news.',
        websiteUrl: 'https://www.azcentral.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/azcentral',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/azcentral',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/azcentral/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'ABC15 Arizona',
        description: 'ABC affiliate in Phoenix, providing local news, weather, and sports.',
        websiteUrl: 'https://www.abc15.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/abc15',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/abc15',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/abc15arizona/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'FOX 10 Phoenix',
        description: 'Fox affiliate serving the Phoenix metropolitan area.',
        websiteUrl: 'https://www.fox10phoenix.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/fox10phoenix',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/fox10phoenix',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/fox10phoenix/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: '12News (KPNX)',
        description: 'NBC affiliate in Phoenix, covering local news and community events.',
        websiteUrl: 'https://www.12news.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/12news',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/12news',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/12newsaz/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'AZ Family (3TV & CBS 5)',
        description: 'Combined news operation for channels 3 and 5 in Phoenix.',
        websiteUrl: 'https://www.azfamily.com/',
        facebookFollowers: '2M',
        facebookUrl: 'https://www.facebook.com/azfamily',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/azfamily',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/azfamily/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Arizona Daily Star',
        description: 'The major daily newspaper for Tucson and Southern Arizona.',
        websiteUrl: 'https://tucson.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/arizonadailystar',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/arizonastarnet',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/arizonadailystar/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KOLD News 13',
        description: 'CBS affiliate serving Tucson and Southern Arizona.',
        websiteUrl: 'https://www.kold.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/koldnews13',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/koldnews13',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/koldnews13/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KVOA News 4 Tucson',
        description: 'NBC affiliate providing news and weather for the Tucson area.',
        websiteUrl: 'https://www.kvoa.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/kvoa4',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/kvoa',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/kvoa_news4tucson/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KGUN 9',
        description: 'ABC affiliate for Tucson and Southern Arizona.',
        websiteUrl: 'https://www.kgun9.com/',
        facebookFollowers: '350K',
        facebookUrl: 'https://www.facebook.com/kgun9',
        xFollowers: '90K',
        xUrl: 'https://twitter.com/kgun9',
        instagramFollowers: '25K',
        instagramUrl: 'https://www.instagram.com/kgun9/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Arizona Daily Sun',
        description: 'The daily newspaper for Flagstaff and Northern Arizona.',
        websiteUrl: 'https://azdailysun.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/arizonadailysun',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/azds',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/azdailysun/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Yuma Sun',
        description: 'The daily newspaper serving Yuma County.',
        websiteUrl: 'https://www.yumasun.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/yumasun',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/yumasun',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/yumasun/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Arizona Public Media (AZPM)',
        description: 'The public broadcasting service for Southern Arizona, including NPR and PBS.',
        websiteUrl: 'https://www.azpm.org/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/azpublicmedia',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/azpm',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/azpm/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Phoenix New Times',
        description: 'An alternative weekly newspaper covering news, culture, and events in Phoenix.',
        websiteUrl: 'https://www.phoenixnewtimes.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/phoenixnewtimes',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/phoenixnewtimes',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/phoenixnewtimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Tucson Weekly',
        description: 'Tucson\'s alternative weekly, covering local news, arts, and culture.',
        websiteUrl: 'https://www.tucsonweekly.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/tucsonweekly',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/tucsonweekly',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/tucsonweekly/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KJZZ',
        description: 'The NPR member station for Phoenix and surrounding areas.',
        websiteUrl: 'https://kjzz.org/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/kjzzphoenix',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/kjzzphoenix',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/kjzzphoenix/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'Cronkite News',
        description: 'News produced by the Walter Cronkite School of Journalism at ASU.',
        websiteUrl: 'https://cronkitenews.azpbs.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/cronkitenews',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/cronkitenews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/cronkitenews/',
        type: 'University',
        country: 'USA'
    },
    {
        name: 'Arizona Capitol Times',
        description: 'A newspaper focusing on Arizona state politics and government.',
        websiteUrl: 'https://azcapitoltimes.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/azcapitoltimes',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/azcapitoltimes',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Prescott Daily Courier',
        description: 'The daily newspaper for Prescott, Arizona.',
        websiteUrl: 'https://www.dcourier.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/TheDailyCourier',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/prescottcourier',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KTAR News 92.3 FM',
        description: 'A news and talk radio station in Phoenix.',
        websiteUrl: 'https://ktar.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/ktarnews',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/ktarnews',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/ktarnews/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'Arizona\'s Sports Station 98.7 FM',
        description: 'Sports talk radio for the Phoenix area.',
        websiteUrl: 'https://arizonasports.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/arizonasports',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/arizonasports',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/arizonasports/',
        type: 'Radio',
        country: 'USA'
    }
];
for (let i = 21; i <= 50; i++) {
    arizonaNewsSources.push({
        name: `Arizona News Source ${i}`,
        description: `Description for Arizona News Source ${i}.`,
        websiteUrl: '#',
        facebookFollowers: null,
        facebookUrl: null,
        xFollowers: null,
        xUrl: null,
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'USA'
    });
}

    