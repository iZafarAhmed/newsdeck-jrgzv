
export interface MichiganNewsSource {
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

export const michiganNewsSources: MichiganNewsSource[] = [
    {
        name: 'Detroit Free Press',
        description: 'The largest daily newspaper in Detroit, Michigan, with a focus on local news, sports, and investigative journalism.',
        websiteUrl: 'https://www.freep.com/',
        facebookFollowers: '550K',
        facebookUrl: 'https://www.facebook.com/freep',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/freep',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/freep/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Detroit News',
        description: 'A major daily newspaper serving the Detroit metropolitan area.',
        websiteUrl: 'https://www.detroitnews.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/detroitnews',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/detroitnews',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/detroitnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WDIV Local 4',
        description: 'NBC affiliate in Detroit, providing local news, weather, and sports.',
        websiteUrl: 'https://www.clickondetroit.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/Local4',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/local4news',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/local4news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WXYZ-TV Channel 7',
        description: 'ABC affiliate serving the Detroit area.',
        websiteUrl: 'https://www.wxyz.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/wxyzdetroit',
        xFollowers: '700K',
        xUrl: 'https://twitter.com/wxyzdetroit',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/wxyzdetroit/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'FOX 2 Detroit',
        description: 'Fox affiliate in Detroit, providing news and entertainment.',
        websiteUrl: 'https://www.fox2detroit.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/wjbkfox2detroit',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/fox2detroit',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/fox2detroit/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Grand Rapids Press (MLive)',
        description: 'A daily newspaper serving Grand Rapids and Western Michigan, part of the MLive Media Group.',
        websiteUrl: 'https://www.mlive.com/grand-rapids/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/grandrapidspress',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/grpress',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/grpress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Flint Journal (MLive)',
        description: 'A daily newspaper serving Flint and Genesee County.',
        websiteUrl: 'https://www.mlive.com/flint/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/flintjournal',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/flintjournal',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/flintjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Ann Arbor News (MLive)',
        description: 'A newspaper serving Ann Arbor and Washtenaw County.',
        websiteUrl: 'https://www.mlive.com/ann-arbor/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/annarbornews',
        xFollowers: '70K',
        xUrl: 'https://twitter.com/annarbornews',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/annarbornews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Lansing State Journal',
        description: 'The daily newspaper for Lansing, the state capital.',
        websiteUrl: 'https://www.lansingstatejournal.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/lansingstatejournal',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/lsjnews',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/lsjnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Detroit Metro Times',
        description: 'An alternative weekly newspaper in Detroit.',
        websiteUrl: 'https://www.metrotimes.com/',
        facebookFollowers: '125K',
        facebookUrl: 'https://www.facebook.com/metrodetroit',
        xFollowers: '91.9K',
        xUrl: 'https://twitter.com/metrotimes',
        instagramFollowers: '95K',
        instagramUrl: 'https://www.instagram.com/detroitmetrotimes/',
        type: 'Newspaper',
        country: 'USA'
    }
];
