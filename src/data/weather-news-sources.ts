
export interface WeatherNewsSource {
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

export const weatherNewsSources: WeatherNewsSource[] = [
    {
        name: 'The Weather Channel',
        description: 'Provides national and local weather forecast for cities, as well as weather radar, report and hurricane coverage.',
        websiteUrl: 'https://weather.com/',
        facebookFollowers: '8M',
        facebookUrl: 'https://www.facebook.com/theweatherchannel',
        xFollowers: '4.5M',
        xUrl: 'https://twitter.com/weatherchannel',
        instagramFollowers: '1M',
        instagramUrl: 'https://www.instagram.com/weatherchannel/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'AccuWeather',
        description: 'Get the latest weather news and forecasts for your area.',
        websiteUrl: 'https://www.accuweather.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/accuweather',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/accuweather',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/accuweather/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'NOAA (National Oceanic and Atmospheric Administration)',
        description: 'Science, service, and stewardship. Weather, water, and climate data, forecasts and warnings for the protection of life and property and enhancement of the national economy.',
        websiteUrl: 'https://www.noaa.gov/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/noaa',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/noaa',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/noaa/',
        type: 'Government',
        country: 'USA'
    }
];
