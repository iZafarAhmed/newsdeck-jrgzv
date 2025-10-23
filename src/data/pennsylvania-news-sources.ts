
export interface PennsylvaniaNewsSource {
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

export const pennsylvaniaNewsSources: PennsylvaniaNewsSource[] = [
    {
        name: 'The Philadelphia Inquirer',
        description: 'The largest newspaper in Philadelphia and the third-oldest surviving daily newspaper in the United States.',
        websiteUrl: 'https://www.inquirer.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/phillyinquirer',
        xFollowers: '600K',
        xUrl: 'https://twitter.com/phillyinquirer',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/phillyinquirer/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Pittsburgh Post-Gazette',
        description: 'The largest daily newspaper serving metropolitan Pittsburgh.',
        websiteUrl: 'https://www.post-gazette.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/pittsburghpostgazette',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/pittsburghpg',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/pittsburghpg/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'PennLive | The Patriot-News',
        description: 'A digital news and information website serving Harrisburg and central Pennsylvania.',
        websiteUrl: 'https://www.pennlive.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/pennlive',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/pennlive',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/pennlive/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: '6abc Action News',
        description: 'ABC affiliate in Philadelphia, covering southeastern Pennsylvania.',
        websiteUrl: 'https://6abc.com/',
        facebookFollowers: '2.2M',
        facebookUrl: 'https://www.facebook.com/6abcActionNews',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/6abc',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/6abcactionnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WTAE-TV Pittsburgh (Action News 4)',
        description: 'ABC affiliate serving the Pittsburgh metropolitan area.',
        websiteUrl: 'https://www.wtae.com/',
        facebookFollowers: '900K',
        facebookUrl: 'https://www.facebook.com/wtae4',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wtae',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wtaetv/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Morning Call (Allentown)',
        description: 'A daily newspaper serving the Lehigh Valley.',
        websiteUrl: 'https://www.mcall.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/mcall.lv',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/mcall',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/mcall_lehighvalley/',
        type: 'Newspaper',
        country: 'USA'
    }
];
