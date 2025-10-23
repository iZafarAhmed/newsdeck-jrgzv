
export interface WyomingNewsSource {
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

export const wyomingNewsSources: WyomingNewsSource[] = [
    {
        name: 'Casper Star-Tribune',
        description: 'The largest newspaper in Wyoming, covering statewide news.',
        websiteUrl: 'https://trib.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/CSTribune',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/CSTribune',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/casperstartribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Wyoming Tribune Eagle',
        description: 'The daily newspaper for Cheyenne, the state capital.',
        websiteUrl: 'https://www.wyomingnews.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/WTEnews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/WTEnews',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/wyo_trib_eagle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WyoFile',
        description: 'An independent, nonprofit news organization focused on Wyoming’s people, places and policy.',
        websiteUrl: 'https://www.wyofile.com/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/wyofile',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/wyofile',
        instagramFollowers: '4K',
        instagramUrl: 'https://www.instagram.com/wyofile/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Wyoming Public Media',
        description: 'The statewide public radio network and NPR member station for Wyoming.',
        websiteUrl: 'https://www.wyomingpublicmedia.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/wyomingpublicmedia',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/wyopublicmedia',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/wyomingpublicmedia/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'Oil City News',
        description: 'An online news source for Casper and Natrona County.',
        websiteUrl: 'https://oilcity.news/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/OilCityNews',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/OilCityNews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/oilcitynews/',
        type: 'Online Media',
        country: 'USA'
    }
];
