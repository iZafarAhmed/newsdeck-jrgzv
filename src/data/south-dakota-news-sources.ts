
export interface SouthDakotaNewsSource {
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

export const southDakotaNewsSources: SouthDakotaNewsSource[] = [
    {
        name: 'Argus Leader',
        description: 'The largest newspaper in South Dakota, serving Sioux Falls and the surrounding area.',
        websiteUrl: 'https://www.argusleader.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/argusleader',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/argusleader',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/argusleader/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Rapid City Journal',
        description: 'A daily newspaper serving Rapid City and the Black Hills region.',
        websiteUrl: 'https://rapidcityjournal.com/',
        facebookFollowers: '70K',
        facebookUrl: 'https://www.facebook.com/rapidcityjournal',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/rcjournal',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/rapidcityjournal/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KELOLAND News',
        description: 'CBS affiliate providing news, weather, and sports for South Dakota.',
        websiteUrl: 'https://www.keloland.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/kelolandnews',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/keloland',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/keloland/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Dakota News Now (KSFY/KDLT)',
        description: 'ABC and NBC affiliate serving Sioux Falls and the surrounding region.',
        websiteUrl: 'https://www.dakotanewsnow.com/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/dakotanewsnow',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/dakotanews_now',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/dakotanewsnow/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'South Dakota Public Broadcasting (SDPB)',
        description: 'The statewide public media network for South Dakota.',
        websiteUrl: 'https://www.sdpb.org/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/SoDakPB',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/SoDakPB',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/southdakotapublicbroadcasting/',
        type: 'Public Media',
        country: 'USA'
    },
    {
        name: 'Aberdeen American News',
        description: 'A daily newspaper serving Aberdeen and northeastern South Dakota.',
        websiteUrl: 'https://www.aberdeennews.com/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/AberdeenAmericanNews',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/AberdeenNews',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/aberdeennews/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Watertown Public Opinion',
        description: 'The daily newspaper for Watertown and surrounding areas.',
        websiteUrl: 'https://www.thepublicopinion.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/PlainsmanPO',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/thepublicopinion',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/watertownpublicopinion/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Daily Republic (Mitchell)',
        description: 'A daily newspaper serving Mitchell and the surrounding region.',
        websiteUrl: 'https://www.mitchellrepublic.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/TheDailyRepublic',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/Daily_Republic',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/thedailyrepublic/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Yankton Press & Dakotan',
        description: 'A daily newspaper serving Yankton and southeastern South Dakota.',
        websiteUrl: 'https://www.yankton.net/',
        facebookFollowers: '25K',
        facebookUrl: 'https://www.facebook.com/yanktonpd',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/yanktonpd',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/yanktonpd/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Brookings Register',
        description: 'The daily newspaper for Brookings and surrounding communities.',
        websiteUrl: 'https://brookingsregister.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/BrookingsRegister',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/BrookingsRegister',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/brookingsregister/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Black Hills Pioneer (Spearfish)',
        description: 'A newspaper serving Spearfish and the northern Black Hills.',
        websiteUrl: 'https://www.bhpioneer.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/bhpioneer',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/bhpioneer',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/blackhillspioneer/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Capital Journal (Pierre)',
        description: 'The daily newspaper for Pierre, the state capital.',
        websiteUrl: 'https://www.capjournal.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/CapJournal',
        xFollowers: '8K',
        xUrl: 'https://twitter.com/capjournal',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'South Dakota News Watch',
        description: 'An independent, nonprofit organization that produces investigative and public service journalism.',
        websiteUrl: 'https://www.sdnewswatch.org/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/sdnewswatch',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/sdnewswatch',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/sdnewswatch/',
        type: 'Nonprofit',
        country: 'USA'
    },
    {
        name: 'Dakota Free Press',
        description: 'A blog about South Dakota politics and news.',
        websiteUrl: 'https://dakotafreepress.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/dakotafreepress',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/dakotafreepress',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Blog',
        country: 'USA'
    },
    {
        name: 'Dakota War College',
        description: 'A conservative political blog covering South Dakota.',
        websiteUrl: 'https://dakotawarcollege.com/',
        facebookFollowers: '2K',
        facebookUrl: 'https://www.facebook.com/dakotawarcollege',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/dakotawarcollege',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Blog',
        country: 'USA'
    },
    {
        name: 'The Plainsman (Huron)',
        description: 'A daily newspaper serving Huron and Beadle County.',
        websiteUrl: 'https://www.plainsman.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/HuronPlainsman',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/plainsman',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'True Dakotan (Wessington Springs)',
        description: 'A weekly newspaper serving Jerauld and Sanborn counties.',
        websiteUrl: 'https://www.truedakotan.com/',
        facebookFollowers: '3K',
        facebookUrl: 'https://www.facebook.com/truedakotan',
        xFollowers: null,
        xUrl: null,
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Madison Daily Leader',
        description: 'A daily newspaper serving Madison and Lake County.',
        websiteUrl: 'https://www.madisondailyleader.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/madisondailyleader',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/mdleader',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Vermillion Plain Talk',
        description: 'A newspaper serving Vermillion and Clay County.',
        websiteUrl: 'https://www.plaintalk.net/',
        facebookFollowers: '8K',
        facebookUrl: 'https://www.facebook.com/plaintalk',
        xFollowers: '3K',
        xUrl: 'https://twitter.com/plaintalk',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/vermillionplaintalk/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Volante',
        description: 'The student newspaper of the University of South Dakota.',
        websiteUrl: 'https://volanteonline.com/',
        facebookFollowers: '3K',
        facebookUrl: 'https://www.facebook.com/TheVolante',
        xFollowers: '4K',
        xUrl: 'https://twitter.com/TheVolante',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/thevolante/',
        type: 'University',
        country: 'USA'
    },
    {
        name: 'The Collegian',
        description: 'The student newspaper of South Dakota State University.',
        websiteUrl: 'https://sdsucollegian.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/sdsucollegian',
        xFollowers: '6K',
        xUrl: 'https://twitter.com/sdsucollegian',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/sdsucollegian/',
        type: 'University',
        country: 'USA'
    },
    {
        name: 'Sioux Falls Business Journal',
        description: 'Business news and information for the Sioux Falls area.',
        websiteUrl: 'https://www.siouxfalls.business/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/SiouxFallsBusiness',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/sfsbusiness',
        instagramFollowers: '3K',
        instagramUrl: 'https://www.instagram.com/siouxfalls.business/',
        type: 'Business News',
        country: 'USA'
    },
    {
        name: 'The Mobridge Tribune',
        description: 'A weekly newspaper serving Mobridge and Walworth County.',
        websiteUrl: 'https://www.mobridgetribune.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/mobridgetribune',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/mobridgetribune',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Custer County Chronicle',
        description: 'A newspaper for Custer and the southern Black Hills.',
        websiteUrl: 'https://www.custercountychronicle.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/CusterCountyChronicle',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/custerchronic',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/custercountychronicle/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Hill City Prevailer News',
        description: 'A newspaper serving Hill City and the central Black Hills.',
        websiteUrl: 'https://www.hillcityprevailernews.com/',
        facebookFollowers: '4K',
        facebookUrl: 'https://www.facebook.com/HillCityPrevailerNews',
        xFollowers: null,
        xUrl: null,
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Newspaper',
        country: 'USA'
    }
]

    