'use client'
import React from 'react'
const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

const useTopHeadlinesData = () => {

    const [topHeadlines, setTopHeadlines] = React.useState([])
    const [loadingTopHeadlines, setLoadingTopHeadlines] = React.useState(true)
    const [errorTopHeadlines, setErrorTopHeadlines] = React.useState<null | string>(null)

    const fetchTopHeadlines = async () => {
        setLoadingTopHeadlines(true);
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
            );
            const data = await response.json();
            setTopHeadlines(data.articles);
        } catch (error) {
            console.error("Error fetching top headlines:", error);
            setErrorTopHeadlines("Failed to fetch top headlines.");
        }
        finally {
            setLoadingTopHeadlines(false);
        }
    };

    React.useEffect(() => {
        fetchTopHeadlines();
    }, []);

    return {
        topHeadlines,
        loadingTopHeadlines,
        errorTopHeadlines,
    }
}

export default useTopHeadlinesData