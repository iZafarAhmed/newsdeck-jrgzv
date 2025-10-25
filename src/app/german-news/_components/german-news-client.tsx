'use client'

import { useState } from 'react';
import { germanNewsSources, GermanNewsSource } from '@/data/german-news-sources';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Custom Components
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function GermanNewsClient() {
    const [showSocial, setShowSocial] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <main className="py-12 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">German News Sources</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">A collection of top German news sources.</p>
                        <Button onClick={() => setShowSocial(!showSocial)} className="mt-4">
                            {showSocial ? 'Hide Social Stats' : 'Show Social Stats'}
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {germanNewsSources.map((source: GermanNewsSource) => (
                            <Card key={source.name}>
                                <CardHeader>
                                    <CardTitle>{source.name}</CardTitle>
                                    <CardDescription>{source.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-500"><strong>Type:</strong> {source.type}</p>
                                    <p className="text-sm text-gray-500"><strong>Country:</strong> {source.country}</p>
                                    {showSocial && (
                                        <div className="mt-4">
                                            {source.facebookFollowers && <p>Facebook Followers: {source.facebookFollowers}</p>}
                                            {source.xFollowers && <p>X Followers: {source.xFollowers}</p>}
                                            {source.instagramFollowers && <p>Instagram Followers: {source.instagramFollowers}</p>}
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter>
                                    <a href={source.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Website</a>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}