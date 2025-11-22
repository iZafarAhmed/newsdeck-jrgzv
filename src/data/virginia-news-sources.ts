
export interface VirginiaNewsSource {
  name: string;
  websiteUrl: string;
  description: string;
  format: string;
}

export const virginiaNewsSources: VirginiaNewsSource[] = [
  {
    name: 'The Virginian-Pilot',
    websiteUrl: 'https://www.pilotonline.com/',
    description: 'The largest daily newspaper in southeastern Virginia, based in Norfolk.',
    format: 'Broadsheet',
  },
  {
    name: 'Richmond Times-Dispatch',
    websiteUrl: 'https://richmond.com/',
    description: 'The primary daily newspaper in Richmond, the capital of Virginia.',
    format: 'Broadsheet',
  },
  {
    name: 'The Roanoke Times',
    websiteUrl: 'https://roanoke.com/',
    description: 'Covering news in the Roanoke Region of southwest Virginia.',
    format: 'Broadsheet',
  },
  {
    name: 'The Daily Progress',
    websiteUrl: 'https://dailyprogress.com/',
    description: 'The primary daily newspaper for Charlottesville and the surrounding area.',
    format: 'Broadsheet',
  },
  {
    name: 'Virginia Mercury',
    websiteUrl: 'https://www.virginiamercury.com/',
    description: 'An independent, nonprofit online news organization covering Virginia government and policy.',
    format: 'Digital',
  },
  {
    name: 'WTOP News',
    websiteUrl: 'https://wtop.com/local/virginia/',
    description: 'Washington D.C. based news station providing significant coverage of Northern Virginia.',
    format: 'Radio / Digital',
  },
  {
    name: 'WTVR CBS 6',
    websiteUrl: 'https://www.wtvr.com/',
    description: 'CBS-affiliated television station licensed to Richmond, Virginia.',
    format: 'Television',
  },
  {
    name: 'WAVY-TV 10',
    websiteUrl: 'https://www.wavy.com/',
    description: 'NBC-affiliated television station serving the Hampton Roads area.',
    format: 'Television',
  },
  {
    name: 'InsideNoVa',
    websiteUrl: 'https://www.insidenova.com/',
    description: 'A source for local news, sports, and features in Northern Virginia.',
    format: 'Digital / Newspaper',
  },
  {
    name: 'VPM News',
    websiteUrl: 'https://www.vpm.org/news',
    description: 'Virginia\'s home for public media, providing NPR and local news coverage.',
    format: 'Radio / Digital',
  },
  {
    name: 'The Washington Post (Virginia)',
    websiteUrl: 'https://www.washingtonpost.com/local/virginia-politics/',
    description: 'Comprehensive coverage of Virginia politics and news from The Washington Post.',
    format: 'Broadsheet / Digital',
  },
  {
    name: 'Cardinal News',
    websiteUrl: 'https://cardinalnews.org/',
    description: 'A nonprofit, nonpartisan online news source covering Southwest and Southside Virginia.',
    format: 'Digital',
  },
  {
    name: 'Loudoun Times-Mirror',
    websiteUrl: 'https://www.loudountimes.com/',
    description: 'A weekly newspaper covering Loudoun County, Virginia.',
    format: 'Newspaper',
  },
  {
    name: 'The Free Lance-Star',
    websiteUrl: 'https://fredericksburg.com/',
    description: 'Daily newspaper serving the city of Fredericksburg and surrounding areas.',
    format: 'Broadsheet',
  },
  {
    name: 'Blue Virginia',
    websiteUrl: 'https://bluevirginia.us/',
    description: 'A community blog focusing on Virginia politics from a progressive perspective.',
    format: 'Blog',
  },
];
