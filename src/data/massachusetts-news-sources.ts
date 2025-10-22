
export interface MassachusettsNewsSource {
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

export const massachusettsNewsSources: MassachusettsNewsSource[] = [
    {
        name: 'The Boston Globe',
        description: 'The largest newspaper in Boston, with extensive coverage of New England.',
        websiteUrl: 'https://www.bostonglobe.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/bostonglobe',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/bostonglobe',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/bostonglobe/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WCVB Channel 5',
        description: 'ABC affiliate in Boston, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wcvb.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/wcvb5',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/wcvb',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/wcvb5/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WHDH 7News',
        description: 'An independent television station in Boston.',
        websiteUrl: 'https://whdh.com/',
        facebookFollowers: '527.7K',
        facebookUrl: 'https://www.facebook.com/7news',
        xFollowers: '364.8K',
        xUrl: 'https://twitter.com/7news',
        instagramFollowers: '111.4K',
        instagramUrl: 'https://www.instagram.com/7news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WBZ-TV (CBS Boston)',
        description: 'CBS-owned television station in Boston.',
        websiteUrl: 'https://www.cbsnews.com/boston/',
        facebookFollowers: '771.4K',
        facebookUrl: 'https://www.facebook.com/cbsboston',
        xFollowers: '238K',
        xUrl: 'https://twitter.com/wbz',
        instagramFollowers: '89K',
        instagramUrl: 'https://www.instagram.com/cbstvboston/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'NBC10 Boston',
        description: 'NBC affiliate serving the Boston area.',
        websiteUrl: 'https://www.nbcboston.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/nbc10boston',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/nbc10boston',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/nbc10boston/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Boston Herald',
        description: 'A major daily newspaper in Boston.',
        websiteUrl: 'https://www.bostonherald.com/',
        facebookFollowers: '158K',
        facebookUrl: 'https://www.facebook.com/bostonherald',
        xFollowers: '145K',
        xUrl: 'https://twitter.com/bostonherald',
        instagramFollowers: '19.5K',
        instagramUrl: 'https://www.instagram.com/bostonherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Boston.com',
        description: 'A digital news source from The Boston Globe covering local news and culture.',
        websiteUrl: 'https://www.boston.com/',
        facebookFollowers: '470K',
        facebookUrl: 'https://www.facebook.com/BostonDotCom',
        xFollowers: '459.6K',
        xUrl: 'https://twitter.com/BostonDotCom',
        instagramFollowers: '495.9K',
        instagramUrl: 'https://www.instagram.com/boston.com/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Republican (Springfield)',
        description: 'The daily newspaper for Springfield and western Massachusetts.',
        websiteUrl: 'https://www.masslive.com/republican/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/TheRepublican',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/republicannews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/therepublicannews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Telegram & Gazette (Worcester)',
        description: 'A daily newspaper serving Worcester and central Massachusetts.',
        websiteUrl: 'https://www.telegram.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/telegramdotcom',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/telegramdotcom',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/telegramdotcom/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WBUR',
        description: 'Boston\'s NPR news station.',
        websiteUrl: 'https://www.wbur.org/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/wbur',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/wbur',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/wbur/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'GBH News',
        description: 'The news division of the PBS member station in Boston.',
        websiteUrl: 'https://www.wgbh.org/news',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/gbhnews',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/gbhnews',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/gbhnews/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Cape Cod Times',
        description: 'The daily newspaper for Cape Cod.',
        websiteUrl: 'https://www.capecodtimes.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/capecodtimes',
        xFollowers: '70K',
        xUrl: 'https://twitter.com/capecodtimes',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/capecodtimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Berkshire Eagle',
        description: 'A daily newspaper serving Berkshire County.',
        websiteUrl: 'https://www.berkshireeagle.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/berkshireeagle',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/berkshireeagle',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/theberkshireeagle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Salem News',
        description: 'A daily newspaper for Salem and the North Shore.',
        websiteUrl: 'https://www.salemnews.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/TheSalemNews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/salemnews',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/thesalemnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Daily Hampshire Gazette',
        description: 'A newspaper serving Northampton and Hampshire County.',
        websiteUrl: 'https://www.gazettenet.com/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/dailyhampshiregazette',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/dailyhampgaz',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/dailyhampshiregazette/',
        type: 'Newspaper',
        country: 'USA'
    }
];
