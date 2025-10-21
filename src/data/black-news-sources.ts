
export interface BlackNewsSource {
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

export const blackNewsSources: BlackNewsSource[] = [
    {
        name: 'The Root',
        description: 'Provides thought-provoking commentary and news from a variety of black perspectives.',
        websiteUrl: 'https://www.theroot.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/TheRoot',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/TheRoot',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/the.root/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Black Enterprise',
        description: 'The premier business, investing, and wealth-building resource for African Americans.',
        websiteUrl: 'https://www.blackenterprise.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/blackenterprise',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/blackenterprise',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/blackenterprise/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'Essence',
        description: 'The premier lifestyle, fashion, and beauty magazine for African-American women.',
        websiteUrl: 'https://www.essence.com/',
        facebookFollowers: '3M',
        facebookUrl: 'https://www.facebook.com/essence',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/essence',
        instagramFollowers: '3.5M',
        instagramUrl: 'https://www.instagram.com/essence/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'The Grio',
        description: 'A video-centric news community site for African Americans.',
        websiteUrl: 'https://thegrio.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/theGrio',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/thegrio',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/thegrio/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Blavity',
        description: 'A media tech company and lifestyle brand for Black millennials.',
        websiteUrl: 'https://blavity.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/blavity',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/blavity',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/blavity/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'AfroPunk',
        description: 'An online community celebrating alternative Black culture through music, art, and film.',
        websiteUrl: 'https://afropunk.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/afropunk',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/afropunk',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/afropunk/',
        type: 'Community/Festival',
        country: 'USA'
    },
    {
        name: 'The Amsterdam News',
        description: 'One of the most influential Black-owned and-operated newspapers in the United States.',
        websiteUrl: 'https://amsterdamnews.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/amsterdamnews',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/amsterdamnews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/amsterdamnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Final Call',
        description: 'The official newspaper of the Nation of Islam.',
        websiteUrl: 'https://www.finalcall.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/thefinalcall',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/thefinalcall',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/thefinalcall/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Atlanta Black Star',
        description: 'A narrative-style news site providing a forum for Black voices.',
        websiteUrl: 'https://atlantablackstar.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/AtlantaBlackStar',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/atlblackstar',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/atlblackstar/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'TheGrio',
        description: 'A video-centric news community site for African Americans.',
        websiteUrl: 'https://thegrio.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/theGrio',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/thegrio',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/thegrio/',
        type: 'Online Media',
        country: 'USA'
    }
];
