import styles from "./SideCard.module.css"

import { RxCross2 } from "react-icons/rx";

function SideCard({ book: { image, title } }) {

    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt={title} className={styles.image} />
                <p>{title}</p>
            </div>
        </div>
    )
}

export default SideCard