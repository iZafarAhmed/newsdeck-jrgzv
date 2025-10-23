
export interface OhioNewsSource {
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

export const ohioNewsSources: OhioNewsSource[] = [
    {
        name: 'The Columbus Dispatch',
        description: 'The daily newspaper for Columbus, the state capital of Ohio.',
        websiteUrl: 'https://www.dispatch.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/columbusdispatch',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/DispatchAlerts',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/columbusdispatch/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Plain Dealer (Cleveland)',
        description: 'The major daily newspaper of Cleveland and Northeast Ohio.',
        websiteUrl: 'https://www.cleveland.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/clevelandcom',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/clevelanddotcom',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/clevelanddotcom/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Cincinnati Enquirer',
        description: 'The daily newspaper for Cincinnati and the surrounding area in Ohio and Northern Kentucky.',
        websiteUrl: 'https://www.cincinnati.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/CincinnatiEnquirer',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/enquirer',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/cincinnatienquirer/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Dayton Daily News',
        description: 'A daily newspaper serving Dayton and the Miami Valley.',
        websiteUrl: 'https://www.daytondailynews.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/daytondailynews',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/daytondailynews',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/daytondailynews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Akron Beacon Journal',
        description: 'The daily newspaper of Akron, Ohio.',
        websiteUrl: 'https://www.beaconjournal.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/beaconjournal',
        xFollowers: '70K',
        xUrl: 'https://twitter.com/beaconjournal',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/beaconjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Blade (Toledo)',
        description: 'A daily newspaper serving Toledo and northwest Ohio.',
        websiteUrl: 'https://www.toledoblade.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/toledoblade',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/toledoblade',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/thetoledoblade/',
        type: 'Newspaper',
        country: 'USA'
    }
];
