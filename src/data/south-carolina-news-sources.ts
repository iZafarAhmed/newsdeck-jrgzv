
export interface SouthCarolinaNewsSource {
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

export const southCarolinaNewsSources: SouthCarolinaNewsSource[] = [
    {
        name: 'The Post and Courier',
        description: 'The largest newspaper in South Carolina, based in Charleston.',
        websiteUrl: 'https://www.postandcourier.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/postandcourier',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/postandcourier',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/postandcourier/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The State',
        description: 'A daily newspaper in Columbia, the state capital.',
        websiteUrl: 'https://www.thestate.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/thestate',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/thestate',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/thestate/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Greenville News',
        description: 'A daily newspaper serving Greenville and the Upstate region.',
        websiteUrl: 'https://www.greenvilleonline.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/greenvilleonline',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/greenvillenews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/greenvillenews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WYFF News 4',
        description: 'NBC affiliate serving Greenville and the Upstate.',
        websiteUrl: 'https://www.wyff4.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wyff4',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/wyffnews4',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wyffnews4/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WSPA 7News',
        description: 'CBS affiliate serving the Spartanburg and Greenville area.',
        websiteUrl: 'https://www.wspa.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/wspa7',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wspa7',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/wspa7/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WIS News 10',
        description: 'NBC affiliate in Columbia.',
        websiteUrl: 'https://www.wistv.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/wis10',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/wis10',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/wis10/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WLTX News19',
        description: 'CBS affiliate for Columbia and the Midlands.',
        websiteUrl: 'https://www.wltx.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/wltxnews19',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/wltx',
        instagramFollowers: '70K',
        instagramUrl: 'https://www.instagram.com/wltx/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WCBD News 2',
        description: 'NBC affiliate serving Charleston and the Lowcountry.',
        websiteUrl: 'https://www.counton2.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/wcbdnews2',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/wcbd',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/wcbdnews2/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WCSC Live 5 News',
        description: 'CBS affiliate for Charleston.',
        websiteUrl: 'https://www.live5news.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/live5news',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/live5news',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/live5news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Myrtle Beach Sun News',
        description: 'The daily newspaper for Myrtle Beach and the Grand Strand.',
        websiteUrl: 'https://www.myrtlebeachonline.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/myrtlebeachsunnews',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/sunnews',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/thesunnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Island Packet',
        description: 'A daily newspaper serving Hilton Head Island and Beaufort County.',
        websiteUrl: 'https://www.islandpacket.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/islandpacket',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/islandpacket',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/islandpacket/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Rock Hill Herald',
        description: 'A daily newspaper serving Rock Hill and York County.',
        websiteUrl: 'https://www.heraldonline.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/heraldonline',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/heraldonline',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/heraldonline/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Florence Morning News',
        description: 'A daily newspaper for the Pee Dee region.',
        websiteUrl: 'https://scnow.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/scnow',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/florencenews',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/morningnews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Aiken Standard',
        description: 'The daily newspaper for Aiken County.',
        websiteUrl: 'https://www.aikenstandard.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/aikenstandard',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/aikenstandard',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/aikenstandard/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Sumter Item',
        description: 'A newspaper serving Sumter and the surrounding area.',
        websiteUrl: 'https://www.theitem.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/theitem',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/theitem',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/thesumteritem/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'South Carolina Public Radio',
        description: 'The NPR member station network for South Carolina.',
        websiteUrl: 'https://www.southcarolinapublicradio.org/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/SouthCarolinaPublicRadio',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/SCPublicRadio',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/scpublicradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Charleston City Paper',
        description: 'An alternative weekly newspaper in Charleston.',
        websiteUrl: 'https://www.charlestoncitypaper.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/charlestoncitypaper',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/chascitypaper',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/chascitypaper/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'FITSNews',
        description: 'An independent news outlet with a focus on South Carolina politics.',
        websiteUrl: 'https://www.fitsnews.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/fitsnews',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/fitsnews',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/fitsnews/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'The Anderson Independent-Mail',
        description: 'A daily newspaper serving Anderson County.',
        websiteUrl: 'https://www.independentmail.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/independentmail',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/independentmail',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/independentmail/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Beaufort Gazette',
        description: 'A daily newspaper serving Beaufort County.',
        websiteUrl: 'https://www.beaufortgazette.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/beaufortgazette',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/beaufortgazette',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/beaufortgazette/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Herald-Journal (Spartanburg)',
        description: 'A daily newspaper for Spartanburg and surrounding areas.',
        websiteUrl: 'https://www.goupstate.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/goupstate',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/goupstate',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/goupstate/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'South Carolina ETV',
        description: 'The state network of Public Broadcasting Service (PBS) member television stations.',
        websiteUrl: 'https://www.scetv.org/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/SouthCarolinaETV',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/scetv',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/scetv/',
        type: 'Public Media',
        country: 'USA'
    }
];
