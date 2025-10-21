
export interface NonprofitNewsSource {
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

export const nonprofitNewsSources: NonprofitNewsSource[] = [
    {
        name: 'ProPublica',
        description: 'An independent, nonprofit newsroom that produces investigative journalism with moral force.',
        websiteUrl: 'https://www.propublica.org/',
        facebookFollowers: '450K',
        facebookUrl: 'https://www.facebook.com/propublica',
        xFollowers: '1M',
        xUrl: 'https://twitter.com/propublica',
        instagramFollowers: '150K',
        instagramUrl: 'https://www.instagram.com/propublica/',
        type: 'Investigative',
        country: 'USA'
    },
    {
        name: 'The Marshall Project',
        description: 'A nonpartisan, nonprofit news organization that seeks to create and sustain a sense of national urgency about the U.S. criminal justice system.',
        websiteUrl: 'https://www.themarshallproject.org/',
        facebookFollowers: '250K',
        facebookUrl: 'https://www.facebook.com/themarshallproject',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/marshallproj',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/themarshallproj/',
        type: 'Investigative',
        country: 'USA'
    },
    {
        name: 'The Center for Public Integrity',
        description: 'A nonprofit newsroom that investigates and reports on abuses of power.',
        websiteUrl: 'https://publicintegrity.org/',
        facebookFollowers: '150K',
        facebookUrl: 'https://www.facebook.com/publici',
        xFollowers: '200K',
        xUrl: 'https://twitter.com/publicintegrity',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/publicintegrity/',
        type: 'Investigative',
        country: 'USA'
    },
    {
        name: 'The Texas Tribune',
        description: 'The only member-supported, digital-first, nonpartisan media organization that informs Texans about public policy, politics, government and statewide issues.',
        websiteUrl: 'https://www.texastribune.org/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/texastribune',
        xFollowers: '400K',
        xUrl: 'https://twitter.com/texastribune',
        instagramFollowers: '100K',
        instagramUrl: 'https://www.instagram.com/texastribune/',
        type: 'Regional',
        country: 'USA'
    },
    {
        name: 'CalMatters',
        description: 'A nonprofit, nonpartisan newsroom committed to explaining California policy and politics.',
        websiteUrl: 'https://calmatters.org/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/calmatters',
        xFollowers: '80K',
        xUrl: 'https://twitter.com/calmatters',
        instagramFollowers: '20K',
        instagramUrl: 'https://www.instagram.com/calmatters/',
        type: 'Regional',
        country: 'USA'
    },
    {
        name: 'MinnPost',
        description: 'A nonprofit, nonpartisan enterprise news organization that provides high-quality journalism for people who care about Minnesota.',
        websiteUrl: 'https://www.minnpost.com/',
        facebookFollowers: '30K',
        facebookUrl: 'https://www.facebook.com/minnpost',
        xFollowers: '100K',
        xUrl: 'https://twitter.com/minnpost',
        instagramFollowers: '5K',
        instagramUrl: 'https://www.instagram.com/minnpost/',
        type: 'Regional',
        country: 'USA'
    },
    {
        name: 'The Conversation',
        description: 'An independent source of news and views, from the academic and research community, delivered direct to the public.',
        websiteUrl: 'https://theconversation.com/',
        facebookFollowers: '300K',
        facebookUrl: 'https://www.facebook.com/theconversationcom',
        xFollowers: '250K',
        xUrl: 'https://twitter.com/conversationus',
        instagramFollowers: '50K',
        instagramUrl: 'https://www.instagram.com/theconversationdotcom/',
        type: 'Academic',
        country: 'Global'
    },
    {
        name: 'The Bureau of Investigative Journalism',
        description: 'The UK\'s largest independent investigative journalism organisation.',
        websiteUrl: 'https://www.thebureauinvestigates.com/',
        facebookFollowers: '50K',
        facebookUrl: 'https://www.facebook.com/thebureauinvestigates',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/tbij',
        instagramFollowers: '10K',
        instagramUrl: 'https://www.instagram.com/tbijourno/',
        type: 'Investigative',
        country: 'UK'
    },
    {
        name: 'Reveal from The Center for Investigative Reporting',
        description: 'A national nonprofit news organization that produces investigative journalism for impact.',
        websiteUrl: 'https://revealnews.org/',
        facebookFollowers: '200K',
        facebookUrl: 'https://www.facebook.com/Reveal',
        xFollowers: '150K',
        xUrl: 'https://twitter.com/reveal',
        instagramFollowers: '30K',
        instagramUrl: 'https://www.instagram.com/revealnews/',
        type: 'Investigative',
        country: 'USA'
    },
    {
        name: 'The Intercept',
        description: 'An award-winning nonprofit news organization dedicated to holding the powerful accountable through fearless, adversarial journalism.',
        websiteUrl: 'https://theintercept.com/',
        facebookFollowers: '700K',
        facebookUrl: 'https://www.facebook.com/theintercept',
        xFollowers: '1.2M',
        xUrl: 'https://twitter.com/theintercept',
        instagramFollowers: '200K',
        instagramUrl: 'https://www.instagram.com/theintercept/',
        type: 'Investigative',
        country: 'USA'
    }
];
