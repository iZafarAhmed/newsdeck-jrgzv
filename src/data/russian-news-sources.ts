
export interface RussianNewsSource {
    name: string;
    description: string;
    websiteUrl: string | null;
    facebookFollowers: string | null;
    facebookUrl: string | null;
    xFollowers: string | null;
    xUrl: string | null;
    instagramFollowers: string | null;
    instagramUrl: string | null;
    type: string;
    country: string;
}

export const russianNewsSources: RussianNewsSource[] = [
    {
        name: 'TASS',
        description: 'A major news agency in Russia, founded in 1904.',
        websiteUrl: 'https://tass.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/tassagency',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/tass_agency',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/tass_agency/',
        type: 'News Agency',
        country: 'Russia'
    },
    {
        name: 'RT (Russia Today)',
        description: 'A Russian state-controlled international television network.',
        websiteUrl: 'https://www.rt.com/',
        facebookFollowers: '7.5M',
        facebookUrl: 'https://www.facebook.com/RTnews',
        xFollowers: '3M',
        xUrl: 'https://twitter.com/rt_com',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/rt/',
        type: 'Broadcasting',
        country: 'Russia'
    },
    {
        name: 'Interfax',
        description: 'A major independent news agency in Russia.',
        websiteUrl: 'https://www.interfax.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/Interfax',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/interfax_news',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'News Agency',
        country: 'Russia'
    },
    {
        name: 'Sputnik',
        description: 'A Russian state-owned news agency, news website platform and radio broadcast service.',
        websiteUrl: 'https://sputnikglobe.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/SputnikNews',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/sputnikint',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/sputnik_news/',
        type: 'News Agency',
        country: 'Russia'
    },
    {
        name: 'Meduza',
        description: 'An independent news website based in Latvia, publishing in Russian and English.',
        websiteUrl: 'https://meduza.io/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/meduzaproject',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/meduzaproject',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/meduzapro/',
        type: 'Online Media',
        country: 'Latvia'
    },
    {
        name: 'The Moscow Times',
        description: 'An independent English-language online newspaper based in Amsterdam.',
        websiteUrl: 'https://www.themoscowtimes.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/MoscowTimes',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/moscowtimes',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/the.moscow.times/',
        type: 'Newspaper',
        country: 'Netherlands'
    },
    {
        name: 'Pravda.ru',
        description: 'A pro-government online publication in Russia.',
        websiteUrl: 'https://www.pravda.ru/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/pravdaru',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/pravda',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'Russia'
    },
    {
        name: 'Kommersant',
        description: 'A nationally distributed daily newspaper published in Russia mostly devoted to politics and business.',
        websiteUrl: 'https://www.kommersant.ru/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/kommersant',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/kommersant',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kommersant_online/',
        type: 'Newspaper',
        country: 'Russia'
    },
    {
        name: 'Izvestia',
        description: 'A long-running high-circulation daily newspaper in Russia.',
        websiteUrl: 'https://iz.ru/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/izvestianews',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/izvestia_ru',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/izvestia_ru/',
        type: 'Newspaper',
        country: 'Russia'
    },
    {
        name: 'Vedomosti',
        description: 'A Russian-language business daily newspaper.',
        websiteUrl: 'https://www.vedomosti.ru/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/vedomosti',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/vedomosti',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/vedomosti/',
        type: 'Newspaper',
        country: 'Russia'
    }
];
