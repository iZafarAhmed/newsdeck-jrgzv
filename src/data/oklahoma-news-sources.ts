
export interface OklahomaNewsSource {
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

export const oklahomaNewsSources: OklahomaNewsSource[] = [
    {
        name: 'The Oklahoman',
        description: 'The largest daily newspaper in Oklahoma, serving Oklahoma City and the state.',
        websiteUrl: 'https://www.oklahoman.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/theoklahoman',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/TheOklahoman_',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/theoklahoman/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Tulsa World',
        description: 'The daily newspaper for Tulsa and northeastern Oklahoma.',
        websiteUrl: 'https://tulsaworld.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/tulsaworld',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/tulsaworld',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/tulsaworld/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KOCO 5 News',
        description: 'ABC affiliate in Oklahoma City, providing local news, weather, and sports.',
        websiteUrl: 'https://www.koco.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/koco5',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/koconews',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/koco5news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KFOR-TV (News 4)',
        description: 'NBC affiliate serving Oklahoma City and central Oklahoma.',
        websiteUrl: 'https://kfor.com/',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/kfor4',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/kfor',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/kfornews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KWTV (News 9)',
        description: 'CBS affiliate for Oklahoma City.',
        websiteUrl: 'https://www.news9.com/',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/news9',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/news9',
        instagramFollowers: '180K',
        instagramUrl: 'https://www.instagram.com/news9/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KOTV (News on 6)',
        description: 'CBS affiliate serving Tulsa and northeastern Oklahoma.',
        websiteUrl: 'https://www.newson6.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/newson6',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/newson6',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/newson6kotv/',
        type: 'Broadcasting',
        country: 'USA'
    }
];
