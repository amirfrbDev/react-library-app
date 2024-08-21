import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <h1>Book App Starting files</h1>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed With ❤️ By <a href="#">Amir</a></p>
            </footer>
        </>
    )
}

export default Layout