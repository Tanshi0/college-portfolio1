import React from "react";
import styles from "./footer.module.css";

function Header()  {
    return (
        <footer className={styles.footer}>
            <span className={styles.date}>НКПиИТ, 2023</span>
        </footer>
    )
}
export default Header