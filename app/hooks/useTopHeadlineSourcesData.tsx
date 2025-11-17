'use client'
import React from 'react'
const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

const useTopHeadlineSourcesData = () => {
    const [topHeadlineSources, setTopHeadlineSources] = React.useState([])
    const [loadingTopHeadlineSources, setLoadingTopHeadlines] = React.useState(true)
    const [errorTopHeadlineSources, setErrorTopHeadlineSources] = React.useState<null | string>(null)

    const fetchTopHeadlines = async () => {
        setLoadingTopHeadlines(true);
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
            );
            const data = await response.json();
            setTopHeadlineSources(data.articles);
        } catch (error) {
            console.error("Error fetching top headlines:", error);
            setErrorTopHeadlineSources("Failed to fetch top headline sources.");
        } finally {
            setLoadingTopHeadlines(false);
        }

    };

    React.useEffect(() => {
        fetchTopHeadlines();
    }, []);

    return {
        topHeadlineSources,
        loadingTopHeadlineSources,
        errorTopHeadlineSources,
    }
}

export default useTopHeadlineSourcesData