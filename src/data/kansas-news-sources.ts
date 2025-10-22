
export interface KansasNewsSource {
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

export const kansasNewsSources: KansasNewsSource[] = [
    {
        name: 'The Wichita Eagle',
        description: 'The largest newspaper in Kansas, covering Wichita and the surrounding area.',
        websiteUrl: 'https://www.kansas.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/wichitaeagle',
        xFollowers: '130K',
        xUrl: 'https://twitter.com/kansasdotcom',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/wichitaeagle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Kansas City Star',
        description: 'A major newspaper covering the Kansas City metropolitan area, including the Kansas side.',
        websiteUrl: 'https://www.kansascity.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/kansascitystar',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/kcstar',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kcstar/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KSN-TV (Wichita)',
        description: 'NBC affiliate in Wichita, providing local news, weather, and sports.',
        websiteUrl: 'https://www.ksn.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/ksnwnews',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/KSNNews',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/ksnnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KWCH 12 (Wichita)',
        description: 'CBS affiliate serving Wichita and central Kansas.',
        websiteUrl: 'https://www.kwch.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/kwch12',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/kwch12',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/kwch12/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Topeka Capital-Journal',
        description: 'A daily newspaper serving Topeka, the state capital.',
        websiteUrl: 'https://www.cjonline.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/cjonline',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/cjonline',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/cjonline/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Lawrence Journal-World',
        description: 'A daily newspaper serving Lawrence and Douglas County.',
        websiteUrl: 'https://www2.ljworld.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/ljworld',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/ljworld',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/ljworld/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Manhattan Mercury',
        description: 'A daily newspaper for Manhattan, Kansas.',
        websiteUrl: 'https://www.themercury.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/themercurynews',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/mercurynews',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/themanhattanmercury/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Kansas Public Radio (KPR)',
        description: 'The NPR member station for Kansas.',
        websiteUrl: 'https://kansaspublicradio.org/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/kansaspublicradio',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/kprpubradio',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/kansaspublicradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Hays Daily News',
        description: 'A daily newspaper serving Hays and northwest Kansas.',
        websiteUrl: 'https://www.hdnews.net/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/haysdailynews',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/haysdailynews',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/haysdailynews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Hutchinson News',
        description: 'A daily newspaper for Hutchinson and Reno County.',
        websiteUrl: 'https://www.hutchnews.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/hutchnews',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/hutchnews',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/thehutchinsonnews/',
        type: 'Newspaper',
        country: 'USA'
    }
];
