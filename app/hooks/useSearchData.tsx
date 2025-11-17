'use client'
import React from 'react'


const useSearchData = () => {
    const [searchResults, setSearchResults] = React.useState([]);
    const [loadingSearch, setLoadingSearch] = React.useState(false);
    const [errorSearch, setErrorSearch] = React.useState("");

    const fetchSearchResults = async (query: string) => {
        setLoadingSearch(true);
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
            );
            const data = await response.json();
            setSearchResults(data.articles);
        }
        catch (error) {
            setErrorSearch("Failed to fetch search results.");
        }
        finally {
            setLoadingSearch(false);
        }
    };

    const fetchSpecificNews = async (source: string, title: string) => {
        setLoadingSearch(true);
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${title}&qInTitle=${title}&sources=${source}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
            );
            if (response.status !== 200) {
                setErrorSearch("Failed to fetch specific news.");
            }
            const data = await response.json();
            setSearchResults(data.articles);
        }
        catch (error) {
            console.log("in error")
            setErrorSearch("Failed to fetch the news.");
        }
        finally {
            setLoadingSearch(false);
        }
    };

    return {
        searchResults,
        loadingSearch,
        errorSearch,
        fetchSearchResults,
        fetchSpecificNews
    }
}

export default useSearchData