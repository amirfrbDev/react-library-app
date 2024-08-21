import { useState } from "react"

import styles from "./Search.module.css"

import { SlMagnifier } from "react-icons/sl";

function Search({ books, setDisplayedBooks }) {
    const [search, setSearch] = useState("")

    const searchHandler = () => {
        const searchedBooks = books.filter(books => books.title.toLowerCase().includes(search.toLowerCase().trim()));

        setDisplayedBooks(searchedBooks)
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search Title"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className={styles.searchInput}
            />
            <button onClick={searchHandler} className={styles.searchButton}><SlMagnifier /></button>
        </div>
    )
}

export default Search