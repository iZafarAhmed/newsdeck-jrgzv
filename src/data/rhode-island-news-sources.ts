
export interface RhodeIslandNewsSource {
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

export const rhodeIslandNewsSources: RhodeIslandNewsSource[] = [
    {
        name: 'The Providence Journal',
        description: 'The largest newspaper in Rhode Island, covering Providence and the entire state.',
        websiteUrl: 'https://www.providencejournal.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/providencejournal',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/projo',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/providencejournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WPRI 12',
        description: 'CBS affiliate in Providence, providing local news, weather, and investigative reporting.',
        websiteUrl: 'https://www.wpri.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/wpri12',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/wpri12',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/wpri12/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WJAR (NBC 10)',
        description: 'NBC affiliate serving Providence and southern New England.',
        websiteUrl: 'https://turnto10.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/turnto10',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/turnto10',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/turnto10/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WLNE-TV (ABC 6)',
        description: 'ABC affiliate for Providence and New Bedford, MA.',
        websiteUrl: 'https://www.abc6.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/abc6providence',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/abc6',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/abc6news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Public\'s Radio',
        description: 'The NPR member station for Rhode Island and southeastern Massachusetts.',
        websiteUrl: 'https://thepublicsradio.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/thepublicsradio',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/thepublicsradio',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/thepublicsradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Newport Daily News',
        description: 'A daily newspaper serving Newport County.',
        websiteUrl: 'https://www.newportri.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/NewportDailyNews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/TheNewportDaily',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/newportdailynews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Westerly Sun',
        description: 'A daily newspaper serving southern Rhode Island and southeastern Connecticut.',
        websiteUrl: 'https://www.thewesterlysun.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/thewesterlysun',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/thewesterlysun',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/thewesterlysun/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Rhode Island Monthly',
        description: 'A monthly magazine covering life, style, and culture in Rhode Island.',
        websiteUrl: 'https://www.rimonthly.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/rimonthly',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/rimonthly',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/rimonthly/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'Providence Business News',
        description: 'The leading source for business news in Rhode Island.',
        websiteUrl: 'https://pbn.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/providencebusinessnews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/pbn',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/providencebusinessnews/',
        type: 'Business News',
        country: 'USA'
    },
    {
        name: 'Uprise RI',
        description: 'A progressive news source focusing on social justice and grassroots activism.',
        websiteUrl: 'https://upriseri.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/upriseri',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/upriseri',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/upriseri/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'GoLocalProv',
        description: 'An online news and information site for Providence.',
        websiteUrl: 'https://www.golocalprov.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/golocalprov',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/golocalprov',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/golocalprov/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Rhode Island Current',
        description: 'A nonprofit news outlet covering state government and policy.',
        websiteUrl: 'https://rhodeislandcurrent.com/',
        facebookFollowers: '3K',
        facebookUrl: 'https://www.facebook.com/RhodeIslandCurrent',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/RICurrent',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/rhodeislandcurrent/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'What\'s Up Newp',
        description: 'An independent news source for Newport, Rhode Island.',
        websiteUrl: 'https://whatsupnewp.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/whatsupnewp',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/whatsupnewp',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/whatsupnewp/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Brown Daily Herald',
        description: 'The student newspaper of Brown University.',
        websiteUrl: 'https://www.browndailyherald.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/browndailyherald',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/the_herald',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/browndailyherald/',
        type: 'University',
        country: 'USA'
    }
];
