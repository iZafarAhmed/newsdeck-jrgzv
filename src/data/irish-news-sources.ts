
export interface IrishNewsSource {
  name: string;
  websiteUrl: string;
  description: string;
  format: string;
}

export const irishNewsSources: IrishNewsSource[] = [
  {
    name: "The Irish Times",
    websiteUrl: "https://www.irishtimes.com/",
    description: "Ireland's leading daily broadsheet newspaper, known for its in-depth analysis.",
    format: "Broadsheet",
  },
  {
    name: "RTÉ News",
    websiteUrl: "https://www.rte.ie/news/",
    description: "The news division of Raidió Teilifís Éireann, Ireland's National Public Service Broadcaster.",
    format: "Broadcaster",
  },
  {
    name: "Irish Independent",
    websiteUrl: "https://www.independent.ie/",
    description: "One of Ireland's largest-selling daily newspapers.",
    format: "Broadsheet",
  },
  {
    name: "TheJournal.ie",
    websiteUrl: "https://www.thejournal.ie/",
    description: "A leading online news source in Ireland, providing up-to-the-minute news.",
    format: "Digital",
  },
  {
    name: "Irish Examiner",
    websiteUrl: "https://www.irishexaminer.com/",
    description: "A national daily newspaper based in Cork.",
    format: "Broadsheet",
  },
  {
    name: "Belfast Telegraph",
    websiteUrl: "https://www.belfasttelegraph.co.uk/",
    description: "A major daily newspaper in Northern Ireland.",
    format: "Broadsheet",
  },
  {
    name: "The Irish News",
    websiteUrl: "https://www.irishnews.com/",
    description: "A daily newspaper based in Belfast with a nationalist perspective.",
    format: "Broadsheet",
  },
  {
    name: "Newstalk",
    websiteUrl: "https://www.newstalk.com/",
    description: "An independent national news, sport, and talk radio broadcaster.",
    format: "Radio",
  },
  {
    name: "BreakingNews.ie",
    websiteUrl: "https://www.breakingnews.ie/",
    description: "An online news service providing breaking news from Ireland and around the world.",
    format: "Digital",
  },
  {
    name: "IrishCentral",
    websiteUrl: "https://www.irishcentral.com/",
    description: "An online media company targeting the Irish diaspora.",
    format: "Digital",
  },
  {
    name: "UTV",
    websiteUrl: "https://www.itv.com/news/utv",
    description: "The ITV-branded television channel for Northern Ireland.",
    format: "Television",
  },
  {
    name: "The Anglo-Celt",
    websiteUrl: "https://www.anglocelt.ie/",
    description: "A weekly newspaper serving County Cavan and the surrounding region.",
    format: "Newspaper",
  },
  {
    name: "Donegal Daily",
    websiteUrl: "https://www.donegaldaily.com/",
    description: "The largest online news source in County Donegal.",
    format: "Digital",
  },
  {
    name: "Gript",
    websiteUrl: "https://gript.ie/",
    description: "An independent, right-leaning Irish digital media platform.",
    format: "Digital",
  },
  {
    name: "The Ditch",
    websiteUrl: "https://www.ontheditch.com/",
    description: "An investigative reporting outlet known for its political scoops.",
    format: "Digital",
  },
];
