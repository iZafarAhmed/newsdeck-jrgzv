
export interface WisconsinNewsSource {
  name: string;
  websiteUrl: string;
  description: string;
  format: string;
}

export const wisconsinNewsSources: WisconsinNewsSource[] = [
  {
    name: 'Milwaukee Journal Sentinel',
    websiteUrl: 'https://www.jsonline.com/',
    description: 'The largest newspaper in Wisconsin, providing statewide coverage.',
    format: 'Broadsheet',
  },
  {
    name: 'Wisconsin State Journal',
    websiteUrl: 'https://madison.com/wsj/',
    description: 'A daily newspaper based in Madison, serving south-central Wisconsin.',
    format: 'Broadsheet',
  },
  {
    name: 'Wisconsin Public Radio (WPR)',
    websiteUrl: 'https://www.wpr.org/',
    description: 'A network of 38 public radio stations providing news, music, and cultural programming.',
    format: 'Radio / Digital',
  },
  {
    name: 'The Cap Times',
    websiteUrl: 'https://captimes.com/',
    description: 'A progressive, digital-first news organization based in Madison.',
    format: 'Digital / Newspaper',
  },
  {
    name: 'Green Bay Press-Gazette',
    websiteUrl: 'https://www.greenbaypressgazette.com/',
    description: 'A daily newspaper serving Green Bay and northeastern Wisconsin.',
    format: 'Broadsheet',
  },
  {
    name: 'The Post-Crescent',
    websiteUrl: 'https://www.postcrescent.com/',
    description: 'A daily newspaper serving Appleton and the Fox Cities area.',
    format: 'Broadsheet',
  },
  {
    name: 'WTMJ-TV (TMJ4)',
    websiteUrl: 'https://www.tmj4.com/',
    description: 'NBC-affiliated television station licensed to Milwaukee.',
    format: 'Television',
  },
  {
    name: 'WISN-TV 12',
    websiteUrl: 'https://www.wisn.com/',
    description: 'ABC-affiliated television station serving the Milwaukee area.',
    format: 'Television',
  },
  {
    name: 'La Crosse Tribune',
    websiteUrl: 'https://lacrossetribune.com/',
    description: 'A daily newspaper serving La Crosse and the Coulee Region.',
    format: 'Broadsheet',
  },
  {
    name: 'Eau Claire Leader-Telegram',
    websiteUrl: 'https://www.leadertelegram.com/',
    description: 'A daily newspaper serving Eau Claire and the Chippewa Valley.',
    format: 'Broadsheet',
  },
  {
    name: 'WisPolitics.com',
    websiteUrl: 'https://www.wispolitics.com/',
    description: 'An independent, nonpartisan news service covering Wisconsin politics and government.',
    format: 'Digital',
  },
  {
    name: 'Urban Milwaukee',
    websiteUrl: 'https://urbanmilwaukee.com/',
    description: 'An online publication focused on Milwaukee news, politics, and real estate.',
    format: 'Digital',
  },
  {
    name: 'The Kenosha News',
    websiteUrl: 'https://www.kenoshanews.com/',
    description: 'A daily newspaper serving Kenosha and southeastern Wisconsin.',
    format: 'Broadsheet',
  },
  {
    name: 'The Racine Journal Times',
    websiteUrl: 'https://journaltimes.com/',
    description: 'A daily newspaper serving Racine County.',
    format: 'Broadsheet',
  },
  {
    name: 'UpNorthNews',
    websiteUrl: 'https://upnorthnewswi.com/',
    description: 'A progressive-leaning digital news outlet focused on Wisconsin issues.',
    format: 'Digital',
  },
];
