
export interface FranceNewsSource {
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

export const franceNewsSources: FranceNewsSource[] = [
    {
        name: 'Le Monde',
        description: 'A leading daily newspaper with comprehensive national and international news.',
        websiteUrl: 'https://www.lemonde.fr/',
        facebookFollowers: '4.8M',
        facebookUrl: 'https://www.facebook.com/lemonde.fr',
        xFollowers: '10.5M',
        xUrl: 'https://twitter.com/lemondefr',
        instagramFollowers: '2.1M',
        instagramUrl: 'https://www.instagram.com/lemondefr/',
        type: 'Newspaper',
        country: 'France'
    },
    {
        name: 'Le Figaro',
        description: 'One of the oldest and most respected newspapers in France, with a conservative viewpoint.',
        websiteUrl: 'https://www.lefigaro.fr/',
        facebookFollowers: '3.5M',
        facebookUrl: 'https://www.facebook.com/lefigaro',
        xFollowers: '5M',
        xUrl: 'https://twitter.com/le_figaro',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/lefigarofr/',
        type: 'Newspaper',
        country: 'France'
    },
    {
        name: 'Libération',
        description: 'A daily newspaper with a left-leaning perspective, known for its in-depth analysis.',
        websiteUrl: 'https://www.liberation.fr/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/liberation',
        xFollowers: '2.2M',
        xUrl: 'https://twitter.com/libe',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/liberationfr/',
        type: 'Newspaper',
        country: 'France'
    },
    {
        name: 'France 24',
        description: 'A state-owned international news television network.',
        websiteUrl: 'https://www.france24.com/en/',
        facebookFollowers: '3M',
        facebookUrl: 'https://www.facebook.com/FRANCE24.English',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/france24_en',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/france24_en/',
        type: 'Broadcasting',
        country: 'France'
    },
    {
        name: 'Les Echos',
        description: 'The leading financial newspaper in France.',
        websiteUrl: 'https://www.lesechos.fr/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/lesechos',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/lesechos',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/lesechos/',
        type: 'Newspaper',
        country: 'France'
    },
    {
        name: 'La Tribune',
        description: 'A national financial newspaper.',
        websiteUrl: 'https://www.latribune.fr/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/LaTribune',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/latribune',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/latribune/',
        type: 'Newspaper',
        country: 'France'
    },
    {
        name: 'L\'Humanité',
        description: 'A daily newspaper with historical ties to the French Communist Party.',
        websiteUrl: 'https://www.humanite.fr/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/humanite.fr',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/humanite_fr',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/humanite.fr/',
        type: 'Newspaper',
        country: 'France'
    },
    {
        name: 'La Croix',
        description: 'A daily newspaper with a Catholic perspective.',
        websiteUrl: 'https://www.la-croix.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/lacroix.journal',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/LaCroix',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/journal.lacroix/',
        type: 'Newspaper',
        country: 'France'
    },
    {
        name: 'Mediapart',
        description: 'An independent online investigative journal.',
        websiteUrl: 'https://www.mediapart.fr/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/Mediapart',
        xFollowers: '3M',
        xUrl: 'https://twitter.com/mediapart',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/mediapart/',
        type: 'Online Media',
        country: 'France'
    },
    {
        name: 'Le Parisien',
        description: 'A major daily newspaper covering news from Paris and its suburbs.',
        websiteUrl: 'https://www.leparisien.fr/',
        facebookFollowers: '4M',
        facebookUrl: 'https://www.facebook.com/leparisien',
        xFollowers: '3.5M',
        xUrl: 'https://twitter.com/le_Parisien',
        instagramFollowers: '800K',
        instagramUrl: 'https://www.instagram.com/leparisien/',
        type: 'Newspaper',
        country: 'France'
    }
];
