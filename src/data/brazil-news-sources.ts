
export interface BrazilNewsSource {
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

export const brazilNewsSources: BrazilNewsSource[] = [
    {
        name: 'G1',
        description: 'Brazils leading news portal, part of Grupo Globo, with comprehensive national and international coverage.',
        websiteUrl: 'https://g1.globo.com/',
        facebookFollowers: '14M',
        facebookUrl: 'https://www.facebook.com/g1',
        xFollowers: '12.5M',
        xUrl: 'https://twitter.com/g1',
        instagramFollowers: '9.2M',
        instagramUrl: 'https://www.instagram.com/g1/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'UOL',
        description: 'One of the largest internet portals in Brazil, offering news, entertainment, and services.',
        websiteUrl: 'https://www.uol.com.br/',
        facebookFollowers: '8M',
        facebookUrl: 'https://www.facebook.com/uol',
        xFollowers: '7.9M',
        xUrl: 'https://twitter.com/uol',
        instagramFollowers: '3.6M',
        instagramUrl: 'https://www.instagram.com/uol/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'Folha de S.Paulo',
        description: 'A leading newspaper with a strong reputation for investigative journalism and in-depth analysis.',
        websiteUrl: 'https://www.folha.uol.com.br/',
        facebookFollowers: '5.8M',
        facebookUrl: 'https://www.facebook.com/folhadesp',
        xFollowers: '8.4M',
        xUrl: 'https://twitter.com/folha',
        instagramFollowers: '3.3M',
        instagramUrl: 'https://www.instagram.com/folhadespaulo/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'O Globo',
        description: 'A major daily newspaper from Rio de Janeiro, with national and international news coverage.',
        websiteUrl: 'https://oglobo.globo.com/',
        facebookFollowers: '5.7M',
        facebookUrl: 'https://www.facebook.com/oglobo',
        xFollowers: '8.2M',
        xUrl: 'https://twitter.com/oglobo',
        instagramFollowers: '2.5M',
        instagramUrl: 'https://www.instagram.com/oglobo/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'Estadão',
        description: 'A respected newspaper known for its coverage of politics, economics, and international affairs.',
        websiteUrl: 'https://www.estadao.com.br/',
        facebookFollowers: '3.8M',
        facebookUrl: 'https://www.facebook.com/estadao',
        xFollowers: '7.8M',
        xUrl: 'https://twitter.com/estadao',
        instagramFollowers: '1.9M',
        instagramUrl: 'https://www.instagram.com/estadao/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'R7',
        description: 'A news and entertainment portal from Grupo Record, with a wide range of content.',
        websiteUrl: 'https://www.r7.com/',
        facebookFollowers: '12M',
        facebookUrl: 'https://www.facebook.com/portalr7',
        xFollowers: '6.6M',
        xUrl: 'https://twitter.com/portalr7',
        instagramFollowers: '3.3M',
        instagramUrl: 'https://www.instagram.com/portalr7/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'GloboNews',
        description: 'A 24-hour news channel from Grupo Globo, focusing on politics, economy, and breaking news.',
        websiteUrl: 'https://g1.globo.com/globonews/',
        facebookFollowers: '5.2M',
        facebookUrl: 'https://www.facebook.com/GloboNews',
        xFollowers: '10.3M',
        xUrl: 'https://twitter.com/globonews',
        instagramFollowers: '2.4M',
        instagramUrl: 'https://www.instagram.com/globonews/',
        type: 'Broadcasting',
        country: 'Brazil'
    },
    {
        name: 'Exame',
        description: 'A leading magazine and website for business, finance, and economics in Brazil.',
        websiteUrl: 'https://exame.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/exame',
        xFollowers: '4.8M',
        xUrl: 'https://twitter.com/exame',
        instagramFollowers: '2.1M',
        instagramUrl: 'https://www.instagram.com/exame/',
        type: 'Magazine',
        country: 'Brazil'
    },
    {
        name: 'CNN Brasil',
        description: 'The Brazilian branch of the international news network, covering national and global events.',
        websiteUrl: 'https://www.cnnbrasil.com.br/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/cnnbrasil',
        xFollowers: '2.3M',
        xUrl: 'https://twitter.com/cnnbrasil',
        instagramFollowers: '4.5M',
        instagramUrl: 'https://www.instagram.com/cnnbrasil/',
        type: 'Broadcasting',
        country: 'Brazil'
    },
    {
        name: 'Veja',
        description: 'One of the most influential weekly news magazines in Brazil.',
        websiteUrl: 'https://veja.abril.com.br/',
        facebookFollowers: '6.8M',
        facebookUrl: 'https://www.facebook.com/VEJA',
        xFollowers: '7.9M',
        xUrl: 'https://twitter.com/VEJA',
        instagramFollowers: '1.8M',
        instagramUrl: 'https://www.instagram.com/vejanoinsta/',
        type: 'Magazine',
        country: 'Brazil'
    },
    {
        name: 'O Antagonista',
        description: 'An independent news and opinion website with a focus on politics and corruption.',
        websiteUrl: 'https://www.oantagonista.com.br/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/oantagonista',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/o_antagonista',
        instagramFollowers: '1.1M',
        instagramUrl: 'https://www.instagram.com/o_antagonista/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'Correio Braziliense',
        description: 'A major newspaper from the capital, Brasília, covering federal politics and national news.',
        websiteUrl: 'https://www.correiobraziliense.com.br/',
        facebookFollowers: '1.9M',
        facebookUrl: 'https://www.facebook.com/correiobraziliense',
        xFollowers: '2.2M',
        xUrl: 'https://twitter.com/correio',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/correio.braziliense/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'Metrópoles',
        description: 'A digital news portal with a strong presence in Brasília and other major cities.',
        websiteUrl: 'https://www.metropoles.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/metropolesdf',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/Metropoles',
        instagramFollowers: '3.8M',
        instagramUrl: 'https://www.instagram.com/metropoles/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'CartaCapital',
        description: 'A weekly magazine known for its left-leaning perspective on politics and society.',
        websiteUrl: 'https://www.cartacapital.com.br/',
        facebookFollowers: '2.2M',
        facebookUrl: 'https://www.facebook.com/cartacapital',
        xFollowers: '2.1M',
        xUrl: 'https://twitter.com/cartacapital',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/cartacapital/',
        type: 'Magazine',
        country: 'Brazil'
    },
    {
        name: 'Valor Econômico',
        description: "Brazil's largest financial newspaper, focusing on business, economy, and investments.",
        websiteUrl: 'https://valor.globo.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/valoreconomico',
        xFollowers: '2.9M',
        xUrl: 'https://twitter.com/valoreconomico',
        instagramFollowers: '700K',
        instagramUrl: 'https://www.instagram.com/valoreconomico/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'Jovem Pan',
        description: 'A major radio broadcaster and news portal with a conservative viewpoint.',
        websiteUrl: 'https://jovempan.com.br/',
        facebookFollowers: '6M',
        facebookUrl: 'https://www.facebook.com/portaljovempan',
        xFollowers: '4.5M',
        xUrl: 'https://twitter.com/jovempan',
        instagramFollowers: '5M',
        instagramUrl: 'https://www.instagram.com/jovempannews/',
        type: 'Broadcasting',
        country: 'Brazil'
    },
    {
        name: 'Poder360',
        description: 'A digital journalism outlet focused on power, politics, and government in Brazil.',
        websiteUrl: 'https://www.poder360.com.br/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/poder360',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/poder360',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/poder360/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'A Tarde',
        description: 'A leading newspaper from the state of Bahia, with strong regional coverage.',
        websiteUrl: 'https://www.atarde.com.br/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/atarde',
        xFollowers: '900K',
        xUrl: 'https://twitter.com/atarde',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/atardeoficial/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'O Povo',
        description: 'A prominent newspaper from the state of Ceará, covering local and national news.',
        websiteUrl: 'https://www.opovo.com.br/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/OPOVOOnline',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/opovo',
        instagramFollowers: '1.1M',
        instagramUrl: 'https://www.instagram.com/opovoonline/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'Gazeta do Povo',
        description: 'A newspaper from Paraná with a conservative stance on politics and society.',
        websiteUrl: 'https://www.gazetadopovo.com.br/',
        facebookFollowers: '1.8M',
        facebookUrl: 'https://www.facebook.com/gazetadopovo',
        xFollowers: '900K',
        xUrl: 'https://twitter.com/gazetadopovo',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/gazetadopovo/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'Diário de Pernambuco',
        description: 'The oldest newspaper in circulation in Latin America, based in Pernambuco.',
        websiteUrl: 'https://www.diariodepernambuco.com.br/',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/diariodepernambuco',
        xFollowers: '1.1M',
        xUrl: 'https://twitter.com/diariodape',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/diariodepernambuco/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'Extra',
        description: 'A popular newspaper from Rio de Janeiro, known for its service journalism and community focus.',
        websiteUrl: 'https://extra.globo.com/',
        facebookFollowers: '3M',
        facebookUrl: 'https://www.facebook.com/jornalextra',
        xFollowers: '3.5M',
        xUrl: 'https://twitter.com/jornalextra',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/jornalextra/',
        type: 'Newspaper',
        country: 'Brazil'
    },
    {
        name: 'Terra',
        description: 'A large internet portal with news, sports, and entertainment content.',
        websiteUrl: 'https://www.terra.com.br/',
        facebookFollowers: '6.5M',
        facebookUrl: 'https://www.facebook.com/Terra',
        xFollowers: '5.5M',
        xUrl: 'https://twitter.com/Terra',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/terrabrasil/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'IG',
        description: 'A Brazilian internet service provider and news portal.',
        websiteUrl: 'https://www.ig.com.br/',
        facebookFollowers: '3M',
        facebookUrl: 'https://www.facebook.com/iG',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/iG',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/ig/',
        type: 'Online Media',
        country: 'Brazil'
    },
    {
        name: 'Band News',
        description: 'A 24-hour news radio and television network from Grupo Bandeirantes.',
        websiteUrl: 'https://www.band.uol.com.br/bandnewsfm',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/bandnewsfm',
        xFollowers: '2M',
        xUrl: 'https://twitter.com/bandnewsfm',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/bandnewsfm/',
        type: 'Broadcasting',
        country: 'Brazil'
    }
];
