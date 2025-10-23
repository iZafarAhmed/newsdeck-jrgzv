
export interface WestVirginiaNewsSource {
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

export const westVirginiaNewsSources: WestVirginiaNewsSource[] = [
    {
        name: 'Charleston Gazette-Mail',
        description: 'A Pulitzer Prize-winning newspaper serving Charleston and the Kanawha Valley.',
        websiteUrl: 'https://www.wvgazettemail.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/wvgazettemail',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/wvgazettemail',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/wvgazettemail/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Herald-Dispatch',
        description: 'A daily newspaper based in Huntington, West Virginia.',
        websiteUrl: 'https://www.herald-dispatch.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/herald-dispatch',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/heralddispatch',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/theheralddispatch/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WSAZ NewsChannel 3',
        description: 'NBC affiliate serving the Charleston-Huntington market.',
        websiteUrl: 'https://www.wsaz.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wsaznews',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wsaznews',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wsaznews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WCHS (Eyewitness News)',
        description: 'ABC and Fox affiliate for Charleston and Huntington.',
        websiteUrl: 'https://wchstv.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/eyewitnessnewswv',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wchs8fox11',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/wchstv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Exponent Telegram',
        description: 'A daily newspaper serving Clarksburg and North Central West Virginia.',
        websiteUrl: 'https://www.wvnews.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/exponenttelegram',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/wvexponent',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/exponenttelegram/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Dominion Post',
        description: 'A daily newspaper in Morgantown, serving north-central West Virginia.',
        websiteUrl: 'https://www.dominionpost.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/DominionPostWV',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/DominionPostWV',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/dominionpost/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Intelligencer / Wheeling News-Register',
        description: 'Daily newspapers serving Wheeling and the Northern Panhandle.',
        websiteUrl: 'https://www.theintelligencer.net/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/TheIntelligencerWheelingNewsRegister',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/intelligencerwv',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/theintelligencer/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'West Virginia Public Broadcasting',
        description: 'The PBS and NPR member station network for West Virginia.',
        websiteUrl: 'https://www.wvpublic.org/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/wvpublic',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/wvpublic',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/wvpublic/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Times West Virginian',
        description: 'A daily newspaper for Fairmont and Marion County.',
        websiteUrl: 'https://www.timeswv.com/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/timeswv',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/timeswv',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/timeswv/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Parkersburg News and Sentinel',
        description: 'A daily newspaper serving Parkersburg and the Mid-Ohio Valley.',
        websiteUrl: 'https://www.newsandsentinel.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/newsandsentinel',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/newsandsentinel',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/newsandsentinel/',
        type: 'Newspaper',
        country: 'USA'
    }
];
