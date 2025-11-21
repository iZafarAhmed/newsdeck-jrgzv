
export interface IrishNewsSource {
    name: string;
    description: string;
    websiteUrl: string | null;
    facebookFollowers: string | null;
    facebookUrl: string | null;
    xFollowers: string | null;
    xUrl: string | null;
    instagramFollowers: string | null;
    instagramUrl: string | null;
    type: string;
    country: string;
}

export const irishNewsSources: IrishNewsSource[] = [
    {
        name: 'The Irish Times',
        description: 'A leading daily newspaper with comprehensive coverage of news, business, and culture.',
        websiteUrl: 'https://www.irishtimes.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/irishtimes',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/irishtimes',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/theirishtimes/',
        type: 'Newspaper',
        country: 'Ireland'
    },
    {
        name: 'RTÉ News',
        description: 'Ireland’s national public service broadcaster.',
        websiteUrl: 'https://www.rte.ie/news/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/rtenews',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/rtenews',
        instagramFollowers: '400K',
        instagramUrl: 'https://www.instagram.com/rtenews/',
        type: 'Public Broadcaster',
        country: 'Ireland'
    },
    {
        name: 'Irish Independent',
        description: 'A major daily newspaper in Ireland.',
        websiteUrl: 'https://www.independent.ie/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/theirishindependent',
        xFollowers: '700K',
        xUrl: 'https://twitter.com/independent_ie',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/independent.ie/',
        type: 'Newspaper',
        country: 'Ireland'
    },
    {
        name: 'The Journal',
        description: 'An online news publication providing breaking news and analysis.',
        websiteUrl: 'https://www.thejournal.ie/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/thejournal.ie',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/thejournal_ie',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/thejournal_ie/',
        type: 'Online Media',
        country: 'Ireland'
    },
    {
        name: 'Irish Examiner',
        description: 'A national daily newspaper based in Cork.',
        websiteUrl: 'https://www.irishexaminer.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/irishexaminer',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/irishexaminer',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/irish_examiner/',
        type: 'Newspaper',
        country: 'Ireland'
    }
];
