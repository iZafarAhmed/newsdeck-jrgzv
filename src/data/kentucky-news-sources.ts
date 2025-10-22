
export interface KentuckyNewsSource {
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

export const kentuckyNewsSources: KentuckyNewsSource[] = [
    {
        name: 'The Courier-Journal',
        description: 'The largest newspaper in Kentucky, covering Louisville and the state.',
        websiteUrl: 'https://www.courier-journal.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/courierjournal',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/courierjournal',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/courierjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Lexington Herald-Leader',
        description: 'A major newspaper serving Lexington and central Kentucky.',
        websiteUrl: 'https://www.kentucky.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/kentuckycom',
        xFollowers: '180K',
        xUrl: 'https://twitter.com/heraldleader',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/kentuckycom/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WDRB',
        description: 'Fox affiliate in Louisville, providing local news, weather, and sports.',
        websiteUrl: 'https://www.wdrb.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wdrbnews',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wdrbnews',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/wdrb_news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WAVE 3 News',
        description: 'NBC affiliate serving Louisville and the surrounding region.',
        websiteUrl: 'https://www.wave3.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/WAVE3News',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wave3news',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wave3news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WHAS11',
        description: 'ABC affiliate for Louisville, providing news and community information.',
        websiteUrl: 'https://www.whas11.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/whas11',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/whas11',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/whas11/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WLKY',
        description: 'CBS affiliate serving Louisville, Kentucky.',
        websiteUrl: 'https://www.wlky.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/wlky',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wlky',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wlky/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WKYT',
        description: 'CBS affiliate in Lexington, covering central and eastern Kentucky.',
        websiteUrl: 'https://www.wkyt.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/wkyt',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/wkyt',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/wkyt_news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'LEX 18',
        description: 'NBC affiliate serving Lexington and central Kentucky.',
        websiteUrl: 'https://www.lex18.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/lex18',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/lex18news',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/lex18news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WTVQ',
        description: 'ABC affiliate for Lexington and the Bluegrass region.',
        websiteUrl: 'https://www.wtvq.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/wtvq',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/wtvq',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/wtvq/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Gleaner (Henderson)',
        description: 'A daily newspaper serving Henderson County.',
        websiteUrl: 'https://www.thegleaner.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/hendersongleaner',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/the_gleaner',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/thehendersongleaner/',
        type: 'Newspaper',
        country: 'USA'
    }
];
