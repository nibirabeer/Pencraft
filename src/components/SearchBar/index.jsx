import React, { useState } from 'react';

function SearchBar(props) {
    const [authorCriteria, setAuthorCriteria] = useState({
        name: "",
        genre: "",
        country: ""
    });

    const handleChange = (e) => {
        setAuthorCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const searchAuthors = async () => {
        await props.fetchAuthors(authorCriteria);
    };

    return (
        <div className='flex gap-4 my-10 justify-center px-10'>
            <input
                type="text"
                name="name"
                value={authorCriteria.name}
                onChange={handleChange}
                placeholder="Author Name"
                className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
            />
            <select
                onChange={handleChange}
                name="genre"
                value={authorCriteria.genre}
                className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
            >
                <option value="" disabled hidden>Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
            </select>
            <select
                onChange={handleChange}
                name="country"
                value={authorCriteria.country}
                className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
            >
                <option value="" disabled hidden>Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="India">Bangladesh</option>
            </select>
            <button
                onClick={searchAuthors}
                className='w-64 bg-black text-white font-bold py-3 rounded-md' // Updated button styling
            >
                Search Authors
            </button>
        </div>
    );
}

export default SearchBar;
