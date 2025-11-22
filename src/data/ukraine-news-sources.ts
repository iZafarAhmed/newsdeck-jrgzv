
export interface UkraineNewsSource {
  name: string;
  websiteUrl: string;
  description: string;
  format: string;
}

export const ukraineNewsSources: UkraineNewsSource[] = [
  {
    name: "Ukrainska Pravda",
    websiteUrl: "https://www.pravda.com.ua/eng/",
    description: "One of Ukraine's leading independent online newspapers, with an English edition.",
    format: "Digital",
  },
  {
    name: "The Kyiv Independent",
    websiteUrl: "https://kyivindependent.com/",
    description: "Ukraine's main English-language media outlet, created by former Kyiv Post journalists.",
    format: "Digital",
  },
  {
    name: "Hromadske",
    websiteUrl: "https://en.hromadske.ua/",
    description: "A digital broadcasting station known for its independent reporting.",
    format: "Digital / TV",
  },
  {
    name: "Ukrinform",
    websiteUrl: "https://www.ukrinform.net/",
    description: "The state information and news agency of Ukraine.",
    format: "News Agency",
  },
  {
    name: "NV (New Voice of Ukraine)",
    websiteUrl: "https://english.nv.ua/",
    description: "A prominent independent media house in Ukraine, offering news and analysis.",
    format: "Digital / Magazine",
  },
  {
    name: "Suspilne News",
    websiteUrl: "https://suspilne.media/eng/",
    description: "The news website of the Public Broadcasting Company of Ukraine.",
    format: "Broadcaster",
  },
  {
    name: "Interfax-Ukraine",
    websiteUrl: "https://en.interfax.com.ua/",
    description: "An independent news agency providing political and economic news.",
    format: "News Agency",
  },
  {
    name: "Liga.net",
    websiteUrl: "https://www.liga.net/",
    description: "A popular Ukrainian information and analytical portal (primarily in Ukrainian/Russian).",
    format: "Digital",
  },
  {
    name: "Babel",
    websiteUrl: "https://babel.ua/en",
    description: "An independent socio-political publication with a focus on fact-checking.",
    format: "Digital",
  },
  {
    name: "Censor.NET",
    websiteUrl: "https://censor.net/en",
    description: "A popular news and discussion portal covering politics and society.",
    format: "Digital",
  },
  {
    name: "Euromaidan Press",
    websiteUrl: "https://euromaidanpress.com/",
    description: "An online English-language newspaper focused on Ukrainian news and analysis.",
    format: "Digital",
  },
  {
    name: "Zaborona",
    websiteUrl: "https://zaborona.com/en/",
    description: "An independent media outlet that focuses on long-form stories and investigations.",
    format: "Digital",
  },
  {
    name: "The New Voice of Ukraine",
    websiteUrl: "https://english.nv.ua/",
    description: "The English version of the respected NV media outlet.",
    format: "Digital",
  },
  {
    name: "Korrespondent.net",
    websiteUrl: "https://en.korrespondent.net/",
    description: "A major news portal with coverage in Ukrainian, Russian, and English.",
    format: "Digital",
  },
  {
    name: "Ukrainian Week",
    websiteUrl: "https://ukrainianweek.com/",
    description: "An illustrated weekly magazine covering politics, economics, and culture.",
    format: "Magazine / Digital",
  },
];
