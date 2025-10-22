
export interface IdahoNewsSource {
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

export const idahoNewsSources: IdahoNewsSource[] = [
    {
        name: 'Idaho Statesman',
        description: 'The largest newspaper in Idaho, covering Boise and statewide news.',
        websiteUrl: 'https://www.idahostatesman.com/',
        facebookFollowers: '125K',
        facebookUrl: 'https://www.facebook.com/idahostatesman',
        xFollowers: '115K',
        xUrl: 'https://twitter.com/idahostatesman',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/idahostatesman/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KTVB',
        description: 'NBC affiliate in Boise, providing local news, weather, and sports.',
        websiteUrl: 'https://www.ktvb.com/',
        facebookFollowers: '450K',
        facebookUrl: 'https://www.facebook.com/KTVB7',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/KTVB',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/ktvb7/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KBOI',
        description: 'CBS affiliate serving the Boise area.',
        websiteUrl: 'https://idahonews.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/CBS2Boise',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/cbs2boise',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/cbs2boise/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Idaho Press-Tribune',
        description: 'A daily newspaper serving Canyon County and the Treasure Valley.',
        websiteUrl: 'https://www.idahopress.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/idahopress',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/idahopress',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/idahopress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Boise State Public Radio',
        description: 'NPR member station providing news and information for Idaho.',
        websiteUrl: 'https://www.boisestatepublicradio.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/BoiseStatePublicRadio',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/boisestateradio',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/boisestatepublicradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'Idaho Capital Sun',
        description: 'A nonprofit news organization covering state government and policy.',
        websiteUrl: 'https://idahocapitalsun.com/',
        facebookFollowers: '8K',
        facebookUrl: 'https://www.facebook.com/idahocapitalsun',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/idahocapitalsun',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/idahocapitalsun/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'EastIdahoNews.com',
        description: 'An online news source for eastern Idaho.',
        websiteUrl: 'https://www.eastidahonews.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/EastIdahoNews',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/eastidahonews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/eastidahonews/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'Post Register',
        description: 'A daily newspaper serving Idaho Falls and eastern Idaho.',
        websiteUrl: 'https://www.postregister.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/postregister',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/postregister',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/postregister/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Coeur d\'Alene Press',
        description: 'The daily newspaper for Coeur d\'Alene and Kootenai County.',
        websiteUrl: 'https://cdapress.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/cdapress',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/cdapress',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/cdapress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Times-News',
        description: 'A daily newspaper serving Twin Falls and the Magic Valley.',
        websiteUrl: 'https://magicvalley.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/magicvalley',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/magicvalley',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/magicvalley.com_/',
        type: 'Newspaper',
        country: 'USA'
    }
];
