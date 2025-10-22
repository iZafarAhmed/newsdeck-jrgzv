
export interface MississippiNewsSource {
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

export const mississippiNewsSources: MississippiNewsSource[] = [
    {
        name: 'The Clarion-Ledger',
        description: 'The largest newspaper in Mississippi, covering Jackson and statewide news.',
        websiteUrl: 'https://www.clarionledger.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/clarionledger',
        xFollowers: '180K',
        xUrl: 'https://twitter.com/clarionledger',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/clarionledger/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WAPT',
        description: 'ABC affiliate in Jackson, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wapt.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/16wapt',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/16wapt',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/16waptnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WJTV 12 News',
        description: 'CBS affiliate serving the Jackson metropolitan area.',
        websiteUrl: 'https://www.wjtv.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/WJTV12',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wjtv',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/wjtv12/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WLBT',
        description: 'NBC affiliate for Jackson and central Mississippi.',
        websiteUrl: 'https://www.wlbt.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wlbt3onyourside',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wlbt',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/wlbt3onyourside/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Mississippi Today',
        description: 'A nonprofit news organization that provides in-depth reporting on public policy and community issues.',
        websiteUrl: 'https://mississippitoday.org/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/mstoday',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/mstodaynews',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/mississippitoday/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'The Sun Herald (Biloxi-Gulfport)',
        description: 'The daily newspaper for the Mississippi Gulf Coast.',
        websiteUrl: 'https://www.sunherald.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/sunherald',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/sunherald',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/sunherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WLOX',
        description: 'ABC affiliate serving the Mississippi Gulf Coast.',
        websiteUrl: 'https://www.wlox.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/wlox',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wlox',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/wloxtv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Daily Journal (Tupelo)',
        description: 'The daily newspaper for Tupelo and northeast Mississippi.',
        websiteUrl: 'https://www.djournal.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/nemsdailynews',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/nedjournal',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/djournalnow/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Commercial Dispatch (Columbus)',
        description: 'A daily newspaper serving the Golden Triangle region.',
        websiteUrl: 'https://www.cdispatch.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/cdispatch',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/cdispatch',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/cdispatch/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Hattiesburg American',
        description: 'The daily newspaper for Hattiesburg and the Pine Belt.',
        websiteUrl: 'https://www.hattiesburgamerican.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/hattiesburgamerican',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/hattiesburgnews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/hattiesburgamerican/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Mississippi Public Broadcasting (MPB)',
        description: 'The NPR and PBS member station for Mississippi.',
        websiteUrl: 'https://www.mpbonline.org/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/mpbonline',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/mpbonline',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/mpbonline/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'The Vicksburg Post',
        description: 'A daily newspaper serving Vicksburg and Warren County.',
        websiteUrl: 'https://www.vicksburgpost.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/vicksburgpost',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/vicksburgpost',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/vicksburgpost/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Meridian Star',
        description: 'The daily newspaper for Meridian and Lauderdale County.',
        websiteUrl: 'https://www.meridianstar.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/meridianstar',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/meridianstar',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/themeridianstar/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Oxford Eagle',
        description: 'A daily newspaper serving Oxford and Lafayette County.',
        websiteUrl: 'https://www.oxfordeagle.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/theoxfordeagle',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/oxfordeagle',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/theoxfordeagle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Natchez Democrat',
        description: 'A daily newspaper serving Natchez and Adams County.',
        websiteUrl: 'https://www.natchezdemocrat.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/natchezdemocrat',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/natchezdemocrat',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/natchezdemocrat/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WXXV 25',
        description: 'NBC and Fox affiliate for the Mississippi Gulf Coast.',
        websiteUrl: 'https://www.wxxv25.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/wxxv25',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/wxxv25',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/wxxv25/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WDAM 7',
        description: 'NBC affiliate serving the Hattiesburg and Pine Belt area.',
        websiteUrl: 'https://www.wdam.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/wdam7',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/wdam',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/wdam7/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WTVA',
        description: 'NBC affiliate for Tupelo and northeast Mississippi.',
        websiteUrl: 'https://www.wtva.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/wtva9news',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/wtvanews',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/wtva9news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Greenwood Commonwealth',
        description: 'A daily newspaper serving Greenwood and the Mississippi Delta.',
        websiteUrl: 'https://www.gwcommonwealth.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/gwcommonwealth',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/gwcommonwealth',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/greenwoodcommonwealth/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Delta Democrat-Times',
        description: 'A newspaper serving Greenville and the Mississippi Delta.',
        websiteUrl: 'https://www.ddtonline.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/ddtonline',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/ddtonline',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    }
];

    