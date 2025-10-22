
export interface NewMexicoNewsSource {
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

export const newMexicoNewsSources: NewMexicoNewsSource[] = [
    {
        name: 'Albuquerque Journal',
        description: 'The largest newspaper in New Mexico, covering Albuquerque and the entire state.',
        websiteUrl: 'https://www.abqjournal.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/abqjournal',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/abqjournal',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/abqjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KOB 4',
        description: 'NBC affiliate in Albuquerque, providing local news, weather, and sports.',
        websiteUrl: 'https://www.kob.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/KOB4',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/KOB4',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/kob4/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KOAT Action 7 News',
        description: 'ABC affiliate serving Albuquerque and New Mexico.',
        websiteUrl: 'https://www.koat.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/koat7',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/koat7news',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/koat7/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KRQE News 13',
        description: 'CBS and Fox affiliate in Albuquerque, with statewide news coverage.',
        websiteUrl: 'https://www.krqe.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/krqe13',
        xFollowers: '220K',
        xUrl: 'https://twitter.com/krqe',
        instagramFollowers: '70K',
        instagramUrl: 'https://www.instagram.com/krqe/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Santa Fe New Mexican',
        description: 'The daily newspaper for Santa Fe, the state capital.',
        websiteUrl: 'https://www.santafenewmexican.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/sfnewmexican',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/santafenewmex',
        instagramFollowers: '25K',
        instagramUrl: 'https://www.instagram.com/santafenewmexican/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Las Cruces Sun-News',
        description: 'The daily newspaper serving Las Cruces and southern New Mexico.',
        websiteUrl: 'https://www.lcsun-news.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/lcsunnews',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/lcsunnews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/lcsunnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Roswell Daily Record',
        description: 'A daily newspaper for Roswell and southeastern New Mexico.',
        websiteUrl: 'https://www.rdrnews.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/RoswellDailyRecord',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/RoswellDR',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/roswelldailyrecord/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'NM Political Report',
        description: 'A non-profit news organization focusing on New Mexico politics and policy.',
        websiteUrl: 'https://nmpoliticalreport.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/NMPoliticalReport',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/nmpolreport',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/nmpoliticalreport/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Searchlight New Mexico',
        description: 'A non-partisan, nonprofit news organization dedicated to investigative journalism.',
        websiteUrl: 'https://searchlightnm.org/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/searchlightnm',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/searchlightnm',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/searchlightnewmexico/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'KUNM',
        description: 'The NPR member station for New Mexico, based at the University of New Mexico.',
        websiteUrl: 'https://www.kunm.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/kunmfm',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/kunm',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/kunmradio/',
        type: 'Radio',
        country: 'USA'
    }
];
