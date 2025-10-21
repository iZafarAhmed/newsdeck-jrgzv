
export interface ParaguayNewsSource {
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

export const paraguayNewsSources: ParaguayNewsSource[] = [
    {
        name: 'ABC Color',
        description: 'One of the most prominent newspapers in Paraguay, covering national and international news.',
        websiteUrl: 'https://www.abc.com.py/',
        facebookFollowers: '2.1M',
        facebookUrl: 'https://www.facebook.com/ABCDigital',
        xFollowers: '1.8M',
        xUrl: 'https://twitter.com/ABCDigital',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/abcdigital/',
        type: 'Newspaper',
        country: 'Paraguay'
    },
    {
        name: 'Última Hora',
        description: 'A leading daily newspaper with comprehensive coverage of Paraguayan news and current affairs.',
        websiteUrl: 'https://www.ultimahora.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/ultimahorapy',
        xFollowers: '1.3M',
        xUrl: 'https://twitter.com/ultimahorapy',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/ultimahorapy/',
        type: 'Newspaper',
        country: 'Paraguay'
    },
    {
        name: 'La Nación',
        description: 'A daily newspaper providing news on politics, economy, sports, and culture.',
        websiteUrl: 'https://www.lanacion.com.py/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/lanacionpy',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/lanacionpy',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/lanacionpy/',
        type: 'Newspaper',
        country: 'Paraguay'
    },
    {
        name: 'Diario HOY',
        description: 'A digital native newspaper with a strong focus on breaking news and politics.',
        websiteUrl: 'https://www.hoy.com.py/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/diariohoypy',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/diariohoypy',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/diariohoypy/',
        type: 'Online Media',
        country: 'Paraguay'
    },
    {
        name: 'Crónica',
        description: 'A popular newspaper known for its coverage of entertainment, sports, and human-interest stories.',
        websiteUrl: 'https://www.cronica.com.py/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/diariocronicaparaguay',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/cronicapy',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/cronicapy/',
        type: 'Newspaper',
        country: 'Paraguay'
    },
    {
        name: '5días',
        description: 'A newspaper specializing in business, finance, and economics.',
        websiteUrl: 'https://www.5dias.com.py/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/5diasPY',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/5diasPY',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/5diaspy/',
        type: 'Newspaper',
        country: 'Paraguay'
    },
    {
        name: 'ADN Digital',
        description: 'A digital news platform covering politics, economy, and current affairs.',
        websiteUrl: 'https://www.adndigital.com.py/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/adndigital',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/adndigital',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/adndigital/',
        type: 'Online Media',
        country: 'Paraguay'
    },
    {
        name: 'Extra',
        description: 'A popular newspaper with a focus on sports, entertainment, and breaking news.',
        websiteUrl: 'https://www.extra.com.py/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/DiarioExtraPy',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/diarioextrapy',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/diarioextrapy/',
        type: 'Newspaper',
        country: 'Paraguay'
    },
    {
        name: 'El Nacional',
        description: 'A digital newspaper providing news and analysis on politics, economy, and culture.',
        websiteUrl: 'https://www.elnacional.com.py/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/elnacionalpy',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/elnacionalpy',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/elnacionalpy/',
        type: 'Online Media',
        country: 'Paraguay'
    },
    {
        name: 'Noticias Paraguay (NPY)',
        description: 'A television news channel with extensive online coverage.',
        websiteUrl: 'https://www.npy.com.py/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/npyoficial',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/npyoficial',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/npyoficial/',
        type: 'Broadcasting',
        country: 'Paraguay'
    },
    {
        name: 'Agencia de Información Paraguaya (IP)',
        description: 'The official state news agency of Paraguay.',
        websiteUrl: 'https://www.ip.gov.py/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/agenciaparaguayadeinformacion',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/IPParaguay',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/ipparaguay/',
        type: 'News Agency',
        country: 'Paraguay'
    },
    {
        name: 'Radio Ñandutí',
        description: 'A leading radio station with a strong presence in news and political commentary.',
        websiteUrl: 'https://www.nanduti.com.py/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/RadioNanduti',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/nanduti',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/radionanduti/',
        type: 'Radio',
        country: 'Paraguay'
    },
    {
        name: 'La Unión',
        description: 'A radio and television group with news and sports coverage.',
        websiteUrl: 'https://launion.com.py/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/LaUnionAM800',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/LaUnionAM800',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/launionam/',
        type: 'Broadcasting',
        country: 'Paraguay'
    },
    {
        name: 'ABC TV',
        description: 'The television channel of the ABC Color group.',
        websiteUrl: 'https://www.abc.com.py/tv/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/abctvpy',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/abctvpy',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/abctvpy/',
        type: 'Broadcasting',
        country: 'Paraguay'
    }
];
