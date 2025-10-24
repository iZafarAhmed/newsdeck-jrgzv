
export interface ItalianNewsSource {
    name: string;
    description: string;
    websiteUrl: string | null;
    facebookFollowers: string | null;
    facebookUrl: string | null;
    xFollowers: string | null;
    xUrl: string | null;
    instagramFollowers: string | null;
    instagramUrl: string | null;
    type: string;
    country: string;
}

export const italianNewsSources: ItalianNewsSource[] = [
    {
        name: 'Corriere della Sera',
        description: 'One of the oldest and most respected daily newspapers in Italy.',
        websiteUrl: 'https://www.corriere.it/',
        facebookFollowers: '3.6M',
        facebookUrl: 'https://www.facebook.com/corrieredellasera',
        xFollowers: '3.1M',
        xUrl: 'https://twitter.com/corriere',
        instagramFollowers: '1.3M',
        instagramUrl: 'https://www.instagram.com/corriere/',
        type: 'Newspaper',
        country: 'Italy'
    },
    {
        name: 'La Repubblica',
        description: 'A leading daily newspaper with extensive coverage of politics, culture, and current affairs.',
        websiteUrl: 'https://www.repubblica.it/',
        facebookFollowers: '4.2M',
        facebookUrl: 'https://www.facebook.com/repubblica',
        xFollowers: '3.5M',
        xUrl: 'https://twitter.com/repubblica',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/larepubblica/',
        type: 'Newspaper',
        country: 'Italy'
    },
    {
        name: 'La Stampa',
        description: 'A major daily newspaper based in Turin, with national and international news.',
        websiteUrl: 'https://www.lastampa.it/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/lastampa',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/LaStampa',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/la_stampa/',
        type: 'Newspaper',
        country: 'Italy'
    },
    {
        name: 'Il Sole 24 Ore',
        description: 'The leading financial and business newspaper in Italy.',
        websiteUrl: 'https://www.ilsole24ore.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/ilsole24ore',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/ilsole24ore',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/ilsole_24ore/',
        type: 'Newspaper',
        country: 'Italy'
    },
    {
        name: 'ANSA',
        description: 'The leading news agency in Italy.',
        websiteUrl: 'https://www.ansa.it/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/agenziaansa',
        xFollowers: '2M',
        xUrl: 'https://twitter.com/agenzia_ansa',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/agenzia_ansa/',
        type: 'News Agency',
        country: 'Italy'
    },
    {
        name: 'Il Fatto Quotidiano',
        description: 'An independent daily newspaper known for its investigative journalism.',
        websiteUrl: 'https://www.ilfattoquotidiano.it/',
        facebookFollowers: '1.8M',
        facebookUrl: 'https://www.facebook.com/ilfattoquotidiano',
        xFollowers: '2M',
        xUrl: 'https://twitter.com/fattoquotidiano',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/ilfattoquotidianoit/',
        type: 'Newspaper',
        country: 'Italy'
    },
    {
        name: 'Il Messaggero',
        description: 'A daily newspaper based in Rome.',
        websiteUrl: 'https://www.ilmessaggero.it/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/ilmessaggero.it',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/ilmessaggeroit',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/ilmessaggero.it/',
        type: 'Newspaper',
        country: 'Italy'
    },
    {
        name: 'La Gazzetta dello Sport',
        description: 'The most widely read daily sports newspaper in Italy.',
        websiteUrl: 'https://www.gazzetta.it/',
        facebookFollowers: '3.5M',
        facebookUrl: 'https://www.facebook.com/gazzettadellosport',
        xFollowers: '3M',
        xUrl: 'https://twitter.com/gazzetta_it',
        instagramFollowers: '2.5M',
        instagramUrl: 'https://www.instagram.com/gazzettadellosport/',
        type: 'Sports News',
        country: 'Italy'
    },
    {
        name: 'Fanpage.it',
        description: 'A popular online newspaper with a wide range of content.',
        websiteUrl: 'https://www.fanpage.it/',
        facebookFollowers: '4M',
        facebookUrl: 'https://www.facebook.com/fanpage.it',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/fanpage',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/fanpage.it/',
        type: 'Online Media',
        country: 'Italy'
    },
    {
        name: 'Il Post',
        description: 'An online daily newspaper known for its quality journalism and analysis.',
        websiteUrl: 'https://www.ilpost.it/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/ilpost',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/ilpost',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/ilpost/',
        type: 'Online Media',
        country: 'Italy'
    }
];
