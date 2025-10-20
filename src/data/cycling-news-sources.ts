
export interface CyclingNewsSource {
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

export const cyclingNewsSources: CyclingNewsSource[] = [
    {
        name: 'Cyclingnews',
        description: 'Latest cycling news, race results, and team info.',
        websiteUrl: 'https://www.cyclingnews.com/',
        facebookFollowers: '531K',
        facebookUrl: 'https://www.facebook.com/cyclingnews',
        xFollowers: '302K',
        xUrl: 'https://twitter.com/Cyclingnewsfeed',
        instagramFollowers: '161K',
        instagramUrl: 'https://www.instagram.com/cyclingnewsofficial',
        type: 'News',
        country: 'UK'
    },
    {
        name: 'Cyclist',
        description: 'Road cycling news, reviews, events, tips.',
        websiteUrl: 'https://www.cyclist.co.uk/type/news',
        facebookFollowers: '320K',
        facebookUrl: 'https://www.facebook.com/CyclistMag',
        xFollowers: '48.9K',
        xUrl: 'https://twitter.com/Cyclist',
        instagramFollowers: '155K',
        instagramUrl: 'https://www.instagram.com/cyclist_mag',
        type: 'Magazine',
        country: 'UK'
    },
    {
        name: 'Cycling Weekly',
        description: 'Daily cycling news and equipment reviews.',
        websiteUrl: 'https://www.cyclingweekly.com/',
        facebookFollowers: '645K',
        facebookUrl: 'https://www.facebook.com/CyclingWeekly',
        xFollowers: '277K',
        xUrl: 'https://twitter.com/CyclingWeekly',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/cyclingweeklymagazine',
        type: 'Magazine',
        country: 'UK'
    },
    {
        name: 'VELO (Outside)',
        description: 'Pro racing, tech reviews, and cycling lifestyle.',
        websiteUrl: 'https://velo.outsideonline.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/OutsideMagazine',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/outside',
        instagramFollowers: '1.1M',
        instagramUrl: 'https://www.instagram.com/outside',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'CyclingTips',
        description: 'Inspiring stories, racing insights, tech, and training.',
        websiteUrl: 'https://cyclingtips.com/',
        facebookFollowers: '345K',
        facebookUrl: 'https://www.facebook.com/cyclingtips',
        xFollowers: '155K',
        xUrl: 'https://twitter.com/cyclingtips',
        instagramFollowers: '250K',
        instagramUrl: 'https://www.instagram.com/cyclingtips',
        type: 'Blog',
        country: 'Australia'
    },
    {
        name: 'PezCycling News',
        description: 'News, rides, travel, training, gear reviews.',
        websiteUrl: 'https://pezcyclingnews.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/PezCycling',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/pezcycling',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/pezcycling',
        type: 'Blog',
        country: 'Canada'
    },
    {
        name: 'Pinkbike',
        description: 'MTB news, videos, photos, race coverage.',
        websiteUrl: 'https://www.pinkbike.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/pinkbike',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/pinkbike',
        instagramFollowers: '1.5M',
        instagramUrl: 'https://www.instagram.com/pinkbike',
        type: 'News',
        country: 'Canada'
    },
    {
        name: 'MTB-MAG',
        description: 'Mountain biking news and reviews in English, Italian, Spanish.',
        websiteUrl: 'https://www.mtb-mag.com/en/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/mtbmag',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/mtbmag',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/mtbmag',
        type: 'Magazine',
        country: 'Italy'
    },
    {
        name: 'TNT Sports – Cycling',
        description: 'Eurosport’s cycling coverage of major events.',
        websiteUrl: 'https://www.tntsports.co.uk/cycling/?welcome=eurosport',
        facebookFollowers: '5M',
        facebookUrl: 'https://www.facebook.com/Eurosport',
        xFollowers: '1.5M',
        xUrl: 'https://twitter.com/Eurosport',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/Eurosport',
        type: 'News',
        country: 'UK'
    },
    {
        name: 'Carbon + Grit News',
        description: 'Gravel and adventure cycling, gear reviews.',
        websiteUrl: 'https://www.carbonandgrit.com/category/industry-news/',
        facebookFollowers: '2K',
        facebookUrl: 'https://www.facebook.com/CarbonAndGrit',
        xFollowers: '1K',
        xUrl: 'https://twitter.com/CarbonAndGrit',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/carbonandgrit',
        type: 'Blog',
        country: 'USA'
    },
    {
        name: 'Cycling Canada',
        description: 'Official Canadian cycling news and updates.',
        websiteUrl: 'https://cyclingcanada.ca/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/CyclingCanada',
        xFollowers: '40K',
        xUrl: 'https://twitter.com/CyclingCanada',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/cyclingcanadaofficial',
        type: 'Official Federation',
        country: 'Canada'
    },
    {
        name: 'VeloUK',
        description: 'British cycling news, races, and interviews.',
        websiteUrl: 'https://www.velouk.net/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/VeloUK',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/velouk',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog',
        country: 'UK'
    },
    {
        name: 'SoCalCycling.com',
        description: 'Southern California cycling news and events.',
        websiteUrl: 'https://socalcycling.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/SoCalCycling',
        xFollowers: '10K',
        xUrl: 'https://twitter.com/socalcycling',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/socalcycling',
        type: 'Regional',
        country: 'USA'
    },
    {
        name: 'Podium Café',
        description: 'Community-driven cycling news and discussion.',
        websiteUrl: 'https://www.podiumcafe.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/podiumcafe',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/podiumcafe',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Blog',
        country: 'USA'
    },
    {
        name: '303Cycling',
        description: 'Colorado cycling news, events, and features.',
        websiteUrl: 'https://303cycling.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/303Cycling',
        xFollowers: '5K',
        xUrl: 'https://twitter.com/303Cycling',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/303cycling',
        type: 'Regional',
        country: 'USA'
    },
    {
        name: 'Sticky Bottle',
        description: 'Irish cycling news, results, and analysis.',
        websiteUrl: 'https://www.stickybottle.com/',
        facebookFollowers: '40K',
        facebookUrl: 'https://www.facebook.com/stickybottle',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/stickybottle',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News',
        country: 'Ireland'
    },
    {
        name: 'Bicycling South Africa',
        description: 'South African cycling news and lifestyle.',
        websiteUrl: 'https://www.bicycling.co.za/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/BicyclingSA',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/BicyclingSA',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/bicyclingsa',
        type: 'Magazine',
        country: 'South Africa'
    },
    {
        name: 'Road Bike Action',
        description: 'Road cycling tech, race reports, and reviews.',
        websiteUrl: 'https://roadbikeaction.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/RoadBikeAction',
        xFollowers: '50K',
        xUrl: 'https://twitter.com/RoadBikeAction',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/roadbikeaction',
        type: 'Magazine',
        country: 'USA'
    },
    {
        name: 'BikeRadar',
        description: 'Reviews and news on bikes, parts, and gear.',
        websiteUrl: 'https://www.bikeradar.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/BikeRadar',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/bikeradar',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/bikeradar',
        type: 'Magazine',
        country: 'UK'
    },
    {
        name: 'Global Cycling Network (GCN)',
        description: 'Cycling tips, shows, and training videos.',
        websiteUrl: 'https://www.globalcyclingnetwork.com/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/globalcyclingnetwork',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/gcntweet',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/globalcyclingnetwork',
        type: 'Media Network',
        country: 'UK'
    }
];
