
export interface StockMarketNewsSource {
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

export const stockMarketNewsSources: StockMarketNewsSource[] = [
    {
        name: 'MarketWatch',
        description: 'Tracks the pulse of markets for engaged investors, providing the latest stock market, financial, and business news, including stock quotes, personal finance advice, and company news.',
        websiteUrl: 'https://www.marketwatch.com/',
        facebookFollowers: '1.6M',
        facebookUrl: 'https://www.facebook.com/marketwatch',
        xFollowers: '4.6M',
        xUrl: 'https://twitter.com/MarketWatch',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'USA'
    },
    {
        name: 'Bloomberg',
        description: "Provides business and financial news, market data, stock quotes, and videos, offering a comprehensive view of the world's markets.",
        websiteUrl: 'https://www.bloomberg.com/',
        facebookFollowers: '4.5M',
        facebookUrl: 'https://www.facebook.com/bloombergbusiness',
        xFollowers: '767.2K',
        xUrl: 'https://twitter.com/business',
        instagramFollowers: '673.2K',
        instagramUrl: 'https://www.instagram.com/bloombergbusiness/',
        type: 'News Agency',
        country: 'USA'
    },
    {
        name: 'Yahoo Finance',
        description: 'Offers free stock quotes, up-to-date news, portfolio management resources, international market data, social interaction, and mortgage rates to help manage financial life.',
        websiteUrl: 'https://finance.yahoo.com/',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/yahoofinance',
        xFollowers: '1.9M',
        xUrl: 'https://twitter.com/YahooFinance',
        instagramFollowers: 'N/A',
        instagramUrl: 'https://www.instagram.com/yahoofinance/',
        type: 'News Website',
        country: 'USA'
    },
    {
        name: 'The Wall Street Journal (WSJ) - Markets',
        description: 'Provides the latest stock news and financial data, covering U.S. and world stock markets, including charts, stock quotes, and analysis.',
        websiteUrl: 'https://www.wsj.com/news/markets',
        facebookFollowers: '7.6M',
        facebookUrl: 'https://www.facebook.com/wsj',
        xFollowers: '20.8M',
        xUrl: 'https://twitter.com/wsj',
        instagramFollowers: '5.4M',
        instagramUrl: 'https://www.instagram.com/wsj/',
        type: 'Daily Newspaper',
        country: 'USA'
    },
    {
        name: 'CNN Business',
        description: 'Provides the latest financial news, stock market updates, and business features.',
        websiteUrl: 'https://edition.cnn.com/business',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/CNNBusiness',
        xFollowers: '532K',
        xUrl: 'https://twitter.com/CNNBusiness',
        instagramFollowers: '1.3M',
        instagramUrl: 'https://www.instagram.com/cnnbusiness/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'CNBC',
        description: 'The recognized world leader in business news and financial market coverage.',
        websiteUrl: 'https://www.cnbc.com/',
        facebookFollowers: '4.6M',
        facebookUrl: 'https://www.facebook.com/cnbc',
        xFollowers: '5.4M',
        xUrl: 'https://twitter.com/CNBC',
        instagramFollowers: '2.9M',
        instagramUrl: 'https://www.instagram.com/cnbc/',
        type: 'News Broadcasting',
        country: 'USA'
    },
    {
        name: 'Investing.com',
        description: 'A leading global financial portal offering real-time data, quotes, charts, financial tools, breaking news, and analysis across 250 exchanges.',
        websiteUrl: 'https://www.investing.com/',
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
        name: 'Reuters - Stock Market News',
        description: 'Provides breaking stock market news, including current trading prices, global stock market indexes, and investment information.',
        websiteUrl: 'https://www.reuters.com/markets/stocks',
        facebookFollowers: '8.1M',
        facebookUrl: 'https://www.facebook.com/Reuters',
        xFollowers: '2.8M',
        xUrl: 'https://twitter.com/ReutersBiz',
        instagramFollowers: '5.2M',
        instagramUrl: 'https://www.instagram.com/reuters/',
        type: 'News Agency',
        country: 'UK'
    },
    {
        name: 'Seeking Alpha',
        description: 'A platform for investment analysis, opinions, and news, providing a voice to individual investors and financial experts.',
        websiteUrl: 'https://seekingalpha.com/',
        facebookFollowers: '67.1K',
        facebookUrl: 'https://www.facebook.com/SeekingAlpha',
        xFollowers: '294.7K',
        xUrl: 'https://twitter.com/SeekingAlpha',
        instagramFollowers: '25.9K',
        instagramUrl: 'https://www.instagram.com/seekingalpha/',
        type: 'Website',
        country: 'USA'
    },
    {
        name: 'Investopedia',
        description: 'Offers education and guidance for investing and financial knowledge, helping investors navigate complex financial decisions with articles, tutorials, and a financial dictionary.',
        websiteUrl: 'https://www.investopedia.com/',
        facebookFollowers: '1.3M',
        facebookUrl: 'https://www.facebook.com/Investopedia',
        xFollowers: '235.6K',
        xUrl: 'https://twitter.com/Investopedia',
        instagramFollowers: '359K',
        instagramUrl: 'https://www.instagram.com/investopedia/',
        type: 'Website',
        country: 'USA'
    },
    {
        name: 'The Motley Fool',
        description: 'Provides investment advice, stock picks, and analysis with a focus on helping the world invest better.',
        websiteUrl: 'https://www.fool.com/',
        facebookFollowers: '942K',
        facebookUrl: 'https://www.facebook.com/themotleyfool',
        xFollowers: '809K',
        xUrl: 'https://twitter.com/themotleyfool',
        instagramFollowers: '137K',
        instagramUrl: 'https://www.instagram.com/themotleyfool/',
        type: 'Website',
        country: 'USA'
    },
    {
        name: 'Benzinga',
        description: 'A financial news and data platform providing timely, actionable market information, including real-time quotes, news, and analysis.',
        websiteUrl: 'https://www.benzinga.com/',
        facebookFollowers: '144K',
        facebookUrl: 'https://www.facebook.com/Benzinga',
        xFollowers: '258.9K',
        xUrl: 'https://twitter.com/Benzinga',
        instagramFollowers: '144K',
        instagramUrl: 'https://www.instagram.com/benzinga/',
        type: 'Website',
        country: 'USA'
    },
    {
        name: 'Zacks Investment Research',
        description: 'Specializes in investment research, providing stock analysis, recommendations, and in-depth reports.',
        websiteUrl: 'https://www.zacks.com/',
        facebookFollowers: '93K',
        facebookUrl: 'https://www.facebook.com/zacks.investment.research',
        xFollowers: '161K',
        xUrl: 'https://twitter.com/ZacksResearch',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Research',
        country: 'USA'
    },
    {
        name: 'TradingView',
        description: 'A charting platform and social network for traders and investors, featuring super-charged charts, analysis tools, and market discussions.',
        websiteUrl: 'https://www.tradingview.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/tradingview',
        xFollowers: '1.1M',
        xUrl: 'https://twitter.com/tradingview',
        instagramFollowers: '350K',
        instagramUrl: 'https://www.instagram.com/tradingview/',
        type: 'Platform',
        country: 'USA'
    },
    {
        name: 'InvestorPlace',
        description: 'Offers actionable investment ideas and financial news, covering stocks, options, and cryptocurrencies.',
        websiteUrl: 'https://investorplace.com/',
        facebookFollowers: '54K',
        facebookUrl: 'https://www.facebook.com/investorplace',
        xFollowers: '121K',
        xUrl: 'https://twitter.com/InvestorPlace',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Website',
        country: 'USA'
    },
    {
        name: 'Fidelity',
        description: 'A multinational financial services corporation offering a wide range of investment products, wealth management, and retirement services.',
        websiteUrl: 'https://www.fidelity.com/',
        facebookFollowers: '296K',
        facebookUrl: 'https://www.facebook.com/fidelity',
        xFollowers: '206.5K',
        xUrl: 'https://twitter.com/Fidelity',
        instagramFollowers: '85K',
        instagramUrl: 'https://www.instagram.com/fidelity/',
        type: 'Financial Services',
        country: 'USA'
    },
    {
        name: 'U.S. News & World Report - Stock Market',
        description: 'Provides stock market and investment coverage, including financial tips, news, and analysis from experts.',
        websiteUrl: 'https://money.usnews.com/investing/stock-market',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/usnews',
        xFollowers: '192.6K',
        xUrl: 'https://twitter.com/usnews',
        instagramFollowers: '108.3K',
        instagramUrl: 'https://www.instagram.com/usnews/',
        type: 'Digital',
        country: 'USA'
    },
    {
        name: 'Barchart',
        description: 'A provider of market data and information, offering futures, stocks, and options quotes, charts, and analysis.',
        websiteUrl: 'https://www.barchart.com/',
        facebookFollowers: '17K',
        facebookUrl: 'https://www.facebook.com/Barchart',
        xFollowers: '22.8K',
        xUrl: 'https://twitter.com/Barchart',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Data Provider',
        country: 'USA'
    },
    {
        name: 'Financial Express',
        description: 'An Indian business newspaper providing in-depth coverage of finance, stock markets, and economy.',
        websiteUrl: 'https://www.financialexpress.com/',
        facebookFollowers: '1.9M',
        facebookUrl: 'https://www.facebook.com/thefinancialexpress',
        xFollowers: '814.9K',
        xUrl: 'https://twitter.com/FinancialXpress',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'Daily Newspaper',
        country: 'India'
    },
    {
        name: 'Stock Market News (StockMarketNews.Today)',
        description: 'Provides daily stock market news, analysis, and updates on global market trends.',
        websiteUrl: 'https://stockmarketnews.today/',
        facebookFollowers: 'N/A',
        facebookUrl: 'N/A',
        xFollowers: 'N/A',
        xUrl: 'N/A',
        instagramFollowers: 'N/A',
        instagramUrl: 'N/A',
        type: 'News Website',
        country: 'Global'
    }
];
