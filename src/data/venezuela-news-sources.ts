
export interface VenezuelaNewsSource {
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

export const venezuelaNewsSources: VenezuelaNewsSource[] = [
    {
        name: 'El Universal',
        description: 'One of the most widely read daily newspapers in Venezuela, covering national and international news.',
        websiteUrl: 'https://www.eluniversal.com/',
        facebookFollowers: '1.8M',
        facebookUrl: 'https://www.facebook.com/eluniversal',
        xFollowers: '4.5M',
        xUrl: 'https://twitter.com/eluniversal',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/eluniversal/',
        type: 'Newspaper',
        country: 'Venezuela'
    },
    {
        name: 'El Nacional',
        description: 'A major Venezuelan newspaper known for its critical stance and in-depth reporting.',
        websiteUrl: 'https://www.elnacional.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/elnacionalweb',
        xFollowers: '5.2M',
        xUrl: 'https://twitter.com/elnacionalweb',
        instagramFollowers: '1.8M',
        instagramUrl: 'https://www.instagram.com/elnacionalweb/',
        type: 'Newspaper',
        country: 'Venezuela'
    },
    {
        name: 'Últimas Noticias',
        description: 'A newspaper with one of the largest circulations in Venezuela, focusing on popular news.',
        websiteUrl: 'https://ultimasnoticias.com.ve/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/ultimasnoticiasve',
        xFollowers: '3.8M',
        xUrl: 'https://twitter.com/unoticias',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/unoticias/',
        type: 'Newspaper',
        country: 'Venezuela'
    },
    {
        name: 'La Patilla',
        description: 'A popular digital news portal known for its breaking news and critical coverage.',
        websiteUrl: 'https://www.lapatilla.com/',
        facebookFollowers: '2.2M',
        facebookUrl: 'https://www.facebook.com/lapatilla',
        xFollowers: '7.5M',
        xUrl: 'https://twitter.com/lapatilla',
        instagramFollowers: '2M',
        instagramUrl: 'https://www.instagram.com/lapatilla_oficial/',
        type: 'Online Media',
        country: 'Venezuela'
    },
    {
        name: 'Globovisión',
        description: 'A 24-hour television news network in Venezuela.',
        websiteUrl: 'https://globovision.com/',
        facebookFollowers: '3.5M',
        facebookUrl: 'https://www.facebook.com/globovision',
        xFollowers: '7M',
        xUrl: 'https://twitter.com/globovision',
        instagramFollowers: '2.5M',
        instagramUrl: 'https://www.instagram.com/globovision/',
        type: 'Broadcasting',
        country: 'Venezuela'
    },
    {
        name: 'Noticiero Digital',
        description: 'A long-standing news portal and forum for political debate.',
        websiteUrl: 'https://www.noticierodigital.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/NoticieroDigital',
        xFollowers: '1.8M',
        xUrl: 'https://twitter.com/NDtitulares',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/noticierodigital/',
        type: 'Online Media',
        country: 'Venezuela'
    },
    {
        name: 'Efecto Cocuyo',
        description: 'An independent news outlet focused on investigative journalism and human rights.',
        websiteUrl: 'https://efectococuyo.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/efectococuyo',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/EfectoCocuyo',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/efectococuyo/',
        type: 'Online Media',
        country: 'Venezuela'
    },
    {
        name: 'Prodavinci',
        description: 'An online publication that features long-form journalism, analysis, and essays.',
        websiteUrl: 'https://prodavinci.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/prodavinci',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/prodavinci',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/prodavinci/',
        type: 'Online Media',
        country: 'Venezuela'
    },
    {
        name: 'El Estímulo',
        description: 'A digital outlet with a focus on economics, business, and lifestyle.',
        websiteUrl: 'https://elestimulo.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/elestimulo',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/elestimulo',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/elestimulo/',
        type: 'Online Media',
        country: 'Venezuela'
    },
    {
        name: 'Panorama',
        description: 'A major newspaper from the state of Zulia.',
        websiteUrl: 'https://www.panorama.com.ve/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/diariopanorama',
        xFollowers: '3.2M',
        xUrl: 'https://twitter.com/diariopanorama',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/diariopanorama/',
        type: 'Newspaper',
        country: 'Venezuela'
    },
    {
        name: 'Runrun.es',
        description: 'An investigative news portal focused on politics, corruption, and human rights.',
        websiteUrl: 'https://runrun.es/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/Runrunes',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/RunRunesWeb',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/runrunesweb/',
        type: 'Online Media',
        country: 'Venezuela'
    },
    {
        name: 'Tal Cual',
        description: 'A newspaper and digital outlet with a strong focus on political opinion and analysis.',
        websiteUrl: 'https://talcualdigital.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/TalCualDigital',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/talcualdigital',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/talcualdigital/',
        type: 'Newspaper/Online',
        country: 'Venezuela'
    },
    {
        name: 'Crónica Uno',
        description: 'A digital outlet focused on community news and citizen reporting from Caracas.',
        websiteUrl: 'https://cronica.uno/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/Cronica.uno',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/CronicaUno',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/cronica.uno/',
        type: 'Online Media',
        country: 'Venezuela'
    },
    {
        name: 'NTN24 Venezuela',
        description: 'The Venezuelan section of the international news channel NTN24.',
        websiteUrl: 'https://www.ntn24.com/venezuela',
        facebookFollowers: '4M',
        facebookUrl: 'https://www.facebook.com/NTN24',
        xFollowers: '8M',
        xUrl: 'https://twitter.com/NTN24',
        instagramFollowers: '2M',
        instagramUrl: 'https://www.instagram.com/ntn24/',
        type: 'Broadcasting',
        country: 'Venezuela'
    }
];
