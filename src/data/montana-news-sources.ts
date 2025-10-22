
export interface MontanaNewsSource {
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

export const montanaNewsSources: MontanaNewsSource[] = [
    {
        name: 'Billings Gazette',
        description: 'The largest newspaper in Montana, serving Billings and the surrounding areas.',
        websiteUrl: 'https://billingsgazette.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/billingsgazette',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/billingsgazette',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/billingsgazette/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KTVQ',
        description: 'CBS affiliate in Billings, providing local news, weather, and sports.',
        websiteUrl: 'https://www.ktvq.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/KTVQ',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/ktvq',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/ktvq2/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Missoulian',
        description: 'A daily newspaper serving Missoula and Western Montana.',
        websiteUrl: 'https://missoulian.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/missoulian',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/missoulian',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/missoulian/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Bozeman Daily Chronicle',
        description: 'The daily newspaper for Bozeman and Gallatin County.',
        websiteUrl: 'https://www.bozemandailychronicle.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/bozemandailychronicle',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/bozchron',
        instagramFollowers: '25K',
        instagramUrl: 'https://www.instagram.com/bozemandailychronicle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Great Falls Tribune',
        description: 'The daily newspaper serving Great Falls and north-central Montana.',
        websiteUrl: 'https://www.greatfallstribune.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/greatfallstribune',
        xFollowers: '35K',
        xUrl: 'https://twitter.com/GFTribune',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/greatfallstribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Montana Standard (Butte)',
        description: 'A daily newspaper for Butte and southwestern Montana.',
        websiteUrl: 'https://mtstandard.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/mtstandard',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/mtstandard',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/themontanastandard/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Independent Record (Helena)',
        description: 'The daily newspaper for Helena, the state capital.',
        websiteUrl: 'https://helenair.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/helenair',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/helenaironline',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/helenaironline/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Montana Public Radio (MTPR)',
        description: 'NPR member station providing news and cultural programming for western Montana.',
        websiteUrl: 'https://www.mtpr.org/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/MontanaPublicRadio',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/mtpublicradio',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/montanapublicradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'Yellowstone Public Radio',
        description: 'NPR member station based in Billings, serving central and eastern Montana.',
        websiteUrl: 'https://www.ypradio.org/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/yprmain',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/ypradio',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/yellowstonepublicradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'KULR-8 (Billings)',
        description: 'NBC affiliate providing news and weather for the Billings area.',
        websiteUrl: 'https://www.kulr8.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/kulr8',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/kulr8news',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/kulr8news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KPAX (Missoula)',
        description: 'CBS affiliate serving Missoula and Western Montana.',
        websiteUrl: 'https://www.kpax.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/kpaxnews',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/kpaxnews',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/kpaxnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KRTV (Great Falls)',
        description: 'CBS affiliate for Great Falls and north-central Montana.',
        websiteUrl: 'https://www.krtv.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/krtv.news',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/krtv',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/krtv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KXLF (Butte)',
        description: 'CBS affiliate serving Butte and southwestern Montana.',
        websiteUrl: 'https://www.kxlf.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/kxlfnews',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/kxlf',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/kxlfnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KBZK (Bozeman)',
        description: 'CBS affiliate for Bozeman and Gallatin County.',
        websiteUrl: 'https://www.kbzk.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/kbzk7',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/kbzk',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/kbzk7/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KTVH (Helena)',
        description: 'NBC affiliate serving the Helena area.',
        websiteUrl: 'https://www.ktvh.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/ktvhnews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/ktvh',
        instagramFollowers: '4K',
        instagramUrl: 'https://www.instagram.com/ktvhnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Montana Free Press',
        description: 'A nonprofit news organization that produces in-depth, public service journalism.',
        websiteUrl: 'https://montanafreepress.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/montanafreepress',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/mtfreepress',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/montanafreepress/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Daily Inter Lake',
        description: 'A daily newspaper for Kalispell and the Flathead Valley.',
        websiteUrl: 'https://www.dailyinterlake.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/dailyinterlake',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/dailyinterlake',
        instagramFollowers: '4K',
        instagramUrl: 'https://www.instagram.com/dailyinterlake/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Ravalli Republic',
        description: 'A newspaper serving Hamilton and Ravalli County.',
        websiteUrl: 'https://ravallirepublic.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/ravallirepublic',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/ravallirepublic',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/ravallirepublic/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Livingston Enterprise',
        description: 'A newspaper serving Livingston and Park County.',
        websiteUrl: 'https://www.livingstonenterprise.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/livententerprise',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/liventnews',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/livingstonenterprise/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Havre Daily News',
        description: 'The daily newspaper for Havre and the Hi-Line region.',
        websiteUrl: 'https://www.havredailynews.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/havredailynews',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/havredailynews',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Lewistown News-Argus',
        description: 'A newspaper serving Lewistown and Fergus County.',
        websiteUrl: 'https://www.lewistownnews.com/',
        facebookFollowers: '8K',
        facebookUrl: 'https://www.facebook.com/lewistownnewsargus',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/newsargus',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Miles City Star',
        description: 'A daily newspaper for Miles City and southeastern Montana.',
        websiteUrl: 'https://www.milescitystar.com/',
        facebookFollowers: '8K',
        facebookUrl: 'https://www.facebook.com/milescitystar',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/milescitystar',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Sidney Herald',
        description: 'A newspaper serving Sidney and Richland County.',
        websiteUrl: 'https://www.sidneyherald.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/sidneyherald',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/sidneyherald',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/sidneyherald/',
        type: 'Newspaper',
        country: 'USA'
    }
];
