
export interface VirginiaNewsSource {
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

export const virginiaNewsSources: VirginiaNewsSource[] = [
    {
        name: 'The Virginian-Pilot',
        description: 'The largest daily newspaper in southeastern Virginia, serving Norfolk and the Hampton Roads area.',
        websiteUrl: 'https://www.pilotonline.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/thevirginianpilot',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/virginianpilot',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/thevirginianpilot/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Richmond Times-Dispatch',
        description: 'The primary daily newspaper in Richmond, the state capital.',
        websiteUrl: 'https://richmond.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/timesdispatch',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/rtdnews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/rtdnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Roanoke Times',
        description: 'A daily newspaper serving Roanoke and Southwest Virginia.',
        websiteUrl: 'https://roanoke.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/roanoketimes',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/roanoketimes',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/roanoke_times/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WAVY-TV 10',
        description: 'NBC affiliate for the Hampton Roads area.',
        websiteUrl: 'https://www.wavy.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/wavytv10',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wavy_news',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wavytv10/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WTKR News 3',
        description: 'CBS affiliate serving Norfolk and the Hampton Roads area.',
        websiteUrl: 'https://www.wtkr.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/wtkr3',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/wtkr3',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/wtkr3/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WRIC ABC 8News',
        description: 'ABC affiliate for Richmond and Central Virginia.',
        websiteUrl: 'https://www.wric.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/8news',
        xFollowers: '180K',
        xUrl: 'https://twitter.com/8news',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/8news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Daily Press (Newport News)',
        description: 'A daily newspaper serving the Virginia Peninsula.',
        websiteUrl: 'https://www.dailypress.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/dailypressnews',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/dailypressnews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/dailypressnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Virginia Mercury',
        description: 'An independent, nonprofit, nonpartisan online news organization.',
        websiteUrl: 'https://www.virginiamercury.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/virginiamercury',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/vamercury',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/virginiamercury/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'VPM News',
        description: 'The NPR and PBS member station for Central Virginia.',
        websiteUrl: 'https://www.vpm.org/news',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/myvpm',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/myvpm',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/myvpm/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'The Free Lance-Star (Fredericksburg)',
        description: 'A daily newspaper for Fredericksburg and the surrounding area.',
        websiteUrl: 'https://fredericksburg.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/freelancestar',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/thefls',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/freelancestar/',
        type: 'Newspaper',
        country: 'USA'
    }
];
