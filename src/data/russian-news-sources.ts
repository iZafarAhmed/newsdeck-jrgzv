
export interface RussianNewsSource {
  name: string;
  websiteUrl: string;
  description: string;
  format: string;
}

export const russianNewsSources: RussianNewsSource[] = [
  {
    name: 'TASS',
    websiteUrl: 'https://tass.com/',
    description: 'A major state-owned news agency in Russia, founded in 1904.',
    format: 'News Agency',
  },
  {
    name: 'Interfax',
    websiteUrl: 'https://www.interfax.com/',
    description: 'A leading independent news agency in Russia, providing political and business news.',
    format: 'News Agency',
  },
  {
    name: 'RIA Novosti',
    websiteUrl: 'https://ria.ru/',
    description: 'One of the largest news agencies in Russia, part of the Rossiya Segodnya media group.',
    format: 'News Agency',
  },
  {
    name: 'Kommersant',
    websiteUrl: 'https://www.kommersant.ru/',
    description: 'A nationally distributed daily newspaper devoted mainly to politics and business.',
    format: 'Broadsheet',
  },
  {
    name: 'Izvestia',
    websiteUrl: 'https://iz.ru/',
    description: 'A high-circulation daily newspaper in Russia with a long history.',
    format: 'Broadsheet',
  },
  {
    name: 'Vedomosti',
    websiteUrl: 'https://www.vedomosti.ru/',
    description: 'A leading Russian-language business daily newspaper.',
    format: 'Broadsheet',
  },
  {
    name: 'Argumenty i Fakty (AiF)',
    websiteUrl: 'https://aif.ru/',
    description: 'One of the most popular weekly newspapers in Russia, covering a wide range of topics.',
    format: 'Newspaper',
  },
  {
    name: 'Rossiyskaya Gazeta',
    websiteUrl: 'https://rg.ru/',
    description: 'The official government newspaper of record in Russia, publishing new laws and decrees.',
    format: 'Government Newspaper',
  },
  {
    name: 'Meduza',
    websiteUrl: 'https://meduza.io/',
    description: 'An independent news website based in Latvia, publishing in Russian and English.',
    format: 'Digital',
  },
  {
    name: 'The Moscow Times',
    websiteUrl: 'https://www.themoscowtimes.com/',
    description: 'An independent English-language online newspaper based in Amsterdam.',
    format: 'Digital',
  },
  {
    name: 'RBK',
    websiteUrl: 'https://www.rbc.ru/',
    description: 'A large multimedia holding in Russia, specializing in business news.',
    format: 'Digital / TV',
  },
  {
    name: 'Lenta.ru',
    websiteUrl: 'https://lenta.ru/',
    description: 'A popular Russian-language online news publication.',
    format: 'Digital',
  },
  {
    name: 'Sport Express',
    websiteUrl: 'https://www.sport-express.ru/',
    description: 'A leading Russian daily sports newspaper.',
    format: 'Sports Newspaper',
  },
  {
    name: 'Channel One Russia (Pervyy Kanal)',
    websiteUrl: 'https://www.1tv.ru/',
    description: 'The first and most-watched television channel in Russia.',
    format: 'Television',
  },
  {
    name: 'Russia-1 (Rossiya-1)',
    websiteUrl: 'https://smotrim.ru/brand/12901',
    description: 'A state-owned Russian television channel, part of the VGTRK network.',
    format: 'Television',
  },
];
