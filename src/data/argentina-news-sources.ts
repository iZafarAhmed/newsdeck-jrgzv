
export interface ArgentinaNewsSource {
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

export const argentinaNewsSources: ArgentinaNewsSource[] = [
    {
        name: 'Infobae',
        description: 'Leading news and current affairs portal in Argentina.',
        websiteUrl: 'https://www.infobae.com/',
        facebookFollowers: '4.8M',
        facebookUrl: 'https://www.facebook.com/infobae',
        xFollowers: '3.6M',
        xUrl: 'https://twitter.com/infobae',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/infobae/',
        type: 'Online Media',
        country: 'Argentina'
    },
    {
        name: 'Clarín',
        description: 'The largest newspaper in Argentina, covering national and international news.',
        websiteUrl: 'https://www.clarin.com/',
        facebookFollowers: '6.5M',
        facebookUrl: 'https://www.facebook.com/clarincom',
        xFollowers: '4.2M',
        xUrl: 'https://twitter.com/clarincom',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/clarincom/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'La Nación',
        description: 'A leading daily newspaper with in-depth analysis on politics, economy, and society.',
        websiteUrl: 'https://www.lanacion.com.ar/',
        facebookFollowers: '4.5M',
        facebookUrl: 'https://www.facebook.com/lanacion',
        xFollowers: '4.1M',
        xUrl: 'https://twitter.com/lanacion',
        instagramFollowers: '2.3M',
        instagramUrl: 'https://www.instagram.com/lanacioncom/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'Página/12',
        description: 'A progressive newspaper known for its investigative journalism and cultural coverage.',
        websiteUrl: 'https://www.pagina12.com.ar/',
        facebookFollowers: '1.9M',
        facebookUrl: 'https://www.facebook.com/Pagina12ok',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/pagina12',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/pagina12/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'Todo Noticias (TN)',
        description: 'A 24-hour news channel and online portal from Grupo Clarín.',
        websiteUrl: 'https://tn.com.ar/',
        facebookFollowers: '7.8M',
        facebookUrl: 'https://www.facebook.com/todonoticias',
        xFollowers: '8.5M',
        xUrl: 'https://twitter.com/todonoticias',
        instagramFollowers: '5.1M',
        instagramUrl: 'https://www.instagram.com/todonoticias/',
        type: 'Broadcasting',
        country: 'Argentina'
    },
    {
        name: 'La Voz',
        description: 'The main newspaper from Córdoba, covering local and national news.',
        websiteUrl: 'https://www.lavoz.com.ar/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/lavozcomar',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/lavozcomar',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/lavozcomar/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'Perfil',
        description: 'A weekly news magazine and daily online publication with a focus on politics and society.',
        websiteUrl: 'https://www.perfil.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/perfilcom',
        xFollowers: '2.2M',
        xUrl: 'https://twitter.com/perfilcom',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/perfilcom/',
        type: 'Newspaper/Magazine',
        country: 'Argentina'
    },
    {
        name: 'Ámbito Financiero',
        description: 'A leading newspaper specializing in finance, economics, and business news.',
        websiteUrl: 'https://www.ambito.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/ambitocom',
        xFollowers: '1.1M',
        xUrl: 'https://twitter.com/ambitocom',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/ambitocom/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'El Cronista',
        description: 'A business and financial newspaper with a strong focus on markets and economy.',
        websiteUrl: 'https://www.cronista.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/cronistacomercial',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/cronistacom',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/cronistacom/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'Télam',
        description: 'The official national news agency of Argentina.',
        websiteUrl: 'https://www.telam.com.ar/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/AgenciaTelam',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/agenciatelam',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/agenciatelam/',
        type: 'News Agency',
        country: 'Argentina'
    },
    {
        name: 'Los Andes',
        description: 'A prominent newspaper from the Mendoza province.',
        websiteUrl: 'https://www.losandes.com.ar/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/losandesdiario',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/losandesdiario',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/losandesdiario/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'Olé',
        description: 'The most important sports daily in Argentina, with a strong focus on football.',
        websiteUrl: 'https://www.ole.com.ar/',
        facebookFollowers: '3.5M',
        facebookUrl: 'https://www.facebook.com/diarioole',
        xFollowers: '4.8M',
        xUrl: 'https://twitter.com/diarioole',
        instagramFollowers: '2.5M',
        instagramUrl: 'https://www.instagram.com/diario.ole/',
        type: 'Sports News',
        country: 'Argentina'
    },
    {
        name: 'Rosario3',
        description: 'A leading news portal for the city of Rosario and its surroundings.',
        websiteUrl: 'https://www.rosario3.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/rosario3',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/rosario3',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/rosario3/',
        type: 'Online Media',
        country: 'Argentina'
    },
    {
        name: 'El Destape Web',
        description: 'An online news portal with a focus on political and economic analysis.',
        websiteUrl: 'https://www.eldestapeweb.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/eldestapeweb',
        xFollowers: '900K',
        xUrl: 'https://twitter.com/eldestapeweb',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/eldestapeweb/',
        type: 'Online Media',
        country: 'Argentina'
    },
    {
        name: 'Minutouno',
        description: 'A popular online portal for breaking news, entertainment, and sports.',
        websiteUrl: 'https://www.minutouno.com/',
        facebookFollowers: '2M',
        facebookUrl: 'https://www.facebook.com/Minutouno',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/minutounocom',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/minutounocom/',
        type: 'Online Media',
        country: 'Argentina'
    },
    {
        name: 'Diario Uno',
        description: 'A newspaper with editions in several provinces, including Mendoza and Entre Ríos.',
        websiteUrl: 'https://www.diariouno.com.ar/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/diariouno',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/diariouno',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/diariouno/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'El Litoral',
        description: 'A major newspaper from the Santa Fe province.',
        websiteUrl: 'https://www.ellitoral.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/ellitoral',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/ellitoral',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/ellitoral/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'La Gaceta',
        description: 'The most important newspaper in the province of Tucumán.',
        websiteUrl: 'https://www.lagaceta.com.ar/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/lagaceta',
        xFollowers: '700K',
        xUrl: 'https://twitter.com/lagaceta',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/lagaceta/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'La Capital',
        description: 'The oldest newspaper in Argentina, based in Rosario.',
        websiteUrl: 'https://www.lacapital.com.ar/',
        facebookFollowers: '900K',
        facebookUrl: 'https://www.facebook.com/lacapital.rosario',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/lacapital',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/diariolacapital/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'iProfesional',
        description: 'An online publication focused on business, economics, and technology for professionals.',
        websiteUrl: 'https://www.iprofesional.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/iprofesional',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/iprofesional',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/iprofesional/',
        type: 'Online Media',
        country: 'Argentina'
    },
    {
        name: 'Mendoza Online',
        description: 'An influential news portal from the province of Mendoza.',
        websiteUrl: 'https://www.mdzol.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/mdzol',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/mdzol',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/mdzol/',
        type: 'Online Media',
        country: 'Argentina'
    },
    {
        name: 'El Día',
        description: 'A daily newspaper from the city of La Plata, capital of Buenos Aires province.',
        websiteUrl: 'https://www.eldia.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/eldialp',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/eldialp',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/eldialp/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'Crónica',
        description: 'A popular newspaper and television channel known for its sensationalist style.',
        websiteUrl: 'https://www.cronica.com.ar/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/diariocronica',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/cronica',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/cronicatv/',
        type: 'Newspaper/Broadcasting',
        country: 'Argentina'
    },
    {
        name: 'Buenos Aires Times',
        description: 'An English-language newspaper providing news and analysis on Argentina.',
        websiteUrl: 'https://www.batimes.com.ar/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/BuenosAiresTimes',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/batimes',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/batimes/',
        type: 'Newspaper',
        country: 'Argentina'
    },
    {
        name: 'TyC Sports',
        description: 'A major sports television channel and website in Argentina.',
        websiteUrl: 'https://www.tycsports.com/',
        facebookFollowers: '4M',
        facebookUrl: 'https://www.facebook.com/TyCSports',
        xFollowers: '5.5M',
        xUrl: 'https://twitter.com/TyCSports',
        instagramFollowers: '3M',
        instagramUrl: 'https://www.instagram.com/tycsports/',
        type: 'Sports News',
        country: 'Argentina'
    }
];

