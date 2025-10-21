
export interface ChileNewsSource {
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

export const chileNewsSources: ChileNewsSource[] = [
    {
        name: 'El Mercurio',
        description: "Chile's newspaper of record, providing in-depth national and international news.",
        websiteUrl: 'https://www.emol.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/ElMercurio',
        xFollowers: '2.8M',
        xUrl: 'https://twitter.com/ElMercurio_cl',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/elmercurio_cl/',
        type: 'Newspaper',
        country: 'Chile'
    },
    {
        name: 'La Tercera',
        description: 'A leading newspaper with extensive coverage of politics, business, and culture.',
        websiteUrl: 'https://www.latercera.com/',
        facebookFollowers: '2.8M',
        facebookUrl: 'https://www.facebook.com/latercera',
        xFollowers: '4.5M',
        xUrl: 'https://twitter.com/latercera',
        instagramFollowers: '1.1M',
        instagramUrl: 'https://www.instagram.com/laterceracom/',
        type: 'Newspaper',
        country: 'Chile'
    },
    {
        name: 'CNN Chile',
        description: 'The Chilean branch of the international news network, offering 24-hour coverage.',
        websiteUrl: 'https://www.cnnchile.com/',
        facebookFollowers: '3.1M',
        facebookUrl: 'https://www.facebook.com/cnnchile',
        xFollowers: '5.5M',
        xUrl: 'https://twitter.com/cnnchile',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/cnnchile/',
        type: 'Broadcasting',
        country: 'Chile'
    },
    {
        name: 'BioBioChile',
        description: 'A popular news portal known for its breaking news and regional coverage.',
        websiteUrl: 'https://www.biobiochile.cl/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/RadioBioBio',
        xFollowers: '4.2M',
        xUrl: 'https://twitter.com/biobio',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/radiobiobio/',
        type: 'Online Media',
        country: 'Chile'
    },
    {
        name: '24 Horas',
        description: 'The news division of Televisión Nacional de Chile (TVN), the public broadcaster.',
        websiteUrl: 'https://www.24horas.cl/',
        facebookFollowers: '3.5M',
        facebookUrl: 'https://www.facebook.com/24horas.cl',
        xFollowers: '5.2M',
        xUrl: 'https://twitter.com/24horastvn',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/24horascl/',
        type: 'Broadcasting',
        country: 'Chile'
    },
    {
        name: 'Meganoticias',
        description: 'The news department of the private television network Mega.',
        websiteUrl: 'https://www.meganoticias.cl/',
        facebookFollowers: '4M',
        facebookUrl: 'https://www.facebook.com/meganoticias.cl',
        xFollowers: '2M',
        xUrl: 'https://twitter.com/meganoticiascl',
        instagramFollowers: '1.8M',
        instagramUrl: 'https://www.instagram.com/meganoticiascl/',
        type: 'Broadcasting',
        country: 'Chile'
    },
    {
        name: 'Cooperativa.cl',
        description: 'The online portal for Radio Cooperativa, a leading news and talk radio station.',
        websiteUrl: 'https://www.cooperativa.cl/',
        facebookFollowers: '1.8M',
        facebookUrl: 'https://www.facebook.com/cooperativa',
        xFollowers: '3.5M',
        xUrl: 'https://twitter.com/Cooperativa',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/cooperativa/',
        type: 'Radio/Online',
        country: 'Chile'
    },
    {
        name: 'El Mostrador',
        description: 'A digital native newspaper with a focus on politics, business, and culture.',
        websiteUrl: 'https://www.elmostrador.cl/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/elmostrador',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/elmostrador',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/el_mostrador/',
        type: 'Online Media',
        country: 'Chile'
    },
    {
        name: 'The Clinic',
        description: 'A satirical and political weekly magazine and news website.',
        websiteUrl: 'https://www.theclinic.cl/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/thecliniccl',
        xFollowers: '3M',
        xUrl: 'https://twitter.com/thecliniccl',
        instagramFollowers: '700K',
        instagramUrl: 'https://www.instagram.com/theclinic_cl/',
        type: 'Magazine/Online',
        country: 'Chile'
    },
    {
        name: 'Diario Financiero',
        description: 'The leading financial and business newspaper in Chile.',
        websiteUrl: 'https://www.df.cl/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/DiarioFinanciero',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/DFinanciero',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/diario_financiero/',
        type: 'Newspaper',
        country: 'Chile'
    },
    {
        name: 'La Cuarta',
        description: 'A popular newspaper known for its colloquial style and entertainment coverage.',
        websiteUrl: 'https://www.lacuarta.com/',
        facebookFollowers: '2.2M',
        facebookUrl: 'https://www.facebook.com/lacuarta',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/lacuarta',
        instagramFollowers: '900K',
        instagramUrl: 'https://www.instagram.com/lacuartacom/',
        type: 'Newspaper',
        country: 'Chile'
    },
    {
        name: 'ADN Radio',
        description: 'A news and sports radio station with a strong online presence.',
        websiteUrl: 'https://www.adnradio.cl/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/adnradiochile',
        xFollowers: '3M',
        xUrl: 'https://twitter.com/adnradiochile',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/adnradiochile/',
        type: 'Radio/Online',
        country: 'Chile'
    },
    {
        name: 'SoyChile.cl',
        description: 'A network of regional news sites across Chile.',
        websiteUrl: 'https://www.soychile.cl/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/soychilecl',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/soychilecl',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/soychilecl/',
        type: 'Online Media',
        country: 'Chile'
    },
    {
        name: 'T13',
        description: 'The news division of the television channel Canal 13.',
        websiteUrl: 'https://www.t13.cl/',
        facebookFollowers: '3.8M',
        facebookUrl: 'https://www.facebook.com/teletrece',
        xFollowers: '5.8M',
        xUrl: 'https://twitter.com/t13',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/teletrece/',
        type: 'Broadcasting',
        country: 'Chile'
    },
    {
        name: 'El Dínamo',
        description: 'A digital news outlet covering politics, economy, and social issues.',
        websiteUrl: 'https://www.eldinamo.cl/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/eldinamo',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/eldinamo',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/eldinamo/',
        type: 'Online Media',
        country: 'Chile'
    },
    {
        name: 'Publimetro Chile',
        description: 'The Chilean edition of the international free newspaper, with a strong online presence.',
        websiteUrl: 'https://www.publimetro.cl/',
        facebookFollowers: '1.8M',
        facebookUrl: 'https://www.facebook.com/publimetro',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/PublimetroChile',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/publimetrochile/',
        type: 'Newspaper',
        country: 'Chile'
    },
    {
        name: 'Chilevisión Noticias',
        description: 'The news service of the television network Chilevisión.',
        websiteUrl: 'https://www.chvnoticias.cl/',
        facebookFollowers: '4.2M',
        facebookUrl: 'https://www.facebook.com/chvnoticias',
        xFollowers: '2.2M',
        xUrl: 'https://twitter.com/chvnoticias',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/chvnoticias/',
        type: 'Broadcasting',
        country: 'Chile'
    },
    {
        name: 'El Desconcierto',
        description: 'An independent digital media outlet with a focus on human rights, politics, and culture.',
        websiteUrl: 'https://www.eldesconcierto.cl/',
        facebookFollowers: '900K',
        facebookUrl: 'https://www.facebook.com/eldesconcierto',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/eldesconcierto',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/eldesconciertocl/',
        type: 'Online Media',
        country: 'Chile'
    },
    {
        name: 'La Hora',
        description: 'A daily newspaper and online portal covering current affairs, sports, and entertainment.',
        websiteUrl: 'https://www.lahora.cl/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/diariolahora',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/diariolahora',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/diariolahora/',
        type: 'Newspaper',
        country: 'Chile'
    },
    {
        name: 'Chile Today',
        description: 'An English-language news source for events and culture in Chile.',
        websiteUrl: 'https://www.chiletoday.cl/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/chiletodaynews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/chiletodaynews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/chiletodaynews/',
        type: 'Online Media',
        country: 'Chile'
    },
    {
        name: 'Diario UChile',
        description: 'The news portal of the University of Chile, covering academic, scientific, and cultural topics.',
        websiteUrl: 'https://radio.uchile.cl/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/RadioUniversidadDeChile',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/uchileradio',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/radiouchile/',
        type: 'University/Radio',
        country: 'Chile'
    }
];
