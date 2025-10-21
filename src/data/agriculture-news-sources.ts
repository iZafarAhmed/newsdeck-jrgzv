
export interface AgricultureNewsSource {
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

export const agricultureNewsSources: AgricultureNewsSource[] = [
    {
        name: 'Successful Farming',
        description: 'Provides the latest news on agriculture, crops, livestock, and financial business.',
        websiteUrl: 'https://www.agriculture.com/',
        facebookFollowers: '550K',
        facebookUrl: 'https://www.facebook.com/SuccessfulFarming',
        xFollowers: '120K',
        xUrl: 'https://twitter.com/SuccessfulFarm',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/successfulfarming/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'The Guardian - Farming',
        description: 'Latest news and features on farming from The Guardian.',
        websiteUrl: 'https://www.theguardian.com/environment/farming',
        facebookFollowers: '8.5M',
        facebookUrl: 'https://www.facebook.com/theguardian',
        xFollowers: '10.9M',
        xUrl: 'https://twitter.com/guardian',
        instagramFollowers: '6.4M',
        instagramUrl: 'https://www.instagram.com/guardian/',
        type: 'Newspaper',
        country: 'UK'
    },
    {
        name: 'AgDaily',
        description: 'A digital media company dedicated to offering a vibrant, modern look at agriculture.',
        websiteUrl: 'https://www.agdaily.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/agdaily',
        xFollowers: '15.6K',
        xUrl: 'https://twitter.com/agdaily',
        instagramFollowers: '40.2K',
        instagramUrl: 'https://www.instagram.com/agdaily/',
        type: 'Digital Media',
        country: 'USA'
    },
    {
        name: 'Farm Journal',
        description: 'Provides the latest news and information for farmers and ranchers.',
        websiteUrl: 'https://www.agweb.com/',
        facebookFollowers: '188K',
        facebookUrl: 'https://www.facebook.com/farmjournal',
        xFollowers: '110.3K',
        xUrl: 'https://twitter.com/FarmJournal',
        instagramFollowers: '13.3K',
        instagramUrl: 'https://www.instagram.com/farmjournal/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'Farmers Weekly',
        description: 'The leading source of farming news, information and advice in the UK.',
        websiteUrl: 'https://www.fwi.co.uk/',
        facebookFollowers: '185K',
        facebookUrl: 'https://www.facebook.com/farmersweeklyuk',
        xFollowers: '130.6K',
        xUrl: 'https://twitter.com/farmersweekly',
        instagramFollowers: '71.5K',
        instagramUrl: 'https://www.instagram.com/farmersweekly/',
        type: 'Magazine',
        country: 'UK'
    },
    {
        name: 'AgriLand',
        description: 'Ireland’s largest agricultural news portal.',
        websiteUrl: 'https://www.agriland.ie/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/agrilandireland',
        xFollowers: '37.8K',
        xUrl: 'https://twitter.com/agrilandireland',
        instagramFollowers: '43.2K',
        instagramUrl: 'https://www.instagram.com/agriland.ie/',
        type: 'News Portal',
        country: 'Ireland'
    },
    {
        name: 'Modern Farmer',
        description: 'A magazine and website for people who care about where their food comes from.',
        websiteUrl: 'https://modernfarmer.com/',
        facebookFollowers: '320K',
        facebookUrl: 'https://www.facebook.com/modernfarmer',
        xFollowers: '35.9K',
        xUrl: 'https://twitter.com/Modfarm',
        instagramFollowers: '85.4K',
        instagramUrl: 'https://www.instagram.com/modernfarmer/',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'AgFunderNews',
        description: 'News and analysis for the global agriculture technology investment community.',
        websiteUrl: 'https://agfundernews.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/agfunder',
        xFollowers: '25.6K',
        xUrl: 'https://twitter.com/AgFunder',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Investment News',
        country: 'USA'
    },
    {
        name: 'Food Tank',
        description: 'A non-profit organization focused on building a global community for safe, healthy, and nourished eaters.',
        websiteUrl: 'https://foodtank.com/',
        facebookFollowers: '450K',
        facebookUrl: 'https://www.facebook.com/TheFoodTank',
        xFollowers: '335.7K',
        xUrl: 'https://twitter.com/Food_Tank',
        instagramFollowers: '138K',
        instagramUrl: 'https://www.instagram.com/food_tank/',
        type: 'Non-profit',
        country: 'USA'
    },
    {
        name: 'Civil Eats',
        description: 'A daily news source for critical thought about the American food system.',
        websiteUrl: 'https://civileats.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/CivilEats',
        xFollowers: '126.9K',
        xUrl: 'https://twitter.com/civileats',
        instagramFollowers: '31.3K',
        instagramUrl: 'https://www.instagram.com/civileats/',
        type: 'News Website',
        country: 'USA'
    },
    {
        name: 'The Counter',
        description: 'A non-profit, independent, non-partisan newsroom investigating the forces shaping how and what we eat.',
        websiteUrl: 'https://thecounter.org/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/TheCounterNews',
        xFollowers: '33.9K',
        xUrl: 'https://twitter.com/TheCounter',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Non-profit',
        country: 'USA'
    }
];
