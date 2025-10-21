
export interface CubaNewsSource {
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

export const cubaNewsSources: CubaNewsSource[] = [
    {
        name: 'Granma',
        description: 'The official newspaper of the Central Committee of the Cuban Communist Party.',
        websiteUrl: 'https://www.granma.cu/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/granmadigital',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/granma_digital',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/granmadigital/',
        type: 'Newspaper',
        country: 'Cuba'
    },
    {
        name: 'Juventud Rebelde',
        description: 'A Cuban newspaper for the youth, published by the Young Communist League.',
        websiteUrl: 'https://www.juventudrebelde.cu/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/juventudrebelde.cu',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/juventudrebelde',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/juventudrebelde/',
        type: 'Newspaper',
        country: 'Cuba'
    },
    {
        name: 'Cubadebate',
        description: 'An online news outlet that provides a Cuban perspective on national and international events.',
        websiteUrl: 'http://www.cubadebate.cu/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/cubadebate',
        xFollowers: '700K',
        xUrl: 'https://twitter.com/cubadebate',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/cubadebate/',
        type: 'Online Media',
        country: 'Cuba'
    },
    {
        name: 'Agencia Cubana de Noticias (ACN)',
        description: 'The official news agency of Cuba.',
        websiteUrl: 'https://www.acn.cu/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/AgenciaCubanadeNoticias',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/acn_cuba',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/acn_cuba/',
        type: 'News Agency',
        country: 'Cuba'
    },
    {
        name: 'Prensa Latina',
        description: 'An international news agency based in Cuba.',
        websiteUrl: 'https://www.prensa-latina.cu/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/PrensaLatinaEnglishNEWS',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/PrensaLatina_EN',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/prensalatina/',
        type: 'News Agency',
        country: 'Cuba'
    },
    {
        name: '14ymedio',
        description: 'An independent digital newspaper founded by Yoani Sánchez.',
        websiteUrl: 'https://www.14ymedio.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/14ymedio',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/14ymedio',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/14ymedio/',
        type: 'Online Media',
        country: 'Cuba'
    },
    {
        name: 'Diario de Cuba',
        description: 'An independent news website covering Cuba from Spain.',
        websiteUrl: 'https://diariodecuba.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/diariodecuba',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/diariodecuba',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/diariodecuba/',
        type: 'Online Media',
        country: 'Spain'
    },
    {
        name: 'CiberCuba',
        description: 'A popular news and entertainment portal for Cubans worldwide.',
        websiteUrl: 'https://www.cibercuba.com/',
        facebookFollowers: '2M',
        facebookUrl: 'https://www.facebook.com/cibercuba',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/cibercuba',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/cibercuba/',
        type: 'Online Media',
        country: 'USA'
    }
];
