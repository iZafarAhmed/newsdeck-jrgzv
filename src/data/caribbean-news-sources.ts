
export interface CaribbeanNewsSource {
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

export const caribbeanNewsSources: CaribbeanNewsSource[] = [
    {
        name: 'The Gleaner',
        description: 'Jamaica’s oldest and most respected newspaper, providing comprehensive news coverage.',
        websiteUrl: 'http://jamaica-gleaner.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/TheGleanerCompany',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/jamaicagleaner',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/jamaicagleaner/',
        type: 'Newspaper',
        country: 'Jamaica'
    },
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
        name: 'Nation News',
        description: 'The leading newspaper in Barbados.',
        websiteUrl: 'https://www.nationnews.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/NationBarbados',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/nationbarbados',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/nationbarbados/',
        type: 'Newspaper',
        country: 'Barbados'
    },
    {
        name: 'Loop News',
        description: 'A digital news platform with editions across the Caribbean, including Jamaica, Trinidad, and Barbados.',
        websiteUrl: 'https://caribbean.loopnews.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/LoopNews',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/loopnews',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/loopnewscaribbean/',
        type: 'Digital Media',
        country: 'Caribbean'
    },
    {
        name: 'Caribbean Journal',
        description: 'A leading source for Caribbean travel and trade news.',
        websiteUrl: 'https://www.caribjournal.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/caribjournal',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/caribjournal',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/caribjournal/',
        type: 'Online Media',
        country: 'Caribbean'
    }
];
