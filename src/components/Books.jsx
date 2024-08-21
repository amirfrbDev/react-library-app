import { useState } from "react";

import Search from "./Search";
import BookCard from "./BookCard";
import SideBar from "./SideBar";

import { data } from "../constants/mockData";

import styles from "./Books.module.css"

function Books() {

    const books = data;

    const [displayedBooks, setDisplayedBooks] = useState(books);
    const [likedList, setLikedList] = useState([])

    return (
        <div>

            <Search books={books} setDisplayedBooks={setDisplayedBooks} />

            <div className={styles.main}>
                <ul className={styles.cardsContainer}>
                    {displayedBooks.map(book =>
                        <BookCard
                            key={book.id}
                            data={book}
                            likedList={likedList}
                            setLikedList={setLikedList}
                        />
                    )}
                </ul>
                {likedList.length ? <SideBar likedList={likedList} />:""}
            </div>
        </div>
    )
}

export default Books