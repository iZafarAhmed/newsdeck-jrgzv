
export interface MontanaNewsSource {
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

export const montanaNewsSources: MontanaNewsSource[] = [
    {
        name: 'Billings Gazette',
        description: 'The largest newspaper in Montana, serving Billings and the surrounding areas.',
        websiteUrl: 'https://billingsgazette.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/billingsgazette',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/billingsgazette',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/billingsgazette/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KTVQ',
        description: 'CBS affiliate in Billings, providing local news, weather, and sports.',
        websiteUrl: 'https://www.ktvq.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/KTVQ',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/ktvq',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/ktvq2/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Missoulian',
        description: 'A daily newspaper serving Missoula and Western Montana.',
        websiteUrl: 'https://missoulian.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/missoulian',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/missoulian',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/missoulian/',
        type: 'Newspaper',
        country: 'USA'
    }
];
