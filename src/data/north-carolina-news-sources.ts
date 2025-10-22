
export interface NorthCarolinaNewsSource {
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

export const northCarolinaNewsSources: NorthCarolinaNewsSource[] = [
    {
        name: 'The Charlotte Observer',
        description: 'The largest newspaper in North Carolina, serving Charlotte and the surrounding area.',
        websiteUrl: 'https://www.charlotteobserver.com/',
        facebookFollowers: '450K',
        facebookUrl: 'https://www.facebook.com/charlotteobserver',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/theobserver',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/charlotteobserver/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The News & Observer',
        description: 'A major daily newspaper serving the Research Triangle area of North Carolina.',
        websiteUrl: 'https://www.newsobserver.com/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/newsobserver',
        xFollowers: '220K',
        xUrl: 'https://twitter.com/newsobserver',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/newsobserver/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'WRAL-TV',
        description: 'NBC affiliate in Raleigh, providing news and weather for the Triangle area.',
        websiteUrl: 'https://www.wral.com/',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/wral.com',
        xFollowers: '500K',
        xUrl: 'https://twitter.com/wral',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/wral/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WCNC Charlotte',
        description: 'NBC affiliate serving the Charlotte metropolitan area.',
        websiteUrl: 'https://www.wcnc.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/wcnccharlotte',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/wcnc',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/wcnccharlotte/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WBTV',
        description: 'CBS affiliate for Charlotte and the surrounding region.',
        websiteUrl: 'https://www.wbtv.com/',
        facebookFollowers: '1M',
        facebookUrl: 'https://www.facebook.com/wbtvnews',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/wbtv_news',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/wbtv_news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WXII 12 News',
        description: 'NBC affiliate serving the Piedmont Triad region.',
        websiteUrl: 'https://www.wxii12.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/wxii12news',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/wxii',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/wxii12news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Greensboro News & Record',
        description: 'The main daily newspaper for Greensboro and the Piedmont Triad.',
        websiteUrl: 'https://greensboro.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/newsandrecord',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/newsandrecord',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/newsandrecord/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Winston-Salem Journal',
        description: 'A daily newspaper serving Winston-Salem and Forsyth County.',
        websiteUrl: 'https://journalnow.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/winstonsalemjournal',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/journalnow',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/journalnow/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Asheville Citizen-Times',
        description: 'The daily newspaper for Asheville and Western North Carolina.',
        websiteUrl: 'https://www.citizen-times.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/citizentimes',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/citizentimes',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/citizentimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Fayetteville Observer',
        description: 'A daily newspaper serving Fayetteville and the Cape Fear region.',
        websiteUrl: 'https://www.fayobserver.com/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/fayettevilleobserver',
        xFollowers: '60K',
        xUrl: 'https://twitter.com/fayobserver',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/fayobserver/',
        type: 'Newspaper',
        country: 'USA'
    }
];
