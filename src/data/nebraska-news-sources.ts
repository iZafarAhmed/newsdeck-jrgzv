
export interface NebraskaNewsSource {
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

export const nebraskaNewsSources: NebraskaNewsSource[] = [
    {
        name: 'Omaha World-Herald',
        description: 'The largest newspaper in Nebraska, serving Omaha and the surrounding region.',
        websiteUrl: 'https://omaha.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/owhnews',
        xFollowers: '180K',
        xUrl: 'https://twitter.com/owhnews',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/omahaworldherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KETV (ABC 7)',
        description: 'ABC affiliate in Omaha, providing local news, weather, and sports.',
        websiteUrl: 'https://www.ketv.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/ketv7',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/ketv',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/ketv7/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Lincoln Journal Star',
        description: 'The daily newspaper for Lincoln, the state capital.',
        websiteUrl: 'https://journalstar.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/journalstar',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/JournalStarNews',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/journalstar/',
        type: 'Newspaper',
        country: 'USA'
    }
];
