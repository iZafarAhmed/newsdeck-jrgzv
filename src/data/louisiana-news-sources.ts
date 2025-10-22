
export interface LouisianaNewsSource {
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

export const louisianaNewsSources: LouisianaNewsSource[] = [
    {
        name: 'The Advocate',
        description: 'The largest daily newspaper in Louisiana, covering Baton Rouge, New Orleans, and Acadiana.',
        websiteUrl: 'https://www.theadvocate.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/theadvocatebr',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/theadvocatebr',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/theadvocateno/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Times-Picayune | The New Orleans Advocate',
        description: 'The most comprehensive news source for the New Orleans metro area.',
        websiteUrl: 'https://www.nola.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/nolanews',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/nolanews',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/nolanews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WDSU News',
        description: 'NBC affiliate in New Orleans, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wdsu.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/wdsutv',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wdsu',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/wdsu6/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WWL-TV',
        description: 'CBS affiliate serving the New Orleans area.',
        websiteUrl: 'https://www.wwltv.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wwltv',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/wwltv',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/wwltv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WBRZ Channel 2',
        description: 'ABC affiliate for Baton Rouge and the surrounding areas.',
        websiteUrl: 'https://www.wbrz.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/wbrztv',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wbrz',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wbrz/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Daily Advertiser',
        description: 'A daily newspaper serving Lafayette and the Acadiana region.',
        websiteUrl: 'https://www.theadvertiser.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/theadvertiser',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/theadvertiser',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/theadvertiserlafayette/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The News-Star (Monroe)',
        description: 'The daily newspaper for Monroe and northeastern Louisiana.',
        websiteUrl: 'https://www.thenewsstar.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/thenewsstar',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/thenewsstar',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/thenewsstar/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Times (Shreveport)',
        description: 'A daily newspaper serving Shreveport and the Ark-La-Tex region.',
        websiteUrl: 'https://www.shreveporttimes.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/shreveporttimes',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/shrevtimes',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/shreveporttimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Gambit',
        description: 'New Orleans\' alternative weekly newspaper.',
        websiteUrl: 'https://www.nola.com/gambit/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/gambitneworleans',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/gambitneworleans',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/gambitneworleans/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'American Press (Lake Charles)',
        description: 'The daily newspaper for Lake Charles and Southwest Louisiana.',
        websiteUrl: 'https://www.americanpress.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/americanpress',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/americanpress',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/americanpress/',
        type: 'Newspaper',
        country: 'USA'
    }
];
