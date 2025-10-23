
export interface TennesseeNewsSource {
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

export const tennesseeNewsSources: TennesseeNewsSource[] = [
    {
        name: 'The Tennessean',
        description: 'The principal daily newspaper in Nashville, Tennessee.',
        websiteUrl: 'https://www.tennessean.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/tennessean',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/tennessean',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/tennessean/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Commercial Appeal',
        description: 'A daily newspaper serving Memphis and the surrounding area.',
        websiteUrl: 'https://www.commercialappeal.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/commercialappeal',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/memphisnews',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/commercialappeal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Knoxville News Sentinel',
        description: 'The daily newspaper for Knoxville and East Tennessee.',
        websiteUrl: 'https://www.knoxnews.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/knoxnews',
        xFollowers: '180K',
        xUrl: 'https://twitter.com/knoxnews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/knoxvillephoto/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Chattanooga Times Free Press',
        description: 'A daily newspaper serving Chattanooga and southeastern Tennessee.',
        websiteUrl: 'https://www.timesfreepress.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/timesfreepress',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/timesfreepress',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/timesfreepress/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WSMV4 (NBC)',
        description: 'NBC affiliate in Nashville, providing local news, weather, and investigative reporting.',
        websiteUrl: 'https://www.wsmv.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/wsmv4',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wsmv',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/wsmvtv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WKRN News 2 (ABC)',
        description: 'ABC affiliate for Nashville and Middle Tennessee.',
        websiteUrl: 'https://www.wkrn.com/',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/wkrn.nashville',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/wkrn',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wkrntv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WTVF-TV (NewsChannel 5)',
        description: 'CBS affiliate serving Nashville and Middle Tennessee.',
        websiteUrl: 'https://www.newschannel5.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/newschannel5',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/newschannel5',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/newschannel5/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WREG News Channel 3',
        description: 'CBS affiliate for Memphis and the Mid-South.',
        websiteUrl: 'https://wreg.com/',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/wreg3',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wreg',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/wreg3/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WATE 6 On Your Side',
        description: 'ABC affiliate serving Knoxville and East Tennessee.',
        websiteUrl: 'https://www.wate.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/wate6onyourside',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/wate6onyourside',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/wate6onyourside/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WVLT',
        description: 'CBS affiliate for Knoxville.',
        websiteUrl: 'https://www.wvlt.tv/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/wvlt.tv',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wvlt',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/wvlt/',
        type: 'Broadcasting',
        country: 'USA'
    }
];
