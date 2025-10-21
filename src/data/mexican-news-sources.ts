
export interface MexicanNewsSource {
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

export const mexicanNewsSources: MexicanNewsSource[] = [
    {
        name: 'El Universal',
        description: 'One of the most widely read daily newspapers in Mexico, covering national and international news.',
        websiteUrl: 'https://www.eluniversal.com.mx/',
        facebookFollowers: '7M',
        facebookUrl: 'https://www.facebook.com/ElUniversalOnline',
        xFollowers: '8.5M',
        xUrl: 'https://twitter.com/El_Universal_Mx',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/eluniversalmx/',
        type: 'Newspaper',
        country: 'Mexico'
    },
    {
        name: 'Reforma',
        description: 'A leading newspaper in Mexico City with a strong focus on business and politics.',
        websiteUrl: 'https://www.reforma.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/reformacom',
        xFollowers: '5.5M',
        xUrl: 'https://twitter.com/reformacom',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/reformacom/',
        type: 'Newspaper',
        country: 'Mexico'
    },
    {
        name: 'La Jornada',
        description: 'A newspaper known for its left-leaning perspective and in-depth coverage of social issues.',
        websiteUrl: 'https://www.jornada.com.mx/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/lajornadaonline',
        xFollowers: '3.8M',
        xUrl: 'https://twitter.com/lajornadaonline',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/lajornadaonline/',
        type: 'Newspaper',
        country: 'Mexico'
    },
    {
        name: 'Milenio',
        description: 'A media group with a national newspaper and a 24-hour news channel.',
        websiteUrl: 'https://www.milenio.com/',
        facebookFollowers: '6.5M',
        facebookUrl: 'https://www.facebook.com/MilenioDiario',
        xFollowers: '7.8M',
        xUrl: 'https://twitter.com/milenio',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/milenio/',
        type: 'Media Group',
        country: 'Mexico'
    },
    {
        name: 'Excélsior',
        description: 'One of the oldest newspapers in Mexico, with a focus on politics, business, and national news.',
        websiteUrl: 'https://www.excelsior.com.mx/',
        facebookFollowers: '5M',
        facebookUrl: 'https://www.facebook.com/ExcelsiorMex',
        xFollowers: '6.5M',
        xUrl: 'https://twitter.com/excelsior',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/excelsior/',
        type: 'Newspaper',
        country: 'Mexico'
    },
    {
        name: 'Aristegui Noticias',
        description: 'An independent news portal led by journalist Carmen Aristegui.',
        websiteUrl: 'https://aristeguinoticias.com/',
        facebookFollowers: '4M',
        facebookUrl: 'https://www.facebook.com/aristeguinoticias',
        xFollowers: '9.5M',
        xUrl: 'https://twitter.com/aristeguionline',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/aristeguionline/',
        type: 'Online Media',
        country: 'Mexico'
    },
    {
        name: 'SinEmbargo',
        description: 'A digital native newspaper with a focus on investigative journalism and political analysis.',
        websiteUrl: 'https://www.sinembargo.mx/',
        facebookFollowers: '3.5M',
        facebookUrl: 'https://www.facebook.com/SinEmbargoMX',
        xFollowers: '2.8M',
        xUrl: 'https://twitter.com/SinEmbargoMX',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/sinembargomx/',
        type: 'Online Media',
        country: 'Mexico'
    }
];
