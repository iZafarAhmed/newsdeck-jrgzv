
export interface UtahNewsSource {
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

export const utahNewsSources: UtahNewsSource[] = [
    {
        name: 'The Salt Lake Tribune',
        description: 'A nonprofit, community-owned newspaper providing investigative journalism and in-depth coverage of Utah.',
        websiteUrl: 'https://www.sltrib.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/sltrib',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/sltrib',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/sltrib/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Deseret News',
        description: 'The oldest continuously published newspaper in Utah, with a focus on faith, family, and culture.',
        websiteUrl: 'https://www.deseret.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/deseretnews',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/deseretnews',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/deseretnews/',
        type: 'Newspaper',
        country: 'USA'
    }
];
