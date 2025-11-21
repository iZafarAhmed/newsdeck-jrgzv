
export interface UkraineNewsSource {
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

export const ukraineNewsSources: UkraineNewsSource[] = [
    {
        name: 'Ukrinform',
        description: 'The National News Agency of Ukraine, providing reliable and unbiased information about events in Ukraine and the world.',
        websiteUrl: 'https://www.ukrinform.net/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/ukrinform.net',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/ukrinform_net',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/ukrinform_news/',
        type: 'News Agency',
        country: 'Ukraine'
    },
    {
        name: 'The Kyiv Independent',
        description: 'An English-language media outlet in Ukraine, created by journalists from the Kyiv Post.',
        websiteUrl: 'https://kyivindependent.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/kyivindependent',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/kyivindependent',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/kyivindependent_official/',
        type: 'Online Media',
        country: 'Ukraine'
    },
    {
        name: 'The New Voice of Ukraine',
        description: 'An English-language publication from Ukraine providing news and analysis.',
        websiteUrl: 'https://english.nv.ua/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/newvoiceofukraine',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/newvoiceofukraine',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'Ukraine'
    },
    {
        name: 'Ukrainska Pravda',
        description: 'A popular Ukrainian online newspaper known for its political news and investigative journalism.',
        websiteUrl: 'https://www.pravda.com.ua/',
        facebookFollowers: '1.5M',
        facebookUrl: 'https://www.facebook.com/ukrpravda',
        xFollowers: '2M',
        xUrl: 'https://twitter.com/ukrpravda',
        instagramFollowers: '300K',
        instagramUrl: 'https://www.instagram.com/ukrpravda/',
        type: 'Online Media',
        country: 'Ukraine'
    },
    {
        name: 'Euromaidan Press',
        description: 'An independent English-language media outlet in Ukraine.',
        websiteUrl: 'https://euromaidanpress.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/euromaidanpress',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/euromaidanpress',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/euromaidanpress/',
        type: 'Online Media',
        country: 'Ukraine'
    },
    {
        name: 'Kyiv Post',
        description: 'Ukraine\'s oldest English-language newspaper.',
        websiteUrl: 'https://www.kyivpost.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/kyivpost.public',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/kyivpost',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kyivpost.official/',
        type: 'Newspaper',
        country: 'Ukraine'
    },
    {
        name: 'Hromadske',
        description: 'An independent, non-profit, non-governmental organization that provides news from Ukraine.',
        websiteUrl: 'https://hromadske.ua/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/hromadskeua',
        xFollowers: '800K',
        xUrl: 'https://twitter.com/hromadske',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/hromadske.ua/',
        type: 'Broadcasting',
        country: 'Ukraine'
    },
    {
        name: 'Suspilne News',
        description: 'The public broadcasting company of Ukraine.',
        websiteUrl: 'https://suspilne.media/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/suspilne.news',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/suspilne_news',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/suspilne.news/',
        type: 'Public Broadcaster',
        country: 'Ukraine'
    },
    {
        name: 'Espreso TV',
        description: 'A Ukrainian internet television channel.',
        websiteUrl: 'https://espreso.tv/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/espreso.tv',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/espresotv',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/espreso.tv/',
        type: 'Broadcasting',
        country: 'Ukraine'
    },
    {
        name: 'Censor.NET',
        description: 'A popular Ukrainian news and political analysis portal.',
        websiteUrl: 'https://censor.net/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/censor.net',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/censor_net',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Online Media',
        country: 'Ukraine'
    }
];
