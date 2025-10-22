
export interface MarylandNewsSource {
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

export const marylandNewsSources: MarylandNewsSource[] = [
    {
        name: 'The Baltimore Sun',
        description: 'The largest general-circulation daily newspaper in Maryland.',
        websiteUrl: 'https://www.baltimoresun.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/baltimoresun',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/baltimoresun',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/baltimoresun/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WBAL-TV 11',
        description: 'NBC affiliate in Baltimore, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wbaltv.com/',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/wbaltv11',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wbaltv11',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/wbaltv11/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WJZ-TV | CBS Baltimore',
        description: 'CBS-owned-and-operated television station licensed to Baltimore, Maryland.',
        websiteUrl: 'https://www.cbsnews.com/baltimore/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/wjztv',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wjz',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/wjztv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WMAR-2 News',
        description: 'ABC affiliate serving Baltimore and the surrounding areas.',
        websiteUrl: 'https://www.wmar2news.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/wmar2news',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wmar2news',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/wmar2news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WBFF FOX45 News',
        description: 'Fox affiliate in Baltimore, providing news and investigative journalism.',
        websiteUrl: 'https://foxbaltimore.com/',
        facebookFollowers: '900K',
        facebookUrl: 'https://www.facebook.com/foxbaltimore',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/foxbaltimore',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/foxbaltimore/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Capital Gazette',
        description: 'A daily newspaper serving Annapolis and Anne Arundel County.',
        websiteUrl: 'https://www.capitalgazette.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/capgaznews',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/capgaznews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/capgaznews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Maryland Matters',
        description: 'An independent, nonprofit news site about Maryland government and politics.',
        websiteUrl: 'https://www.marylandmatters.org/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/marylandmatters',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/marylandmatters',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/marylandmatters/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'The Daily Record',
        description: 'A business and legal newspaper.',
        websiteUrl: 'https://thedailyrecord.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/TheDailyRecord',
        xFollowers: '12K',
        xUrl: 'https://twitter.com/TheDailyRecord',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/thedailyrecord/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Baltimore Brew',
        description: 'An independent online journal for news and views about Greater Baltimore.',
        websiteUrl: 'https://www.baltimorebrew.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/baltimorebrew',
        xFollowers: '35K',
        xUrl: 'https://twitter.com/baltimorebrew',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Baltimore Banner',
        description: 'A nonprofit news organization covering a wide range of topics in the Baltimore area.',
        websiteUrl: 'https://www.thebaltimorebanner.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/TheBaltimoreBanner',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/BaltimoreBanner',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/thebaltimorebanner/',
        type: 'Nonprofit',
        country: 'USA'
    }
];
