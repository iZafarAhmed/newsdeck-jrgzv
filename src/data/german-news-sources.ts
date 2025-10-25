export interface GermanNewsSource {
    name: string;
    description: string;
    websiteUrl: string;
    facebookFollowers?: string;
    facebookUrl?: string;
    xFollowers?: string;
    xUrl?: string;
    instagramFollowers?: string;
    instagramUrl?: string;
    type: string;
    country: string;
}

export const germanNewsSources: GermanNewsSource[] = [
    {
        name: 'Deutsche Welle (DW)',
        description: 'Germany’s international broadcaster, providing news and information in 30 languages.',
        websiteUrl: 'https://www.dw.com/',
        facebookFollowers: '2.5M',
        facebookUrl: 'https://www.facebook.com/deutschewelle',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/dwnews',
        instagramFollowers: '500K',
        instagramUrl: 'https://www.instagram.com/dwnews/',
        type: 'Public Broadcaster',
        country: 'Germany'
    },
    {
        name: 'Der Spiegel',
        description: "One of Germany's most influential news magazines.",
        websiteUrl: 'https://www.spiegel.de/',
        type: 'Magazine',
        country: 'Germany'
    },
    {
        name: 'Frankfurter Allgemeine Zeitung (FAZ)',
        description: 'A leading German liberal-conservative newspaper.',
        websiteUrl: 'https://www.faz.net/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Süddeutsche Zeitung',
        description: 'The largest German national subscription daily newspaper.',
        websiteUrl: 'https://www.sueddeutsche.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Die Zeit',
        description: 'A weekly German national newspaper.',
        websiteUrl: 'https://www.zeit.de/index',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Bild',
        description: 'A German tabloid newspaper.',
        websiteUrl: 'https://www.bild.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Handelsblatt',
        description: 'A leading German-language business newspaper.',
        websiteUrl: 'https://www.handelsblatt.com/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Frankfurter Rundschau',
        description: 'A German daily newspaper based in Frankfurt.',
        websiteUrl: 'https://www.fr.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Die Welt',
        description: 'A German national daily newspaper.',
        websiteUrl: 'https://www.welt.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'taz.die tageszeitung',
        description: 'A left-leaning German daily newspaper.',
        websiteUrl: 'https://taz.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Neues Deutschland',
        description: 'A German daily newspaper, formerly the official party organ of the Socialist Unity Party of Germany (SED).',
        websiteUrl: 'https://www.nd-aktuell.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Junge Welt',
        description: 'A German daily newspaper, published in Berlin.',
        websiteUrl: 'https://www.jungewelt.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Junge Freiheit',
        description: 'A German weekly newspaper for politics and culture.',
        websiteUrl: 'https://jungefreiheit.de/',
        type: 'Newspaper',
        country: 'Germany'
    },
    {
        name: 'Focus',
        description: 'A German weekly news magazine.',
        websiteUrl: 'https://www.focus.de/',
        type: 'Magazine',
        country: 'Germany'
    },
    {
        name: 'Stern',
        description: 'A German weekly news magazine.',
        websiteUrl: 'https://www.stern.de/',
        type: 'Magazine',
        country: 'Germany'
    }
];