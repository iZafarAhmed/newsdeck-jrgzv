
export interface PuertoRicoNewsSource {
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

export const puertoRicoNewsSources: PuertoRicoNewsSource[] = [
    {
        name: 'El Nuevo Día',
        description: 'The largest newspaper in Puerto Rico, with comprehensive coverage of news, politics, and culture.',
        websiteUrl: 'https://www.elnuevodia.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/elnuevodia',
        xFollowers: '1.8M',
        xUrl: 'https://twitter.com/elnuevodia',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/elnuevodia/',
        type: 'Newspaper',
        country: 'Puerto Rico'
    },
    {
        name: 'El Vocero de Puerto Rico',
        description: 'A major daily newspaper with a strong focus on local news and sports.',
        websiteUrl: 'https://www.elvocero.com/',
        facebookFollowers: '2M',
        facebookUrl: 'https://www.facebook.com/elvocero',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/elvocero',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/elvocero/',
        type: 'Newspaper',
        country: 'Puerto Rico'
    },
    {
        name: 'NotiCel',
        description: 'A digital-native news outlet known for its investigative journalism and political coverage.',
        websiteUrl: 'https://www.noticel.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/noticel',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/noticel',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/noticel/',
        type: 'Online Media',
        country: 'Puerto Rico'
    },
    {
        name: 'WAPA.TV',
        description: 'The news division of WAPA-TV, a leading television station in Puerto Rico.',
        websiteUrl: 'https://www.wapa.tv/',
        facebookFollowers: '2.8M',
        facebookUrl: 'https://www.facebook.com/wapatv',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/wapatv',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/wapatv/',
        type: 'Broadcasting',
        country: 'Puerto Rico'
    },
    {
        name: 'Telemundo Puerto Rico',
        description: 'The news division of Telemundo in Puerto Rico, providing local and international news.',
        websiteUrl: 'https://www.telemundopr.com/',
        facebookFollowers: '2.2M',
        facebookUrl: 'https://www.facebook.com/telemundopr',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/telemundopr',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/telemundopr/',
        type: 'Broadcasting',
        country: 'Puerto Rico'
    }
];
