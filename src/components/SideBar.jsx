import styles from "./SideBar.module.css"
import SideCard from "./SideCard"

function SideBar({  likedList }) {
    return (
        <div className={styles.sidebar}>
            <h3>Favorites:</h3>
            <hr />
            {likedList && likedList.map(book => <SideCard key={book.id} book={book} />)}
        </div>
    )
}

export default SideBar