import styles from "../work/work.module.css";

function Image({url}){
    return(
        <>
            <img alt="" className={styles.img} src={url} />
        </>
    )
}

export default Image;