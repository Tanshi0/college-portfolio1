import React from "react";
import styles from "./scrolling.module.css";
import BtnPage from "./btnPage.jsx";

function Slider(props)  {
    return (
        <div className={styles.pagination}>
            <BtnPage child="1"/>
            <span className={styles.dots}> ... </span>
            <BtnPage child="18"/>
            <BtnPage child="19"/>
            <BtnPage child="20"/>
            <span className={styles.dots}> ... </span>
            <BtnPage child="47"/>
        </div>
    )
}

export default Slider