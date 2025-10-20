
export interface HindiNewsSource {
    name: string;
    description: string;
    websiteUrl: string;
    facebookFollowers: string;
    xFollowers: string;
    instagramFollowers: string;
    type: string;
    country: string;
}

export const hindiNewsSources: HindiNewsSource[] = [
    {
        name: 'Aaj Tak',
        description: "Aaj Tak stands steadfast as India's undisputed number one news channel and the undisputed leader ever since its launch. It covers breaking news, latest news in politics...",
        websiteUrl: 'https://www.aajtak.in/',
        facebookFollowers: '38M',
        xFollowers: '23.7M',
        instagramFollowers: '16.8M',
        type: 'Media Outlet',
        country: 'India'
    },
    {
        name: 'NDTV',
        description: 'NDTV.in provides the latest news in Hindi, focusing on India and international events. The site includes sections on politics, business, sports, entertainment, technology, and more.',
        websiteUrl: 'https://ndtv.in/',
        facebookFollowers: '8.1M',
        xFollowers: '4.3M',
        instagramFollowers: '2.3M',
        type: 'Media Outlet',
        country: 'India'
    },
    {
        name: 'Jagran',
        description: 'Jagran delivers the latest news in Hindi, covering national and international events. The site includes sections on politics, business, sports, entertainment, lifestyle, and tech.',
        websiteUrl: 'https://www.jagran.com/',
        facebookFollowers: '15.8M',
        xFollowers: '2.3M',
        instagramFollowers: 'N/A',
        type: 'Media Outlet',
        country: 'India'
    },
];
