
export interface SouthCarolinaNewsSource {
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

export const southCarolinaNewsSources: SouthCarolinaNewsSource[] = [
    {
        name: 'The Post and Courier',
        description: 'The largest newspaper in South Carolina, based in Charleston.',
        websiteUrl: 'https://www.postandcourier.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/postandcourier',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/postandcourier',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/postandcourier/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The State',
        description: 'A daily newspaper in Columbia, the state capital.',
        websiteUrl: 'https://www.thestate.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/thestate',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/thestate',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/thestate/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Greenville News',
        description: 'A daily newspaper serving Greenville and the Upstate region.',
        websiteUrl: 'https://www.greenvilleonline.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/greenvilleonline',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/greenvillenews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/greenvillenews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WYFF News 4',
        description: 'NBC affiliate serving Greenville and the Upstate.',
        websiteUrl: 'https://www.wyff4.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wyff4',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wyffnews4',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wyffnews4/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WSPA 7News',
        description: 'CBS affiliate serving the Spartanburg and Greenville area.',
        websiteUrl: 'https://www.wspa.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/wspa7',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wspa7',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/wspa7/',
        type: 'Broadcasting',
        country: 'USA'
    }
];
