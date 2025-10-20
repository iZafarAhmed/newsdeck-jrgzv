
export interface DubaiFinanceNewsSource {
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

export const dubaiFinanceNewsSources: DubaiFinanceNewsSource[] = [
    {
        name: 'Zawya',
        description: 'A premier platform delivering vital news and insights to professionals across the MENA region, offering real-time updates on regional and global markets.',
        websiteUrl: 'https://www.zawya.com/en/mena',
        facebookFollowers: '62.4K',
        facebookUrl: 'https://www.facebook.com/Zawya',
        xFollowers: '26.6K',
        xUrl: 'https://twitter.com/Zawya',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'Platform',
        country: 'UAE'
    },
    {
        name: 'Emirates News Agency (WAM) - Economy',
        description: 'Provides breaking and latest news on the economy of the UAE and global markets from the official news agency of the UAE.',
        websiteUrl: 'https://wam.ae/en/economy',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wamnews',
        xFollowers: '1.1M',
        xUrl: 'https://twitter.com/wamnews',
        instagramFollowers: '440.4K',
        instagramUrl: 'https://www.instagram.com/wamnews',
        type: 'News Agency',
        country: 'UAE'
    },
    {
        name: 'Arabian Business - Finance',
        description: 'A top resource for business and financial news, offering the latest headlines and market updates from the Middle East and beyond.',
        websiteUrl: 'https://www.arabianbusiness.com/finance',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/arabianbusiness',
        xFollowers: '431.1K',
        xUrl: 'https://twitter.com/arabianbusiness',
        instagramFollowers: '104.9K',
        instagramUrl: 'https://www.instagram.com/arabianbusiness',
        type: 'News Website',
        country: 'UAE'
    },
    {
        name: 'Khaleej Times - Business',
        description: 'Covers the latest business news, money, markets, finance, and companies in the UAE, GCC, and across the world.',
        websiteUrl: 'https://www.khaleejtimes.com/business',
        facebookFollowers: '5.7M',
        facebookUrl: 'https://www.facebook.com/khaleejtimes',
        xFollowers: '3.2M',
        xUrl: 'https://twitter.com/khaleejtimes',
        instagramFollowers: '2.1M',
        instagramUrl: 'https://www.instagram.com/khaleejtimes',
        type: 'Newspaper',
        country: 'UAE'
    },
    {
        name: 'Gulf News - Business',
        description: 'Offers the latest business news, market updates, and financial analysis in the UAE, GCC, and international markets.',
        websiteUrl: 'https://gulfnews.com/business',
        facebookFollowers: '5.1M',
        facebookUrl: 'https://www.facebook.com/GulfNews.UAE',
        xFollowers: '3M',
        xUrl: 'https://twitter.com/gulf_news',
        instagramFollowers: '1.6M',
        instagramUrl: 'https://www.instagram.com/gulfnews',
        type: 'Newspaper',
        country: 'UAE'
    },
    {
        name: 'The National - Business',
        description: 'Provides breaking news, updates, and analysis on the business, finance, banking, and real estate sectors in the UAE, Middle East, and worldwide.',
        websiteUrl: 'https://www.thenationalnews.com/business',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/TheNationalNews',
        xFollowers: '768.9K',
        xUrl: 'https://twitter.com/TheNationalNews',
        instagramFollowers: '247.9K',
        instagramUrl: 'https://www.instagram.com/thenationalnews.com',
        type: 'Newspaper',
        country: 'UAE'
    },
    {
        name: 'Dubai Financial Market (DFM) News',
        description: 'The official source for news and announcements from the Dubai Financial Market, covering listings, trading updates, and corporate actions.',
        websiteUrl: 'https://www.dfm.ae/en/media-centre/news',
        facebookFollowers: 'N/A',
        facebookUrl: '#',
        xFollowers: '82.2K',
        xUrl: 'https://twitter.com/DFMalerts',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'Official',
        country: 'UAE'
    },
    {
        name: 'Emirates Business Magazine',
        description: 'An online magazine dedicated to providing the latest business, finance, and economic news and insights focused on the UAE and the Middle East.',
        websiteUrl: 'https://www.emiratesbusiness.ae/',
        facebookFollowers: '19.3K',
        facebookUrl: 'https://www.facebook.com/EmiratesBusiness.ae',
        xFollowers: '8.1K',
        xUrl: 'https://twitter.com/EBMagazineME',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'Magazine',
        country: 'UAE'
    },
    {
        name: 'Dubai Economy',
        description: "The official website for Dubai's Department of Economic Development, providing news, reports, and services related to business, investment, and economic growth in Dubai.",
        websiteUrl: 'https://dubaieconomy.ae/',
        facebookFollowers: '242.4K',
        facebookUrl: 'https://www.facebook.com/DubaiEconomy',
        xFollowers: '146.4K',
        xUrl: 'https://twitter.com/Dubai_DED',
        instagramFollowers: '104.9K',
        instagramUrl: 'https://www.instagram.com/dubai_ded',
        type: 'Official',
        country: 'UAE'
    },
    {
        name: 'Dubai International Financial Centre (DIFC) News',
        description: 'Provides official news and updates from the DIFC, the leading financial hub in the Middle East, Africa, and South Asia (MEASA) region.',
        websiteUrl: 'https://www.difc.ae/news/media-center/',
        facebookFollowers: '16.6K',
        facebookUrl: 'https://www.facebook.com/DIFC',
        xFollowers: '31.7K',
        xUrl: 'https://twitter.com/DIFC',
        instagramFollowers: '15.1K',
        instagramUrl: 'https://www.instagram.com/difc',
        type: 'Official',
        country: 'UAE'
    },
    {
        name: 'Commercial Bank of Dubai (CBD) - News',
        description: "Provides official announcements and news related to the bank's activities and the UAE's banking sector.",
        websiteUrl: 'https://www.cbd.ae/about-us/media-centre/latest-news',
        facebookFollowers: '322.9K',
        facebookUrl: 'https://www.facebook.com/CBD.UAE',
        xFollowers: '11.2K',
        xUrl: 'https://twitter.com/CBDUAE',
        instagramFollowers: '7.7K',
        instagramUrl: 'https://www.instagram.com/cbduae',
        type: 'Bank',
        country: 'UAE'
    },
    {
        name: 'Emirates NBD - Newsroom',
        description: 'Official source for press releases, news, and reports from Emirates NBD, one of the leading banking groups in the Middle East.',
        websiteUrl: 'https://www.emiratesnbd.com/en/media-centre/newsroom',
        facebookFollowers: '649.9K',
        facebookUrl: 'https://www.facebook.com/EmiratesNBD',
        xFollowers: '76.5K',
        xUrl: 'https://twitter.com/EmiratesNBD',
        instagramFollowers: '38K',
        instagramUrl: 'https://www.instagram.com/emiratesnbd_ae',
        type: 'Bank',
        country: 'UAE'
    },
    {
        name: 'Dubai Islamic Bank (DIB) - News',
        description: 'Provides the latest news, announcements, and press releases related to the bank and the Islamic finance sector.',
        websiteUrl: 'https://www.dib.ae/media-center/news',
        facebookFollowers: '154K',
        facebookUrl: 'https://www.facebook.com/dib.uae',
        xFollowers: '12.6K',
        xUrl: 'https://twitter.com/DIBtoday',
        instagramFollowers: '12.8K',
        instagramUrl: 'https://www.instagram.com/dibtoday',
        type: 'Bank',
        country: 'UAE'
    },
    {
        name: 'Dubai Chamber of Commerce - News',
        description: "Provides news, press releases, and publications related to Dubai's business community, trade, and economic development.",
        websiteUrl: 'https://www.dubaichamber.com/en/media-center/news-and-publications/newsroom/',
        facebookFollowers: '22.1K',
        facebookUrl: 'https://www.facebook.com/dubaichamber',
        xFollowers: '49.3K',
        xUrl: 'https://twitter.com/dubaichamber',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/dubaichamber',
        type: 'Official',
        country: 'UAE'
    },
    {
        name: 'Dubai Government Financial News',
        description: 'Official financial news, reports, and budget information from the Dubai Government, providing transparency on public finance.',
        websiteUrl: 'https://www.dubaigov.ae/en/Government/Pages/Finance.aspx',
        facebookFollowers: '81.1K',
        facebookUrl: 'https://www.facebook.com/DubaiGov',
        xFollowers: '102.6K',
        xUrl: 'https://twitter.com/DubaiGov',
        instagramFollowers: '81.1K',
        instagramUrl: 'https://www.instagram.com/dubai',
        type: 'Official',
        country: 'UAE'
    },
    {
        name: 'The Fintech Times - Middle East',
        description: 'Covers the latest news, trends, and innovation in the Financial Technology (FinTech) sector across the Middle East, with a strong focus on Dubai.',
        websiteUrl: 'https://thefintechtimes.com/category/middle-east/',
        facebookFollowers: '6.9K',
        facebookUrl: 'https://www.facebook.com/TheFintechTimes',
        xFollowers: '34.1K',
        xUrl: 'https://twitter.com/TheFintechTimes',
        instagramFollowers: '4K',
        instagramUrl: 'https://www.instagram.com/thefintechtimes',
        type: 'News Website',
        country: 'UAE'
    },
    {
        name: 'Financial Express - Middle East',
        description: "Provides the latest financial and business news from the Middle East, including Dubai's markets and economic developments.",
        websiteUrl: 'https://www.financialexpress.com/world/middle-east/',
        facebookFollowers: '4.8M',
        facebookUrl: 'https://www.facebook.com/thefinancialexpress',
        xFollowers: '1.1M',
        xUrl: 'https://twitter.com/financialxpress',
        instagramFollowers: '247.9K',
        instagramUrl: 'https://www.instagram.com/financialexpress',
        type: 'Newspaper',
        country: 'UAE'
    },
    {
        name: 'Dubai Global',
        description: "An online platform providing news, analysis, and insights on Dubai's economy, trade, and investment landscape.",
        websiteUrl: 'https://dubaiglobal.com/',
        facebookFollowers: '17.5K',
        facebookUrl: 'https://www.facebook.com/dubaiglobalnews',
        xFollowers: '2.9K',
        xUrl: 'https://twitter.com/DubaiGlobalNews',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'Platform',
        country: 'UAE'
    },
    {
        name: 'Financial News (FN) Middle East',
        description: 'Offers news and analysis on the investment banking, asset management, and trading industries in the Middle East, often focusing on the UAE and Saudi Arabia.',
        websiteUrl: 'https://www.fnlondon.com/region/middle-east',
        facebookFollowers: '21K',
        facebookUrl: 'https://www.facebook.com/FinancialNews',
        xFollowers: '51.5K',
        xUrl: 'https://twitter.com/FinancialNews',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'News Website',
        country: 'UAE'
    },
    {
        name: 'Middle East Economic Digest (MEED) - Finance',
        description: 'Provides business intelligence, market reports, and news focused on finance, banking, and project investment across the Middle East.',
        websiteUrl: 'https://www.meed.com/finance',
        facebookFollowers: 'N/A',
        facebookUrl: '#',
        xFollowers: '44.1K',
        xUrl: 'https://twitter.com/MEED_NEWS',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'Intelligence',
        country: 'UAE'
    },
    {
        name: 'Trade Arabia',
        description: 'A leading business news and information portal for the Middle East, covering sectors like finance, industry, and trade, with extensive coverage of Dubai.',
        websiteUrl: 'https://www.tradearabia.com/',
        facebookFollowers: '184.6K',
        facebookUrl: 'https://www.facebook.com/TradeArabia',
        xFollowers: '10.1K',
        xUrl: 'https://twitter.com/TradeArabia',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'Portal',
        country: 'UAE'
    },
    {
        name: 'Gulf Business',
        description: 'Provides comprehensive business and financial news, interviews, and features from the GCC region, including corporate, market, and wealth coverage.',
        websiteUrl: 'https://gulfbusiness.com/',
        facebookFollowers: '167.3K',
        facebookUrl: 'https://www.facebook.com/GulfBusiness',
        xFollowers: '77.2K',
        xUrl: 'https://twitter.com/GulfBusiness',
        instagramFollowers: '34.6K',
        instagramUrl: 'https://www.instagram.com/gulfbusiness',
        type: 'News Website',
        country: 'UAE'
    },
    {
        name: 'Middle East Business Magazine & News',
        description: 'Offers news, articles, and analysis on various business sectors in the Middle East, with dedicated content on finance and investments.',
        websiteUrl: 'https://www.middleeast-business.com/',
        facebookFollowers: '2.1K',
        facebookUrl: 'https://www.facebook.com/middleeastbusinessmagazine',
        xFollowers: '6.4K',
        xUrl: 'https://twitter.com/MiddleEastBusin',
        instagramFollowers: 'N/A',
        instagramUrl: '#',
        type: 'Magazine',
        country: 'UAE'
    },
    {
        name: 'The Economist - Middle East and Africa',
        description: 'Offers insightful analysis and commentary on economic, financial, and political developments in the Middle East, including Dubai.',
        websiteUrl: 'https://www.economist.com/middle-east-and-africa',
        facebookFollowers: '15.5M',
        facebookUrl: 'https://www.facebook.com/TheEconomist',
        xFollowers: '24.3M',
        xUrl: 'https://twitter.com/TheEconomist',
        instagramFollowers: '6.8M',
        instagramUrl: 'https://www.instagram.com/theeconomist',
        type: 'Magazine',
        country: 'UAE'
    },
    {
        name: 'Forbes Middle East - Finance',
        description: "The regional edition of Forbes, providing financial news, lists, and features focused on the Middle East's most influential companies and people.",
        websiteUrl: 'https://www.forbesmiddleeast.com/finance',
        facebookFollowers: '236.4K',
        facebookUrl: 'https://www.facebook.com/ForbesME',
        xFollowers: '166.4K',
        xUrl: 'https://twitter.com/ForbesME',
        instagramFollowers: '104.9K',
        instagramUrl: 'https://www.instagram.com/forbesmiddleeast',
        type: 'Magazine',
        country: 'UAE'
    }
];
