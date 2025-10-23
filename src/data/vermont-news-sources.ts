
export interface VermontNewsSource {
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

export const vermontNewsSources: VermontNewsSource[] = [
    {
        name: 'VTDigger',
        description: 'A statewide, nonprofit news organization that publishes in-depth journalism about Vermont.',
        websiteUrl: 'https://vtdigger.org/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/vtdigger',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/vtdigger',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/vtdigger/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Seven Days',
        description: "Vermont's free, independent weekly newspaper.",
        websiteUrl: 'https://www.sevendaysvt.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/sevendays',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/sevendays',
        instagramFollowers: '60K',
        instagramUrl: 'https://www.instagram.com/sevendaysvt/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Vermont Public',
        description: 'The NPR and PBS member station for Vermont.',
        websiteUrl: 'https://www.vermontpublic.org/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/vermontpublic',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/vermontpublic',
        instagramFollowers: '25K',
        instagramUrl: 'https://www.instagram.com/vermontpublic/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Burlington Free Press',
        description: 'The largest daily newspaper in Vermont, serving Burlington and the Champlain Valley.',
        websiteUrl: 'https://www.burlingtonfreepress.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/bfpnews',
        xFollowers: '90K',
        xUrl: 'https://twitter.com/bfp_news',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/bfp_news/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WCAX (CBS 3)',
        description: 'CBS affiliate serving Vermont, northern New York, and northwestern New Hampshire.',
        websiteUrl: 'https://www.wcax.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/wcax',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wcax',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/wcax/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'MyNBC5 (WPTZ)',
        description: 'NBC affiliate covering Vermont, northern New York, and western New Hampshire.',
        websiteUrl: 'https://www.mynbc5.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/mynbc5',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/mynbc5',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/mynbc5/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Rutland Herald',
        description: 'A daily newspaper serving Rutland and the surrounding area.',
        websiteUrl: 'https://www.rutlandherald.com/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/rutlandherald',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/rutlandherald',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/rutlandherald/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Times Argus (Barre-Montpelier)',
        description: 'A daily newspaper serving central Vermont.',
        websiteUrl: 'https://www.timesargus.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/timesargus',
        xFollowers: '12K',
        xUrl: 'https://twitter.com/timesargus',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/timesargus/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Brattleboro Reformer',
        description: 'A daily newspaper serving Brattleboro and Windham County.',
        websiteUrl: 'https://www.reformer.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/brattlebororeformer',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/reformernews',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/brattreformer/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'St. Albans Messenger',
        description: 'A newspaper serving Franklin County.',
        websiteUrl: 'https://www.samessenger.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/samessenger',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/samessenger',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/stalbansmessenger/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Bennington Banner',
        description: 'A daily newspaper for Bennington County.',
        websiteUrl: 'https://www.benningtonbanner.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/benningtonbanner',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/benningtonbanner',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/benningtonbanner/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Valley News',
        description: 'A newspaper covering the Upper Valley region of Vermont and New Hampshire.',
        websiteUrl: 'https://www.vnews.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/vnews',
        xFollowers: '12K',
        xUrl: 'https://twitter.com/vnews',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/valleynewspaper/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Addison County Independent',
        description: 'A newspaper serving Middlebury and Addison County.',
        websiteUrl: 'https://www.addisonindependent.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/addisonindependent',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/addisonindy',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/addisoncountyindependent/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Caledonian-Record',
        description: 'A newspaper serving St. Johnsbury and the Northeast Kingdom.',
        websiteUrl: 'https://www.caledonianrecord.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/caledonianrecord',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/calrecord',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/caledonianrecord/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Vermont Business Magazine',
        description: 'A statewide business publication.',
        websiteUrl: 'https://vermontbiz.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/vermontbusinessmagazine',
        xFollowers: '12K',
        xUrl: 'https://twitter.com/vermontbiz',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/vermontbiz/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'The Vermont Cynic',
        description: 'The student newspaper of the University of Vermont.',
        websiteUrl: 'https://vtcynic.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/vermontcynic',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/vermontcynic',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/vermontcynic/',
        type: 'University',
        country: 'USA'
    },
    {
        name: 'The Newport Daily Express',
        description: 'A newspaper serving Newport and Orleans County.',
        websiteUrl: 'https://newportvermonter.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/NewportDailyExpress',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/newportvermont',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Stowe Reporter',
        description: 'A weekly newspaper for Stowe and the surrounding area.',
        websiteUrl: 'https://www.stowetoday.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/stowereporter',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/stowereporter',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/stowereporter/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Manchester Journal',
        description: 'A weekly newspaper serving Manchester and the Northshire.',
        websiteUrl: 'https://www.manchesterjournal.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/ManchesterJournal',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/mcrjournal',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/manchesterjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Other Paper (South Burlington)',
        description: 'A weekly community newspaper for South Burlington.',
        websiteUrl: 'https://www.theotherpapersb.com/',
        facebookFollowers: '4K',
        facebookUrl: 'https://www.facebook.com/theotherpapersb',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/theotherpapersb',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    }
];
