import { useState } from "react"

import { AiFillHeart } from "react-icons/ai"

import styles from "./BookCard.module.css"

function BookCard({ data, likedList, setLikedList }) {

    const { id, title, author, image, language, pages } = data;

    const [like, setLike] = useState(false)

    211

    const likeHandler = () => {
        setLike(like => !like)

        if (like) {
            const newLikedList = likedList.filter(book => book.id !== id);
            setLikedList(newLikedList)
        } else {
            setLikedList(likedList => ([...likedList, data]))
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.cardInfo}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={title} className={styles.cardImage} />
                </div>
                <div className={styles.cardText}>
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <div>
                        <span>🌐 {language}</span>
                        <span>📖 {pages} pages</span>
                    </div>
                </div>
            </div>
            <button onClick={likeHandler} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
                <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
            </button>
        </div >
    )
}

export default BookCard