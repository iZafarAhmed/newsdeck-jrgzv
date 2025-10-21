
export interface HaitiNewsSource {
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

export const haitiNewsSources: HaitiNewsSource[] = [
    {
        name: 'Le Nouvelliste',
        description: 'The oldest and largest daily newspaper in Haiti, covering a wide range of topics including politics, economy, and culture.',
        websiteUrl: 'https://lenouvelliste.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/lenouvelliste',
        xFollowers: '1.1M',
        xUrl: 'https://twitter.com/nouvelliste',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/lenouvelliste/',
        type: 'Newspaper',
        country: 'Haiti'
    },
    {
        name: 'Radio Télé Ginen',
        description: 'A popular radio and television station providing news and entertainment.',
        websiteUrl: 'https://radioteleginen.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/RadioTeleGinen',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/rtghaiti',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/rtghaiti/',
        type: 'Broadcasting',
        country: 'Haiti'
    },
    {
        name: 'Ayibopost',
        description: 'An online media outlet known for its in-depth analysis, investigative journalism, and commentary on Haitian affairs.',
        websiteUrl: 'https://www.ayibopost.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/ayibopost',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/ayibopost',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/ayibopost/',
        type: 'Online Media',
        country: 'Haiti'
    },
    {
        name: 'Radio Télévision Caraïbes',
        description: 'A major radio and television network in Haiti.',
        websiteUrl: 'https://www.rtvc.radiotelevisioncaraibes.com/',
        facebookFollowers: '2M',
        facebookUrl: 'https://www.facebook.com/rtvc.haiti',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/rtvchaiti',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/rtvchaiti/',
        type: 'Broadcasting',
        country: 'Haiti'
    },
    {
        name: 'Le National',
        description: 'A daily newspaper providing news on politics, society, and culture.',
        websiteUrl: 'https://www.lenational.org/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/LeNationalHaiti',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/LeNationalHaiti',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'Haiti'
    },
    {
        name: 'HaitiLibre',
        description: 'An online news portal providing daily news on Haiti.',
        websiteUrl: 'https://www.haitilibre.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/HaitiLibre',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/HaitiLibre',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'Haiti'
    },
    {
        name: 'Gazette Haiti',
        description: 'A news website covering Haitian news and politics.',
        websiteUrl: 'https://www.gazettehaiti.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/gazettehaiti',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/gazettehaiti',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/gazettehaiti/',
        type: 'Online Media',
        country: 'Haiti'
    },
    {
        name: 'Radio Métropole',
        description: 'One of the oldest and most respected radio stations in Haiti.',
        websiteUrl: 'https://metropole.ht/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/metropolehaiti',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/metropolehaiti',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/metropolehaiti/',
        type: 'Radio',
        country: 'Haiti'
    },
    {
        name: 'Juno7',
        description: 'A digital news platform covering Haitian and international news.',
        websiteUrl: 'https://www.juno7.ht/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/juno7info',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/juno7',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/juno7.ht/',
        type: 'Online Media',
        country: 'Haiti'
    },
    {
        name: 'Vant Bèf Info',
        description: 'An online news outlet with a focus on politics and current events.',
        websiteUrl: 'https://vantbefinfo.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/vantbefinfo',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/vantbefinfo',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/vantbefinfo/',
        type: 'Online Media',
        country: 'Haiti'
    },
    {
        name: 'Loop Haiti',
        description: 'A digital news platform covering local and Caribbean news.',
        websiteUrl: 'https://haiti.loopnews.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/LoopHaiti',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/loophaiti',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/loophaiti/',
        type: 'Digital Media',
        country: 'Haiti'
    },
    {
        name: 'Radio Kiskeya',
        description: 'A popular radio station known for its news and cultural programming.',
        websiteUrl: 'http://radiokiskeya.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/radiokiskeya',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/radiokiskeya',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/radiokiskeya/',
        type: 'Radio',
        country: 'Haiti'
    },
    {
        name: 'Ticket Magazine',
        description: 'A publication from Le Nouvelliste focusing on arts, culture, and entertainment.',
        websiteUrl: 'https://ticketmag.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/TicketMagazine',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/TicketMag',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/ticketmaghaiti/',
        type: 'Magazine',
        country: 'Haiti'
    },
    {
        name: 'Haiti Press Network',
        description: 'An online news agency providing news on Haiti.',
        websiteUrl: 'https://www.hpnhaiti.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/hpnhaiti',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/hpnhaiti',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'News Agency',
        country: 'Haiti'
    },
    {
        name: 'Le Matin',
        description: 'A daily newspaper with a focus on political and economic news.',
        websiteUrl: 'https://www.lematinhaiti.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/lematinhaiti',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/lematinhaiti',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/lematinhaiti/',
        type: 'Newspaper',
        country: 'Haiti'
    },
    {
        name: 'AlterPresse',
        description: 'An alternative news agency providing information on social and political issues.',
        websiteUrl: 'https://www.alterpresse.org/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/alterpresse',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/alterpresse',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'News Agency',
        country: 'Haiti'
    },
    {
        name: 'Télévision Nationale d\'Haïti (TNH)',
        description: 'The state television broadcaster of Haiti.',
        websiteUrl: 'https://tnh.ht/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/TNHHaiti',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/tnh_haiti',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/tnh_haiti/',
        type: 'Broadcasting',
        country: 'Haiti'
    },
    {
        name: 'Radio Vision 2000',
        description: 'A radio station with news and music programming.',
        websiteUrl: 'https://www.radiovision2000.net/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/radiovision2000',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/radiovision2000',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/radiovision2000/',
        type: 'Radio',
        country: 'Haiti'
    },
    {
        name: 'Le Moniteur',
        description: 'The official journal of the Republic of Haiti.',
        websiteUrl: 'https://www.lemoniteur.ht/',
        facebookFollowers: null,
        facebookUrl: null,
        xFollowers: null,
        xUrl: null,
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Official Gazette',
        country: 'Haiti'
    },
    {
        name: 'Haiti Info Project',
        description: 'Provides news and analysis with a focus on social and political issues.',
        websiteUrl: 'https://haitisolidarity.net/',
        facebookFollowers: null,
        facebookUrl: null,
        xFollowers: null,
        xUrl: null,
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'Haiti'
    }
];
