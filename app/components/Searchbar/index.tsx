import React, { Dispatch, InputHTMLAttributes, SetStateAction } from 'react'

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
        <div className='w-full border-gray-300 '>
            <input type="text" placeholder='Search for news...' value={query} onChange={handleInputChange} className='w-full border-2 border-gray-300 p-2 rounded-lg' />
        </div>
    )
}

export default SearchBar