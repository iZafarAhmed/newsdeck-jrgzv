
export interface TrinidadAndTobagoNewsSource {
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

export const trinidadAndTobagoNewsSources: TrinidadAndTobagoNewsSource[] = [
    {
        name: 'Trinidad and Tobago Guardian',
        description: 'A leading daily newspaper in Trinidad and Tobago, providing comprehensive coverage of news, business, sports, and lifestyle.',
        websiteUrl: 'https://www.guardian.co.tt/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/ttguardian',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/ttguardian',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/ttguardian/',
        type: 'Newspaper',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Trinidad Express Newspapers',
        description: 'One of the most widely read daily newspapers in the country, covering a range of topics from politics to entertainment.',
        websiteUrl: 'https://trinidadexpress.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/expresspaper',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/expressupdates',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/trinidadexpress/',
        type: 'Newspaper',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Trinidad and Tobago Newsday',
        description: 'A major daily newspaper known for its coverage of breaking news, politics, and crime.',
        websiteUrl: 'https://newsday.co.tt/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/ttnewsday',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/ttnewsday',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/ttnewsday/',
        type: 'Newspaper',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'CNC3 Television',
        description: 'A television station and digital news platform, part of the Guardian Media Limited group.',
        websiteUrl: 'https://www.cnc3.co.tt/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/CNC3Television',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/cnc3news',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/cnc3news/',
        type: 'Broadcasting',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'TV6',
        description: 'A leading television station in Trinidad and Tobago, part of the Caribbean Communications Network.',
        websiteUrl: 'https://www.tv6tnt.com/',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/tv6tnt',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/tv6tnt',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/tv6tnt/',
        type: 'Broadcasting',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Loop TT',
        description: 'A digital news platform with a focus on local news, sports, and entertainment.',
        websiteUrl: 'https://tt.loopnews.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/LoopTT',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/looptt',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/looptt/',
        type: 'Digital Media',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'i95.5 FM',
        description: 'A popular radio station known for its news, talk shows, and current affairs programming.',
        websiteUrl: 'https://www.i955fm.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/i955fm',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/i955fm',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/i955fm/',
        type: 'Radio',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Power 102 FM',
        description: 'A radio station with a focus on news, talk, and community issues.',
        websiteUrl: 'https://power102fm.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/power102fm',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/power102fm',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/power102fm/',
        type: 'Radio',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'The Bomb',
        description: 'A weekly newspaper with a focus on sensational news and entertainment.',
        websiteUrl: 'https://www.thebombnewspaper.com/',
        facebookFollowers: null,
        facebookUrl: null,
        xFollowers: null,
        xUrl: null,
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Soca News',
        description: 'A publication dedicated to soca music and Caribbean culture.',
        websiteUrl: 'https://socanews.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/socanews',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/socanews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/socanews/',
        type: 'Music News',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Tobago News',
        description: 'A news outlet with a specific focus on the island of Tobago.',
        websiteUrl: 'http://www.tobagonews.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/tobagonews',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/tobagonews',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Trinidad and Tobago Government News',
        description: 'The official news service of the Government of Trinidad and Tobago.',
        websiteUrl: 'https://www.news.gov.tt/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/news.gov.tt',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/news_gov_tt',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/news.gov.tt/',
        type: 'Government',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'T&T Mirror',
        description: 'A weekly newspaper covering a variety of news and stories.',
        websiteUrl: 'https://www.tntmirror.com/',
        facebookFollowers: null,
        facebookUrl: null,
        xFollowers: null,
        xUrl: null,
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'TTT Live Online',
        description: 'The state-owned national television broadcaster.',
        websiteUrl: 'https://www.tttlive.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/TTTLiveOnline',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/TTTLiveOnline',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/tttliveonline/',
        type: 'Broadcasting',
        country: 'Trinidad and Tobago'
    },
    {
        name: 'Wired868',
        description: 'An online publication focusing on football and social commentary.',
        websiteUrl: 'https://wired868.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/Wired868',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/wired868',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/wired868/',
        type: 'Online Media',
        country: 'Trinidad and Tobago'
    }
];
