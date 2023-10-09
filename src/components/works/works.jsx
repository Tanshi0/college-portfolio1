import Image from "../work/work";
import styles from "../works/works.module.css"

function Works(){
    return(
        <div className={styles.container}>
            <div className={styles.works}>
                <Image url={"https://images.unsplash.com/photo-1644352739408-a191ed85e513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}/> 
                <Image url={"https://images.unsplash.com/photo-1561211974-8a2737b4dcac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1695634183389-53116dd525a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1589824769965-d2bdab6dfe57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"}/>
            </div>
        </div>
    )
}

export default Works;