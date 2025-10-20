
export interface ForexNewsSource {
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

export const forexNewsSources: ForexNewsSource[] = [
    {
        name: 'Forex Factory',
        description: 'A professional platform for forex traders, providing market news, trading forums, an economic calendar, and market analysis.',
        websiteUrl: 'https://www.forexfactory.com/',
        facebookFollowers: '153.2K',
        facebookUrl: 'https://www.facebook.com/forexfactory',
        xFollowers: '185.1K',
        xUrl: 'https://twitter.com/forexfactory',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Platform',
        country: 'USA'
    },
    {
        name: 'DailyFX',
        description: 'Dedicated to providing Forex news and analysis with a focus on technical and fundamental analysis to help traders make informed decisions.',
        websiteUrl: 'https://www.dailyfx.com/',
        facebookFollowers: '77.1K',
        facebookUrl: 'https://www.facebook.com/DailyFX',
        xFollowers: '332.6K',
        xUrl: 'https://twitter.com/DailyFX',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'FXStreet',
        description: 'A leading source for Forex and cryptocurrency news, analysis, and real-time quotes, providing an indispensable tool for traders.',
        websiteUrl: 'https://www.fxstreet.com/',
        facebookFollowers: '139.7K',
        facebookUrl: 'https://www.facebook.com/FXstreet',
        xFollowers: '435.1K',
        xUrl: 'https://twitter.com/FXstreetNews',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'Investing.com - Forex News',
        description: 'Provides real-time and breaking news, data, tools, and analysis for financial markets, including Forex.',
        websiteUrl: 'https://www.investing.com/forex-news/',
        facebookFollowers: '3.8M',
        facebookUrl: 'https://www.facebook.com/investingcom',
        xFollowers: '553.9K',
        xUrl: 'https://twitter.com/Investingcom',
        instagramFollowers: '187K',
        instagramUrl: 'https://www.instagram.com/investingcom/',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'Forexlive',
        description: 'Offers real-time market news and analysis from a team of professional traders, focusing on the G20 currencies.',
        websiteUrl: 'https://www.forexlive.com/',
        facebookFollowers: '24.1K',
        facebookUrl: 'https://www.facebook.com/ForexLive',
        xFollowers: '198.5K',
        xUrl: 'https://twitter.com/forexlive',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'BabyPips',
        description: 'Primarily an educational resource for new Forex traders, featuring market news and analysis, but with a simple, easy-to-digest approach.',
        websiteUrl: 'https://www.babypips.com/',
        facebookFollowers: '167.3K',
        facebookUrl: 'https://www.facebook.com/babypips',
        xFollowers: '102.5K',
        xUrl: 'https://twitter.com/babypips',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Education',
        country: 'USA'
    },
    {
        name: 'Trade the News',
        description: 'A professional service offering real-time financial news reporting and market-moving headlines to help traders capitalize on news events.',
        websiteUrl: 'https://www.tradethenews.com/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '27.2K',
        xUrl: 'https://twitter.com/tradethenews',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Service',
        country: 'USA'
    },
    {
        name: 'Admiral Markets - News',
        description: 'Provides Forex and CFD news, analysis, and educational resources from a regulated global brokerage firm.',
        websiteUrl: 'https://admiralmarkets.com/analytics/forex-news',
        facebookFollowers: '110.1K',
        facebookUrl: 'https://www.facebook.com/AdmiralMarketsGlobal',
        xFollowers: '18.5K',
        xUrl: 'https://twitter.com/AdmiralsGlobal',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Brokerage',
        country: 'Global'
    },
    {
        name: 'Myfxbook',
        description: 'An automated analytical tool for Forex trading accounts, providing an economic calendar and news.',
        websiteUrl: 'https://www.myfxbook.com/forex-economic-calendar',
        facebookFollowers: '116.3K',
        facebookUrl: 'https://www.facebook.com/myfxbook',
        xFollowers: '30.6K',
        xUrl: 'https://twitter.com/myfxbook',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Tool/Platform',
        country: 'Global'
    },
    {
        name: 'IG - News and Trading Ideas',
        description: 'A leading global CFD and Forex broker that offers daily market news, analysis, and trading ideas.',
        websiteUrl: 'https://www.ig.com/en/news-and-trading-ideas',
        facebookFollowers: '133.4K',
        facebookUrl: 'https://www.facebook.com/IGcom',
        xFollowers: '29.3K',
        xUrl: 'https://twitter.com/IGcom',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Brokerage',
        country: 'UK'
    },
    {
        name: 'Action Forex',
        description: 'Offers Forex analysis, charts, trading signals, and breaking news.',
        websiteUrl: 'https://www.actionforex.com/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '46.2K',
        xUrl: 'https://twitter.com/actionforex',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'Trading Economics - Currency',
        description: 'Provides economic calendars, historical data, forecasts, and news for 192 countries, with a dedicated section for currency markets.',
        websiteUrl: 'https://tradingeconomics.com/currencies',
        facebookFollowers: '16.2K',
        facebookUrl: 'https://www.facebook.com/tradingeconomics',
        xFollowers: '76.5K',
        xUrl: 'https://twitter.com/tEconomics',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Data Provider',
        country: 'Global'
    },
    {
        name: 'Forex Crunch',
        description: 'Offers Forex news, analysis, and commentary, including technical analysis and fundamental economic data.',
        websiteUrl: 'https://www.forexcrunch.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/forexcrunch',
        xFollowers: '42.1K',
        xUrl: 'https://twitter.com/forexcrunch',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'eFXdata',
        description: 'Provides real-time institutional currency research and analysis for professional and institutional traders.',
        websiteUrl: 'https://www.efxdata.com/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '22.8K',
        xUrl: 'https://twitter.com/efxdata',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Service',
        country: 'Global'
    },
    {
        name: 'FxPro - Market News',
        description: 'Global Forex broker offering market news, fundamental, and technical analysis.',
        websiteUrl: 'https://www.fxpro.com/market-news',
        facebookFollowers: '326.2K',
        facebookUrl: 'https://www.facebook.com/FxProGlobal',
        xFollowers: '17.5K',
        xUrl: 'https://twitter.com/FxProGlobal',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Brokerage',
        country: 'Global'
    },
    {
        name: 'OctaFX - Forex News',
        description: 'Offers up-to-date Forex news and market analysis, specializing in educational resources and market forecasts.',
        websiteUrl: 'https://www.octafx.com/forex-news/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/OctaFX',
        xFollowers: '19.3K',
        xUrl: 'https://twitter.com/OctaFX',
        instagramFollowers: '19.3K',
        instagramUrl: 'https://www.instagram.com/octafx_official/',
        type: 'Brokerage',
        country: 'Global'
    },
    {
        name: 'FX News Group (FNG)',
        description: 'A leading site providing real-time coverage of the global Forex and CFDs trading industry, focusing on institutional and retail news.',
        websiteUrl: 'https://fxnewsgroup.com/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '2.5K',
        xUrl: 'https://twitter.com/FXNewsgroup',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'FxNews.Media',
        description: 'Provides global Forex news and market updates, with a focus on broker developments and regulatory changes.',
        websiteUrl: 'https://www.fxnews.media/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '5.1K',
        xUrl: 'https://twitter.com/FxNewsMedia',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'Market Traders Daily',
        description: 'Offers daily analysis, trading PDFs, trading system, linking pro traders with newbies, trading robots, and strategies.',
        websiteUrl: 'https://www.markettradersdaily.com/',
        facebookFollowers: '15K',
        facebookUrl: 'https://www.facebook.com/MarketTradersDaily',
        xFollowers: 'N/A',
        xUrl: 'N/A',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Education',
        country: 'USA'
    },
    {
        name: 'Forex Trading Blog (ForexBrokers.com)',
        description: 'Offers objective, unbiased Forex broker reviews, educational resources, and the latest Forex market news.',
        websiteUrl: 'https://www.forexbrokers.com/news',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '1.6K',
        xUrl: 'https://twitter.com/forexbrokerscom',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Review Site',
        country: 'USA'
    },
    {
        name: 'Orbex',
        description: 'Provides market research, analysis, and news for Forex and CFD traders.',
        websiteUrl: 'https://www.orbex.com/blog/en',
        facebookFollowers: '213K',
        facebookUrl: 'https://www.facebook.com/Orbex',
        xFollowers: '7.1K',
        xUrl: 'https://twitter.com/Orbex',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Brokerage',
        country: 'Global'
    },
    {
        name: 'HotForex - Market News',
        description: 'Award-winning broker offering Forex market analysis and news updates.',
        websiteUrl: 'https://www.hotforex.com/sv/en/forex-news.html',
        facebookFollowers: '694.5K',
        facebookUrl: 'https://www.facebook.com/hotforex',
        xFollowers: '18.2K',
        xUrl: 'https://twitter.com/HotForex_INT',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Brokerage',
        country: 'Global'
    },
    {
        name: 'Forexfraud',
        description: 'Designed to inform traders and investors about forex scams, commodity fraud, and other investment scams, along with market news and insights.',
        websiteUrl: 'https://www.forexfraud.com/news/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '1.8K',
        xUrl: 'https://twitter.com/Forex_Fraud',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'FX Empire',
        description: 'Offers real-time financial news, economic calendar, market analysis, and broker reviews.',
        websiteUrl: 'https://www.fxempire.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/fxempire',
        xFollowers: '27.2K',
        xUrl: 'https://twitter.com/FXEmpirecom',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    },
    {
        name: 'Finance Brokerage',
        description: 'Leading source of recent economy, trading, and Forex news, including Forex Brokers Reviews and trading education.',
        websiteUrl: 'https://www.financebrokerage.com/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: '1.4K',
        xUrl: 'https://twitter.com/financebroker',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    }
];
