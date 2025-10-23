
export interface OregonNewsSource {
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

export const oregonNewsSources: OregonNewsSource[] = [
    {
        name: 'The Oregonian',
        description: 'The largest newspaper in Oregon, covering Portland and the state.',
        websiteUrl: 'https://www.oregonlive.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/oregonlive',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/oregonlive',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/oregonlive/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KGW (NBC 8)',
        description: 'NBC affiliate in Portland, providing local news, weather, and sports.',
        websiteUrl: 'https://www.kgw.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/KGWTV8',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/KGWNews',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kgwnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KOIN 6',
        description: 'CBS affiliate serving Portland and the surrounding region.',
        websiteUrl: 'https://www.koin.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/koin6',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/koinnews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/koin6/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KATU (ABC 2)',
        description: 'ABC affiliate for Portland, Oregon.',
        websiteUrl: 'https://katu.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/KATUNews',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/katunews',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/katunews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Oregon Public Broadcasting (OPB)',
        description: 'The primary public media source in Oregon.',
        websiteUrl: 'https://www.opb.org/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/opb',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/opb',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/opb/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Willamette Week',
        description: 'An alternative weekly newspaper and website in Portland.',
        websiteUrl: 'https://www.wweek.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/wweek',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/wweek',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wweek/',
        type: 'Newspaper',
        country: 'USA'
    }
];
