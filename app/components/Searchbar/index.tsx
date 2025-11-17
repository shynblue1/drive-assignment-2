import React, { Dispatch, InputHTMLAttributes, SetStateAction } from 'react'
import styles from './Searchbar.module.scss'
type Props = InputHTMLAttributes<HTMLInputElement> & {
    query: string;
    setQuery: Dispatch<SetStateAction<string>> | undefined;
}

const SearchBar = (props: Props) => {
    const { query, setQuery } = props;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setQuery) {
            setQuery(e.target.value);
        }
    };
    return (
        <div className={`${styles.searchbar}`}>
            <input type="text" placeholder='Search for news...' value={query} onChange={handleInputChange} className={`${styles.input}`} />
        </div>
    )
}

export default SearchBar