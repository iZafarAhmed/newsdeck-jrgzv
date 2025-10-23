
export interface VermontNewsSource {
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

export const vermontNewsSources: VermontNewsSource[] = [
    {
        name: 'VTDigger',
        description: 'A statewide, nonprofit news organization that publishes in-depth journalism about Vermont.',
        websiteUrl: 'https://vtdigger.org/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/vtdigger',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/vtdigger',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/vtdigger/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Seven Days',
        description: 'Vermont\'s free, independent weekly newspaper.',
        websiteUrl: 'https://www.sevendaysvt.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/sevendays',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/sevendays',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/sevendaysvt/',
        type: 'Newspaper',
        country: 'USA'
    }
];
