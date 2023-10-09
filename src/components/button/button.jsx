import React from "react";
import styles from "./button.module.css"


function Btn(props)  {
    return (
        <a href ="#" className={styles.btn}>{props.child}</a>
    )
}

export default Btn