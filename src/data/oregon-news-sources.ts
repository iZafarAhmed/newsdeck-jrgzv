
export interface OregonNewsSource {
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
    country: string;
}

export const oregonNewsSources: OregonNewsSource[] = [
    {
        name: 'The Oregonian',
        description: 'The largest newspaper in Oregon, covering Portland and the state.',
        websiteUrl: 'https://www.oregonlive.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/oregonlive',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/oregonlive',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/oregonlive/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KGW (NBC 8)',
        description: 'NBC affiliate in Portland, providing local news, weather, and sports.',
        websiteUrl: 'https://www.kgw.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/KGWTV8',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/KGWNews',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kgwnews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KOIN 6',
        description: 'CBS affiliate serving Portland and the surrounding region.',
        websiteUrl: 'https://www.koin.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/koin6',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/koinnews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/koin6/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KATU (ABC 2)',
        description: 'ABC affiliate for Portland, Oregon.',
        websiteUrl: 'https://katu.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/KATUNews',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/katunews',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/katunews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Oregon Public Broadcasting (OPB)',
        description: 'The primary public media source in Oregon.',
        websiteUrl: 'https://www.opb.org/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/opb',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/opb',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/opb/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Willamette Week',
        description: 'An alternative weekly newspaper and website in Portland.',
        websiteUrl: 'https://www.wweek.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/wweek',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/wweek',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wweek/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Register-Guard (Eugene)',
        description: 'The daily newspaper for Eugene and Lane County.',
        websiteUrl: 'https://www.registerguard.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/registerguard',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/registerguard',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/registerguard/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Statesman Journal (Salem)',
        description: 'The daily newspaper for Salem, the state capital.',
        websiteUrl: 'https://www.statesmanjournal.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/statesmanjournal',
        xFollowers: '70K',
        xUrl: 'https://twitter.com/statesmanj',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/statesmanjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Bulletin (Bend)',
        description: 'A daily newspaper serving Bend and Central Oregon.',
        websiteUrl: 'https://www.bendbulletin.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/bendbulletin',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/bendbulletin',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/bendbulletin/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KTVZ (NewsChannel 21)',
        description: 'NBC affiliate for Central Oregon.',
        websiteUrl: 'https://ktvz.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/KTVZNC21',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/KTVZ',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/ktvz_news_channel_21/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Portland Mercury',
        description: 'An alternative weekly newspaper in Portland.',
        websiteUrl: 'https://www.portlandmercury.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/portlandmercury',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/portlandmercury',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/portlandmercury/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Eugene Weekly',
        description: 'An alternative weekly newspaper for the Eugene area.',
        websiteUrl: 'https://eugeneweekly.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/eugeneweekly',
        xFollowers: '25K',
        xUrl: 'https://twitter.com/eugeneweekly',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/eugeneweekly/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Street Roots',
        description: 'A nonprofit street newspaper in Portland.',
        websiteUrl: 'https://www.streetroots.org/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/streetroots',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/streetroots',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/streetroots/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Skanner',
        description: 'A newspaper serving the African American community in Portland.',
        websiteUrl: 'https://www.theskanner.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/theskannernews',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/theskannernews',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/theskannernews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Oregon Capital Chronicle',
        description: 'A nonprofit news outlet covering state government and politics.',
        websiteUrl: 'https://oregoncapitalchronicle.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/OregonCapitalChronicle',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/ORCapChronicle',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/oregoncapitalchronicle/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'The Corvallis Advocate',
        description: 'An independent news source for Corvallis.',
        websiteUrl: 'https://www.corvallisadvocate.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/CorvallisAdvocate',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/corvallisadvocate',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/corvallisadvocate/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'KEZI 9 News',
        description: 'ABC affiliate for Eugene and western Oregon.',
        websiteUrl: 'https://www.kezi.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/KEZI9',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/kezi9',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/kezi9news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KDRV (NewsWatch 12)',
        description: 'ABC affiliate serving southern Oregon and northern California.',
        websiteUrl: 'https://www.kdrv.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/kdrv12',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/kdrv',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/kdrv12/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Mail Tribune',
        description: 'A daily newspaper for Medford and Jackson County.',
        websiteUrl: 'https://www.mailtribune.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/mailtribune',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/mailtribune',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/mailtribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Portland Business Journal',
        description: 'The leading source for business news in Portland.',
        websiteUrl: 'https://www.bizjournals.com/portland/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/portlandbusinessjournal',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/pdxbizjournal',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/portlandbizjournal/',
        type: 'Business News',
        country: 'USA'
    }
]
