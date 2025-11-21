export interface WrestlingNewsSource {
    name: string;
    description: string;
    websiteUrl: string;
    facebookFollowers: string;
    facebookUrl: string;
    xFollowers: string;
    xUrl: string;
    instagramFollowers: string | null;
    instagramUrl: string | null;
    type: string;
    country: string;
}

export const wrestlingNewsSources: WrestlingNewsSource[] = [
    {
        name: 'Fightful',
        description: 'Fightful.com is a fast-growing combat sports news and media outlet, providing news, analysis, and interviews.',
        websiteUrl: 'https://www.fightful.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/FightfulOnline/',
        xFollowers: '190K',
        xUrl: 'https://twitter.com/fightful',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/fightfulonline/',
        type: 'Wrestling News',
        country: 'USA'
    },
    {
        name: 'Wrestling Observer Newsletter',
        description: 'Providing the most inside pro wrestling and MMA news and analysis since 1982.',
        websiteUrl: 'https://www.f4wonline.com/',
        facebookFollowers: '130K',
        facebookUrl: 'https://www.facebook.com/WrestlingObserver/',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/WONF4W',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/f4wonline/',
        type: 'Wrestling News',
        country: 'USA'
    },
    {
        name: 'PWInsider',
        description: 'An online professional wrestling news and information website, providing updates and reports.',
        websiteUrl: 'https://www.pwinsider.com/',
        facebookFollowers: '85K',
        facebookUrl: 'https://www.facebook.com/PWInsider/',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/pwinsidercom',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Wrestling News',
        country: 'USA'
    }
];