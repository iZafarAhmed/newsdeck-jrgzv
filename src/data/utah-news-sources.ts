
export interface UtahNewsSource {
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

export const utahNewsSources: UtahNewsSource[] = [
    {
        name: 'The Salt Lake Tribune',
        description: 'A nonprofit, community-owned newspaper providing investigative journalism and in-depth coverage of Utah.',
        websiteUrl: 'https://www.sltrib.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/sltrib',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/sltrib',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/sltrib/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Deseret News',
        description: 'The oldest continuously published newspaper in Utah, with a focus on faith, family, and culture.',
        websiteUrl: 'https://www.deseret.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/deseretnews',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/deseretnews',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/deseretnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KSL TV',
        description: 'NBC affiliate in Salt Lake City, providing local news, weather, and sports.',
        websiteUrl: 'https://ksltv.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/ksltv',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/ksltv',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/ksl_tv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'FOX 13 Salt Lake City',
        description: 'Fox affiliate serving Salt Lake City and the surrounding area.',
        websiteUrl: 'https://www.fox13now.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/fox13now',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/fox13',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/fox13now/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KUTV (CBS 2)',
        description: 'CBS affiliate for Salt Lake City and Utah.',
        websiteUrl: 'https://kutv.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/kutv2news',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/kutv2news',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/kutv2news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KUER (NPR Utah)',
        description: 'NPR member station for Utah, providing local and national news.',
        websiteUrl: 'https://www.kuer.org/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/kuer901',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/kuer',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/kuer90.1/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Herald Journal (Logan)',
        description: 'A daily newspaper serving Logan and Cache County.',
        websiteUrl: 'https://www.hjnews.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/hjnews',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/hjnews',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/hjnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Spectrum (St. George)',
        description: 'A daily newspaper serving St. George and southwestern Utah.',
        websiteUrl: 'https://www.thespectrum.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/thespectrum',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/thespectrum',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/thespectrumnewspaper/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Daily Herald (Provo)',
        description: 'A daily newspaper serving Provo and Utah County.',
        websiteUrl: 'https://www.heraldextra.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/dailyherald',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/heraldextra',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/dailyherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Standard-Examiner (Ogden)',
        description: 'A daily newspaper for Ogden and northern Utah.',
        websiteUrl: 'https://www.standard.net/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/standardexaminer',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/standex',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/standardexaminer/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KSL NewsRadio',
        description: 'A news and talk radio station serving Salt Lake City.',
        websiteUrl: 'https://kslnewsradio.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/kslnewsradio',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/kslnewsradio',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/ksl_newsradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'Salt Lake City Weekly',
        description: 'An alternative weekly newspaper for Salt Lake City.',
        websiteUrl: 'https://www.cityweekly.net/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/slcweekly',
        xFollowers: '70K',
        xUrl: 'https://twitter.com/slcweekly',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/slcweekly/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Park Record',
        description: 'A newspaper for Park City and Summit County.',
        websiteUrl: 'https://www.parkrecord.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/parkrecord',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/parkrecord',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/parkrecord/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'St. George News',
        description: 'An online news source for St. George and southern Utah.',
        websiteUrl: 'https://www.stgeorgeutah.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/stgeorgeutah',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/stgeorgeutah',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/stgeorgeutah/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Daily Universe',
        description: 'The student newspaper of Brigham Young University.',
        websiteUrl: 'https://universe.byu.edu/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/universebyu',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/universebyu',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/universebyu/',
        type: 'University',
        country: 'USA'
    },
    {
        name: 'The Utah Chronicle',
        description: 'The student newspaper of the University of Utah.',
        websiteUrl: 'https://dailyutahchronicle.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/dailyutahchronicle',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/thechrony',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/dailyutahchronicle/',
        type: 'University',
        country: 'USA'
    },
    {
        name: 'Utah Policy',
        description: 'A news site focusing on Utah politics and policy.',
        websiteUrl: 'https://utahpolicy.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/utahpolicy',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/utahpolicy',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Salt Lake Magazine',
        description: 'A magazine covering lifestyle, dining, and culture in Salt Lake City.',
        websiteUrl: 'https://www.sltrib.com/salt-lake-magazine/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/saltlakemagazine',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/saltlakemag',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/saltlakemag/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'KSL.com',
        description: 'A major online news and classifieds site in Utah.',
        websiteUrl: 'https://www.ksl.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/kslcom',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/kslcom',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/ksl_com/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Gephardt Daily',
        description: 'An online news source for Utah with a focus on breaking news.',
        websiteUrl: 'https://gephardtdaily.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/gephardtdaily',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/gephardtdaily',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/gephardtdaily/',
        type: 'Online Media',
        country: 'USA'
    }
];
