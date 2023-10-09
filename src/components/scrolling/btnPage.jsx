import React from "react";
import styles from "./scrolling.module.css"


function BtnPage(props)  {
    return (
        <a href ="#" className={styles.btn}>{props.child}</a>
    )
}

export default BtnPage