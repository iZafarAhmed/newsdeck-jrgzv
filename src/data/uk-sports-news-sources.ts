
export interface UKSportsNewsSource {
    name: string;
    description: string;
    websiteUrl: string;
    facebookFollowers: string;
    facebookUrl: string;
    xFollowers: string;
    xUrl: string;
    instagramFollowers: string;
    instagramUrl: string;
    type: string;
}

export const ukSportsNewsSources: UKSportsNewsSource[] = [
    {
        name: 'BBC Sport',
        description: 'Latest sports news, transfers, scores, results and videos from BBC Sport.',
        websiteUrl: 'https://www.bbc.co.uk/sport',
        facebookFollowers: '14M',
        facebookUrl: 'https://www.facebook.com/BBCSport/',
        xFollowers: '12.4M',
        xUrl: 'https://twitter.com/BBCSport',
        instagramFollowers: '5M',
        instagramUrl: 'https://www.instagram.com/bbc_sport/',
        type: 'Blog'
    },
    {
        name: 'Sky Sports',
        description: 'The latest football, tennis, golf, cricket, F1, rugby, boxing, NFL, darts and transfer news.',
        websiteUrl: 'https://www.skysports.com/',
        facebookFollowers: '14M',
        facebookUrl: 'https://www.facebook.com/SkySports/',
        xFollowers: '8.1M',
        xUrl: 'https://twitter.com/SkySports',
        instagramFollowers: '4.2M',
        instagramUrl: 'https://www.instagram.com/skysports/',
        type: 'Blog'
    },
    {
        name: 'The Guardian',
        description: 'Latest sport news and live results from the Guardian.',
        websiteUrl: 'https://www.theguardian.com/uk/sport',
        facebookFollowers: '8.5M',
        facebookUrl: 'https://www.facebook.com/GuardianSport/',
        xFollowers: '10.9M',
        xUrl: 'https://twitter.com/Guardian_Sport',
        instagramFollowers: '6.4M',
        instagramUrl: 'https://www.instagram.com/guardian/',
        type: 'Blog'
    },
    {
        name: 'Mail Online Sport',
        description: 'Breaking news and opinion from the Daily Mail and Mail on Sunday.',
        websiteUrl: 'https://www.dailymail.co.uk/sport/index.html',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/MailOnlineSport/',
        xFollowers: '845.2K',
        xUrl: 'https://twitter.com/MailSport',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    },
    {
        name: 'The Telegraph',
        description: 'The latest sport news, comment, analysis and interviews from The Telegraph.',
        websiteUrl: 'https://www.telegraph.co.uk/sport/',
        facebookFollowers: '725K',
        facebookUrl: 'https://www.facebook.com/TelegraphSport',
        xFollowers: '870.3K',
        xUrl: 'https://twitter.com/TelegraphSport',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    },
    {
        name: 'The Times & The Sunday Times',
        description: 'Football, Rugby, Golf, Cricket, F1, Boxing, Olympics and more.',
        websiteUrl: 'https://www.thetimes.co.uk/sport',
        facebookFollowers: '1.4M',
        facebookUrl: 'https://www.facebook.com/thetimes',
        xFollowers: '1.9M',
        xUrl: 'https://twitter.com/thetimes',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    },
    {
        name: 'Independent',
        description: 'Sports news from the Independent, covering the latest in football, cricket, rugby, F1, tennis, golf and more.',
        websiteUrl: 'https://www.independent.co.uk/sport',
        facebookFollowers: '9.2M',
        facebookUrl: 'https://www.facebook.com/TheIndependentSport/',
        xFollowers: '3.6M',
        xUrl: 'https://twitter.com/IndySport',
        instagramFollowers: '1.2M',
        instagramUrl: 'https://www.instagram.com/the.independent/',
        type: 'Blog'
    },
    {
        name: 'The Sun',
        description: 'Sports news, videos, fixtures and results from The Sun.',
        websiteUrl: 'https://www.thesun.co.uk/sport/',
        facebookFollowers: '2.8M',
        facebookUrl: 'https://www.facebook.com/TheSunSport/',
        xFollowers: '1.9M',
        xUrl: 'https://twitter.com/TheSunSport',
        instagramFollowers: '536K',
        instagramUrl: 'https://www.instagram.com/thesun/',
        type: 'Blog'
    },
    {
        name: 'Metro',
        description: 'Up-to-the-minute sports news from Metro.',
        websiteUrl: 'https://metro.co.uk/sport/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/MetroUK',
        xFollowers: '419.6K',
        xUrl: 'https://twitter.com/MetroUK',
        instagramFollowers: '269K',
        instagramUrl: 'https://www.instagram.com/metro.co.uk/',
        type: 'Blog'
    },
    {
        name: 'The Express',
        description: 'Sports news, results, and fixtures from the Express.',
        websiteUrl: 'https://www.express.co.uk/sport',
        facebookFollowers: '1.4M',
        facebookUrl: 'https://www.facebook.com/DailyExpress',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/Express_Sport',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    },
    {
        name: 'Evening Standard',
        description: 'Football, Cricket, Rugby, F1, Golf, Boxing news, results and fixtures.',
        websiteUrl: 'https://www.standard.co.uk/sport',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/standardnews',
        xFollowers: '856.9K',
        xUrl: 'https://twitter.com/standardsport',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    },
    {
        name: 'Liverpool Echo',
        description: 'Football, Liverpool FC, Everton FC, Cricket, Rugby League news from the Liverpool Echo.',
        websiteUrl: 'https://www.liverpoolecho.co.uk/sport/',
        facebookFollowers: '1.4M',
        facebookUrl: 'https://www.facebook.com/LiverpoolEcho',
        xFollowers: '878.6K',
        xUrl: 'https://twitter.com/LivEchoSport',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    },
    {
        name: 'Manchester Evening News',
        description: 'Manchester United FC, Manchester City FC, Cricket, Rugby news from the Manchester Evening News.',
        websiteUrl: 'https://www.manchestereveningnews.co.uk/sport/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/ManchesterEveningNews',
        xFollowers: '979K',
        xUrl: 'https://twitter.com/MENnewsdesk',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    },
    {
        name: 'TalkSPORT',
        description: 'Live football, boxing, golf, cricket, F1, and more.',
        websiteUrl: 'https://talksport.com/',
        facebookFollowers: '3.6M',
        facebookUrl: 'https://www.facebook.com/talkSPORT/',
        xFollowers: '2.5M',
        xUrl: 'https://twitter.com/talkSPORT',
        instagramFollowers: '937K',
        instagramUrl: 'https://www.instagram.com/talksport/',
        type: 'Blog'
    },
    {
        name: 'The Scottish Sun',
        description: 'Scottish sports news, videos, fixtures and results.',
        websiteUrl: 'https://www.thescottishsun.co.uk/sport/',
        facebookFollowers: '394K',
        facebookUrl: 'https://www.facebook.com/ScottishSunSport',
        xFollowers: '121.2K',
        xUrl: 'https://twitter.com/ScottishSunSport',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog'
    }
];
