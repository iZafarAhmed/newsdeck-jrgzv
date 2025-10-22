
export interface NewYorkNewsSource {
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

export const newYorkNewsSources: NewYorkNewsSource[] = [
    {
        name: 'The New York Times',
        description: 'An American daily newspaper based in New York City with a worldwide readership.',
        websiteUrl: 'https://www.nytimes.com/',
        facebookFollowers: '20.9M',
        facebookUrl: 'https://www.facebook.com/nytimes',
        xFollowers: '55.1M',
        xUrl: 'https://twitter.com/nytimes',
        instagramFollowers: '19.4M',
        instagramUrl: 'https://www.instagram.com/nytimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'New York Post',
        description: 'A conservative daily tabloid newspaper in New York City.',
        websiteUrl: 'https://nypost.com/',
        facebookFollowers: '6.5M',
        facebookUrl: 'https://www.facebook.com/NewYorkPost',
        xFollowers: '3.5M',
        xUrl: 'https://twitter.com/nypost',
        instagramFollowers: '1.8M',
        instagramUrl: 'https://www.instagram.com/nypost/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'New York Daily News',
        description: 'A daily newspaper based in New York City.',
        websiteUrl: 'https://www.nydailynews.com/',
        facebookFollowers: '3.6M',
        facebookUrl: 'https://www.facebook.com/nydailynews',
        xFollowers: '771.9K',
        xUrl: 'https://twitter.com/NYDailyNews',
        instagramFollowers: '163.5K',
        instagramUrl: 'https://www.instagram.com/nydailynews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WABC-TV (ABC 7)',
        description: 'ABC-owned television station in New York City.',
        websiteUrl: 'https://abc7ny.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/ABC7NY',
        xFollowers: '1.1M',
        xUrl: 'https://twitter.com/abc7ny',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/abc7ny/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WNBC (NBC 4 New York)',
        description: 'NBC-owned television station licensed to New York City.',
        websiteUrl: 'https://www.nbcnewyork.com/',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/NBCNewYork',
        xFollowers: '356.9K',
        xUrl: 'https://twitter.com/NBCNewYork',
        instagramFollowers: '340.3K',
        instagramUrl: 'https://www.instagram.com/nbcnewyork/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WCBS-TV (CBS 2)',
        description: 'CBS-owned television station in New York City.',
        websiteUrl: 'https://www.cbsnews.com/newyork/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/CBSNewYork',
        xFollowers: '201.4K',
        xUrl: 'https://twitter.com/CBSNewYork',
        instagramFollowers: '164.7K',
        instagramUrl: 'https://www.instagram.com/cbsnewyork/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WNYW (FOX 5 NY)',
        description: 'Fox-owned television station serving New York City.',
        websiteUrl: 'https://www.fox5ny.com/',
        facebookFollowers: '2.8M',
        facebookUrl: 'https://www.facebook.com/fox5ny',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/fox5ny',
        instagramFollowers: '600K',
        instagramUrl: 'https://www.instagram.com/fox5ny/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Newsday',
        description: 'A daily newspaper that primarily serves Nassau and Suffolk counties on Long Island.',
        websiteUrl: 'https://www.newsday.com/',
        facebookFollowers: '686K',
        facebookUrl: 'https://www.facebook.com/Newsday',
        xFollowers: '315.4K',
        xUrl: 'https://twitter.com/newsday',
        instagramFollowers: '102.2K',
        instagramUrl: 'https://www.instagram.com/newsday/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Gothamist',
        description: 'A website about New York City news, arts, events, and food.',
        websiteUrl: 'https://gothamist.com/',
        facebookFollowers: '284K',
        facebookUrl: 'https://www.facebook.com/Gothamist',
        xFollowers: '976.8K',
        xUrl: 'https://twitter.com/gothamist',
        instagramFollowers: '344.3K',
        instagramUrl: 'https://www.instagram.com/gothamist/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Buffalo News',
        description: 'The leading newspaper for Buffalo and the Western New York region.',
        websiteUrl: 'https://buffalonews.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/thebuffalonews',
        xFollowers: '220K',
        xUrl: 'https://twitter.com/thebuffalonews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/thebuffalonews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Democrat and Chronicle (Rochester)',
        description: 'A daily newspaper serving Rochester and the Finger Lakes region.',
        websiteUrl: 'https://www.democratandchronicle.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/democratandchronicle',
        xFollowers: '130K',
        xUrl: 'https://twitter.com/dandc',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/democratandchronicle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Post-Standard (Syracuse)',
        description: 'A daily newspaper serving Syracuse and Central New York.',
        websiteUrl: 'https://www.syracuse.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/syracusedotcom',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/syracusedotcom',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/syracusedotcom/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Times Union (Albany)',
        description: 'The daily newspaper for Albany, the state capital.',
        websiteUrl: 'https://www.timesunion.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/albanytimesunion',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/timesunion',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/albanytimesunion/',
        type: 'Newspaper',
        country: 'USA'
    }
];
