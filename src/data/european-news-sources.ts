
export interface EuropeanNewsSource {
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

export const europeanNewsSources: EuropeanNewsSource[] = [
    {
        name: 'Euronews',
        description: 'A leading international news channel covering world news from a European perspective.',
        websiteUrl: 'https://www.euronews.com/',
        facebookFollowers: '2.2M',
        facebookUrl: 'https://www.facebook.com/euronews',
        xFollowers: '618.3K',
        xUrl: 'https://twitter.com/euronews',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/euronews.tv/',
        type: 'Broadcasting',
        country: 'Europe'
    },
    {
        name: 'Politico Europe',
        description: 'A nonpartisan publication covering the politics and policy of the European Union.',
        websiteUrl: 'https://www.politico.eu/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/POLITICOEurope',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/politicoeurope',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/politicoeurope/',
        type: 'Online Media',
        country: 'Belgium'
    },
    {
        name: 'EUobserver',
        description: 'An independent online newspaper that reports on the European Union.',
        websiteUrl: 'https://euobserver.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/euobserver',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/euobs',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'Belgium'
    },
    {
        name: 'The Brussels Times',
        description: 'An English-language news source for Brussels and Belgium.',
        websiteUrl: 'https://www.brusselstimes.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/TheBrusselsTimes',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/brusselstimes',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/thebrusselstimes/',
        type: 'Newspaper',
        country: 'Belgium'
    },
    {
        name: 'Deutsche Welle (DW)',
        description: 'Germany’s international broadcaster, providing news and information in 30 languages.',
        websiteUrl: 'https://www.dw.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/deutschewelle',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/dwnews',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/dwnews/',
        type: 'Public Broadcaster',
        country: 'Germany'
    },
    {
        name: 'France 24',
        description: 'A French state-owned international news television network.',
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
        name: 'The Local',
        description: 'A multi-regional, English-language digital news publisher with local editions in several European countries.',
        websiteUrl: 'https://www.thelocal.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/thelocal.de',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/thelocalgermany',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'Europe'
    },
    {
        name: 'Balkan Insight',
        description: 'A network of journalists focusing on news, analysis, and investigative reporting from southeastern Europe.',
        websiteUrl: 'https://balkaninsight.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/balkaninsight',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/balkaninsight',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/balkaninsight/',
        type: 'Online Media',
        country: 'Balkans'
    },
    {
        name: 'Kyiv Post',
        description: 'Ukraine’s leading English-language newspaper.',
        websiteUrl: 'https://www.kyivpost.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/kyivpost',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/kyivpost',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kyivpost.official/',
        type: 'Newspaper',
        country: 'Ukraine'
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
    }
];
