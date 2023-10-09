import React from "react";
import styles from "./header.module.css";
import Btn from "../button/button.jsx"



function Header()  {
return (
    <header className={styles.header}>
        <h1 className={styles.title}>
            Работы студентов
        </h1>
        <div>
            <Btn child="все работы"/>
            <Btn child="иллюстрации"/>
            <Btn child="фото"/>
            <Btn child="шрифты"/>
        </div>

    </header>
)
}

export default Header