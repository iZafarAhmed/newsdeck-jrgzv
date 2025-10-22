
export interface MissouriNewsSource {
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

export const missouriNewsSources: MissouriNewsSource[] = [
    {
        name: 'St. Louis Post-Dispatch',
        description: 'The major daily newspaper for the St. Louis metropolitan area.',
        websiteUrl: 'https://www.stltoday.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/stltoday',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/stltoday',
        instagramFollowers: '80K',
        instagramUrl: 'https://www.instagram.com/stltoday/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KMOV (CBS 4)',
        description: 'CBS affiliate serving St. Louis and the surrounding region.',
        websiteUrl: 'https://www.kmov.com/',
        facebookFollowers: '1.2M',
        facebookUrl: 'https://www.facebook.com/kmov4',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/kmov',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/kmov4/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KSDK (5 On Your Side)',
        description: 'NBC affiliate in St. Louis, providing local news, weather, and sports.',
        websiteUrl: 'https://www.ksdk.com/',
        facebookFollowers: '900K',
        facebookUrl: 'https://www.facebook.com/ksdktv',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/ksdknews',
        instagramFollowers: '120K',
        instagramUrl: 'https://www.instagram.com/ksdknews/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The Kansas City Star',
        description: 'A major newspaper covering the Kansas City metropolitan area.',
        websiteUrl: 'https://www.kansascity.com/',
        facebookFollowers: '400K',
        facebookUrl: 'https://www.facebook.com/kansascitystar',
        xFollowers: '450K',
        xUrl: 'https://twitter.com/kcstar',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kcstar/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KSHB 41 (Kansas City)',
        description: 'NBC affiliate serving the Kansas City area.',
        websiteUrl: 'https://www.kshb.com/',
        facebookFollowers: '500K',
        facebookUrl: 'https://www.facebook.com/kshb41',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/KSHB41',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/kshb41/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KMBC 9 (Kansas City)',
        description: 'ABC affiliate providing news and weather for the Kansas City region.',
        websiteUrl: 'https://www.kmbc.com/',
        facebookFollowers: '800K',
        facebookUrl: 'https://www.facebook.com/kmbc9',
        xFollowers: '350K',
        xUrl: 'https://twitter.com/kmbc',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/kmbc9news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'WDAF-TV (FOX4 Kansas City)',
        description: 'Fox affiliate for Kansas City, offering news and entertainment.',
        websiteUrl: 'https://fox4kc.com/',
        facebookFollowers: '1.1M',
        facebookUrl: 'https://www.facebook.com/fox4kc',
        xFollowers: '300K',
        xUrl: 'https://twitter.com/fox4kc',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/fox4kc/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Springfield News-Leader',
        description: 'The main daily newspaper for Springfield and southwestern Missouri.',
        websiteUrl: 'https://www.news-leader.com/',
        facebookFollowers: '120K',
        facebookUrl: 'https://www.facebook.com/springfieldnewsleader',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/springfieldNL',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/sgfnewsleader/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KY3 (Springfield)',
        description: 'NBC affiliate serving Springfield and the Ozarks region.',
        websiteUrl: 'https://www.ky3.com/',
        facebookFollowers: '600K',
        facebookUrl: 'https://www.facebook.com/ky3news',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/ky3news',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/ky3news/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'KOLR10 (Springfield)',
        description: 'CBS affiliate providing news for the Ozarks.',
        websiteUrl: 'https://www.ozarksfirst.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/kolr10kozl',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/kolr10kozl',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/ozarksfirst/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'Columbia Missourian',
        description: 'A community newspaper produced by students at the Missouri School of Journalism.',
        websiteUrl: 'https://www.columbiamissourian.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/missourian',
        xFollowers: '35K',
        xUrl: 'https://twitter.com/columbiamissourian',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/columbiamissourian/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'KOMU 8 (Columbia)',
        description: 'NBC affiliate run by the Missouri School of Journalism.',
        websiteUrl: 'https://www.komu.com/',
        facebookFollowers: '100K',
        facebookUrl: 'https://www.facebook.com/komu8',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/komu',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/komu8/',
        type: 'Broadcasting',
        country: 'USA'
    },
    {
        name: 'The St. Joseph News-Press',
        description: 'A daily newspaper serving St. Joseph and northwestern Missouri.',
        websiteUrl: 'https://www.newspressnow.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/newspressnow',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/newspressnow',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/newspressnow/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Riverfront Times',
        description: 'St. Louis\' alternative weekly, covering news, culture, and events.',
        websiteUrl: 'https://www.riverfronttimes.com/',
        facebookFollowers: '122.2K',
        facebookUrl: 'https://www.facebook.com/RiverfrontTimes',
        xFollowers: '133.7K',
        xUrl: 'https://twitter.com/RiverfrontTimes',
        instagramFollowers: '72.9K',
        instagramUrl: 'https://www.instagram.com/riverfronttimes/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Pitch (Kansas City)',
        description: 'Kansas City\'s alternative weekly for news, arts, and culture.',
        websiteUrl: 'https://www.thepitchkc.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/thepitchkc',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/thepitchkc',
        instagramFollowers: '40K',
        instagramUrl: 'https://www.instagram.com/thepitchkc/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'St. Louis Public Radio (KWMU)',
        description: 'The NPR member station for St. Louis.',
        websiteUrl: 'https://news.stlpublicradio.org/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/stlpublicradio',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/stlpublicradio',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/stlpublicradio/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'KCUR (Kansas City)',
        description: 'NPR member station for the Kansas City metropolitan area.',
        websiteUrl: 'https://www.kcur.org/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/kcur.org',
        xFollowers: '70K',
        xUrl: 'https://twitter.com/kcur',
        instagramFollowers: '15K',
        instagramUrl: 'https://www.instagram.com/kcur893/',
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Missouri Times',
        description: 'A publication focused on Missouri politics and government.',
        websiteUrl: 'https://themissouritimes.com/',
        facebookFollowers: '20K',
        facebookUrl: 'https://www.facebook.com/themissouritimes',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/missouritimes',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/themissouritimes/',
        type: 'Online Media',
        country: 'USA'
    },
    {
        name: 'MissouriNet',
        description: 'A statewide radio news network.',
        websiteUrl: 'https://www.missourinet.com/',
        facebookFollowers: '10K',
        facebookUrl: 'https://www.facebook.com/MissouriNet',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/missourinet',
        instagramFollowers: null,
        instagramUrl: null,
        type: 'Radio',
        country: 'USA'
    },
    {
        name: 'The Joplin Globe',
        description: 'A daily newspaper serving Joplin and the four-state area.',
        websiteUrl: 'https://www.joplinglobe.com/',
        facebookFollowers: '80K',
        facebookUrl: 'https://www.facebook.com/joplinglobe',
        xFollowers: '30K',
        xUrl: 'https://twitter.com/joplinglobe',
        instagramFollowers: '8K',
        instagramUrl: 'https://www.instagram.com/joplinglobe/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Jefferson City News Tribune',
        description: 'The daily newspaper for Jefferson City, the state capital.',
        websiteUrl: 'https://www.newstribune.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/newstribune',
        xFollowers: '15K',
        xUrl: 'https://twitter.com/newstribune',
        instagramFollowers: '2K',
        instagramUrl: 'https://www.instagram.com/newstribune/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'Southeast Missourian',
        description: 'A daily newspaper serving Cape Girardeau and southeastern Missouri.',
        websiteUrl: 'https://www.semissourian.com/',
        facebookFollowers: '60K',
        facebookUrl: 'https://www.facebook.com/semissourian',
        xFollowers: '20K',
        xUrl: 'https://twitter.com/semissourian',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/semissourian/',
        type: 'Newspaper',
        country: 'USA'
    },
    {
        name: 'The Kansas City Call',
        description: 'A historic African American weekly newspaper.',
        websiteUrl: 'https://www.kccall.com/',
        facebookFollowers: '5K',
        facebookUrl: 'https://www.facebook.com/TheKansasCityCall',
        xFollowers: '2K',
        xUrl: 'https://twitter.com/kccallnews',
        instagramFollowers: '1K',
        instagramUrl: 'https://www.instagram.com/kccallnews/',
        type: 'Newspaper',
        country: 'USA'
    }
];
