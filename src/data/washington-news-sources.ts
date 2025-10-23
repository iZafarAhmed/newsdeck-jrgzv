
export interface WashingtonNewsSource {
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

export const washingtonNewsSources: WashingtonNewsSource[] = [
    {
        name: 'The Seattle Times',
        description: 'The largest daily newspaper in the state of Washington.',
        websiteUrl: 'https://www.seattletimes.com/',
        facebookFollowers: '447K',
        facebookUrl: 'https://www.facebook.com/seattletimes',
        xFollowers: '730.9K',
        xUrl: 'https://twitter.com/seattletimes',
        instagramFollowers: '183.6K',
        instagramUrl: 'https://www.instagram.com/seattletimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Spokesman-Review',
        description: 'A daily newspaper serving Spokane and the Inland Northwest.',
        websiteUrl: 'https://www.spokesman.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/spokesmanreview',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/spokesmanreview',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/spokesmanreview/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The News Tribune',
        description: 'A daily newspaper serving Tacoma and Pierce County.',
        websiteUrl: 'https://www.thenewstribune.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/thenewstribune',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/thenewstribune',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/thenewstribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Olympian',
        description: 'The daily newspaper for Olympia, the state capital.',
        websiteUrl: 'https://www.theolympian.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/theolympian',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/theolympian',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/theolympian/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Bellingham Herald',
        description: 'A daily newspaper serving Bellingham and Whatcom County.',
        websiteUrl: 'https://www.bellinghamherald.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/bellinghamherald',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/bhamherald',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/bellingham_herald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Tri-City Herald',
        description: 'A daily newspaper for the Tri-Cities area (Kennewick, Pasco, Richland).',
        websiteUrl: 'https://www.tri-cityherald.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/tricityherald',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/triherald',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/tricityherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Columbian',
        description: 'A daily newspaper serving Vancouver and Clark County.',
        websiteUrl: 'https://www.columbian.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/thecolumbian',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/thecolumbian',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/thecolumbian/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Yakima Herald-Republic',
        description: 'A daily newspaper for Yakima and the Yakima Valley.',
        websiteUrl: 'https://www.yakimaherald.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/yakimaherald',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/yakimaherald',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/yakima_herald_republic/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Everett Herald',
        description: 'A daily newspaper serving Everett and Snohomish County.',
        websiteUrl: 'https://www.heraldnet.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/heraldnet',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/everettherald',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/everettherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KING 5',
        description: 'NBC affiliate in Seattle, providing local news, weather, and sports.',
        websiteUrl: 'https://www.king5.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/king5news',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/king5seattle',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/king5seattle/',
        type: 'Broadcasting',
        country: 'USA'
    }
];
