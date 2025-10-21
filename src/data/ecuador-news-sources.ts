
export interface EcuadorNewsSource {
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

export const ecuadorNewsSources: EcuadorNewsSource[] = [
    {
        name: 'El Universo',
        description: 'One of the largest daily newspapers in Ecuador, providing comprehensive news coverage.',
        websiteUrl: 'https://www.eluniverso.com/',
        facebookFollowers: '3.5M',
        facebookUrl: 'https://www.facebook.com/eluniverso',
        xFollowers: '2.8M',
        xUrl: 'https://twitter.com/eluniversocom',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/eluniversocom/',
        type: 'Newspaper',
        country: 'Ecuador'
    },
    {
        name: 'El Comercio',
        description: 'A leading newspaper in Ecuador with a focus on politics, economy, and current affairs.',
        websiteUrl: 'https://www.elcomercio.com/',
        facebookFollowers: '3.2M',
        facebookUrl: 'https://www.facebook.com/elcomerciocom',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/elcomerciocom',
        instagramFollowers: '900K',
        instagramUrl: 'https://www.instagram.com/elcomerciocom/',
        type: 'Newspaper',
        country: 'Ecuador'
    },
    {
        name: 'Expreso',
        description: 'A daily newspaper known for its business and economic news.',
        websiteUrl: 'https://www.expreso.ec/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/expresoec',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/expresoec',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/expresoec/',
        type: 'Newspaper',
        country: 'Ecuador'
    },
    {
        name: 'El Telégrafo',
        description: 'The first public newspaper in Ecuador, providing official news and analysis.',
        websiteUrl: 'https://www.eltelegrafo.com.ec/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/eltelegrafoec',
        xFollowers: '1.8M',
        xUrl: 'https://twitter.com/el_telegrafo',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/el_telegrafo/',
        type: 'Newspaper',
        country: 'Ecuador'
    },
    {
        name: 'Metro Ecuador',
        description: 'The Ecuadorian edition of the international free newspaper.',
        websiteUrl: 'https://www.metroecuador.com.ec/',
        facebookFollowers: '2M',
        facebookUrl: 'https://www.facebook.com/MetroEcuador',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/MetroEcuador',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/metroecuador/',
        type: 'Newspaper',
        country: 'Ecuador'
    },
    {
        name: 'La Hora',
        description: 'A national newspaper with several regional editions.',
        websiteUrl: 'https://www.lahora.com.ec/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/lahoraecuador',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/lahoraecuador',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/lahoraecuador/',
        type: 'Newspaper',
        country: 'Ecuador'
    },
    {
        name: 'Primicias',
        description: 'A digital native news outlet with a focus on politics and economy.',
        websiteUrl: 'https://www.primicias.ec/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/PrimiciasEcuador',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/Primicias',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/primiciasecuador/',
        type: 'Online Media',
        country: 'Ecuador'
    },
    {
        name: 'Ecuavisa',
        description: 'A major television network with a strong news division.',
        websiteUrl: 'https://www.ecuavisa.com/',
        facebookFollowers: '4.5M',
        facebookUrl: 'https://www.facebook.com/ecuavisa',
        xFollowers: '3.5M',
        xUrl: 'https://twitter.com/ecuavisa',
        instagramFollowers: '1.8M',
        instagramUrl: 'https://www.instagram.com/ecuavisatv/',
        type: 'Broadcasting',
        country: 'Ecuador'
    },
    {
        name: 'Teleamazonas',
        description: 'A leading television broadcaster with news and entertainment programming.',
        websiteUrl: 'https://www.teleamazonas.com/',
        facebookFollowers: '3M',
        facebookUrl: 'https://www.facebook.com/teleamazonas',
        xFollowers: '2.2M',
        xUrl: 'https://twitter.com/teleamazonasec',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/teleamazonasec/',
        type: 'Broadcasting',
        country: 'Ecuador'
    },
    {
        name: 'Vistazo',
        description: 'A prestigious weekly news magazine in Ecuador.',
        websiteUrl: 'https://www.vistazo.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/revistavistazo',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/revistavistazo',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/revistavistazo/',
        type: 'Magazine',
        country: 'Ecuador'
    }
];
